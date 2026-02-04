import type { ActionFunction } from "react-router";

// AI-friendly contact form API endpoint
// Accepts both form submissions and JSON requests from AI agents

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
    honeypot?: string; // Spam trap
}

// Validate email format
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

export const action: ActionFunction = async ({ request }) => {
    // CORS headers for AI agents
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    });

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed', allowedMethods: ['POST'] }),
            { status: 405, headers }
        );
    }

    try {
        let data: ContactFormData;

        // Parse request body (support both JSON and FormData)
        const contentType = request.headers.get('Content-Type') || '';
        if (contentType.includes('application/json')) {
            data = await request.json();
        } else {
            const formData = await request.formData();
            data = {
                name: formData.get('name') as string || '',
                email: formData.get('email') as string || '',
                phone: formData.get('phone') as string || '',
                service: formData.get('service') as string || '',
                message: formData.get('message') as string || '',
                honeypot: formData.get('honeypot') as string || '',
            };
        }

        // Honeypot spam check
        if (data.honeypot) {
            // Silent success to not alert spammers
            return new Response(
                JSON.stringify({ success: true, message: 'Message received' }),
                { status: 200, headers }
            );
        }

        // Validation
        const errors: string[] = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name is required (minimum 2 characters)');
        }

        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Valid email address is required');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message is required (minimum 10 characters)');
        }

        if (data.message && data.message.length > 5000) {
            errors.push('Message too long (maximum 5000 characters)');
        }

        if (errors.length > 0) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Validation failed',
                    errors,
                    hint: 'Required fields: name (2+ chars), email (valid format), message (10-5000 chars)'
                }),
                { status: 400, headers }
            );
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitize(data.name.trim()),
            email: data.email.trim().toLowerCase(),
            phone: data.phone ? sanitize(data.phone.trim()) : '',
            service: data.service ? sanitize(data.service.trim()) : 'general',
            message: sanitize(data.message.trim()),
            submittedAt: new Date().toISOString(),
            userAgent: request.headers.get('User-Agent') || 'Unknown',
            ip: request.headers.get('X-Forwarded-For') || 'Unknown',
        };

        // Log submission (in production, you'd send email or save to database)
        console.log('Contact form submission:', sanitizedData);

        // TODO: Add your email service integration here
        // Examples:
        // - Resend: await resend.emails.send({ ... })
        // - SendGrid: await sgMail.send({ ... })
        // - Supabase: await supabase.from('contacts').insert(sanitizedData)

        // Success response with AI-friendly metadata
        return new Response(
            JSON.stringify({
                success: true,
                message: 'Thank you for your message! I will get back to you within 24 hours.',
                data: {
                    name: sanitizedData.name,
                    email: sanitizedData.email,
                    service: sanitizedData.service,
                    submittedAt: sanitizedData.submittedAt,
                },
                nextSteps: [
                    'You will receive a confirmation email shortly',
                    'Expect a response within 24 hours',
                    'For urgent matters, call +91-91468-90521'
                ],
                businessHours: 'Monday to Saturday, 9AM - 9PM IST'
            }),
            { status: 200, headers }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Server error',
                message: 'Please try again later or contact directly via email'
            }),
            { status: 500, headers }
        );
    }
};

// GET handler for AI agents to check endpoint info
export async function loader() {
    return new Response(
        JSON.stringify({
            endpoint: '/api/contact',
            method: 'POST',
            description: 'Contact form submission endpoint for Dhanraj Pimple portfolio',
            contentTypes: ['application/json', 'multipart/form-data'],
            requiredFields: {
                name: { type: 'string', minLength: 2, description: 'Full name of the sender' },
                email: { type: 'string', format: 'email', description: 'Valid email address' },
                message: { type: 'string', minLength: 10, maxLength: 5000, description: 'Message content' }
            },
            optionalFields: {
                phone: { type: 'string', description: 'Phone number with country code' },
                service: {
                    type: 'string',
                    enum: ['static-website', 'fullstack-website', 'mobile-app', 'ai-chatbot', 'seo-automation', 'devops', 'general'],
                    description: 'Service interested in'
                }
            },
            example: {
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+91-9876543210',
                service: 'fullstack-website',
                message: 'I need a website for my business. Please contact me.'
            },
            rateLimit: '10 requests per minute per IP',
            responseTime: 'Usually within 24 hours'
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }
    );
}

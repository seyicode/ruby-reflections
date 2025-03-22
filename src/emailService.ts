import emailjs from '@emailjs/browser';

export const sendEmail = async (name: string, email: string, message: string) => {
    // Initialize EmailJS with the public key
    emailjs.init('j9mZr2-QJStCua321');

    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim();
    
    console.log("Original message:", message);
    console.log("Sanitized message:", sanitizedMessage);

    // Format the email content as plain text
    const emailContent = `
From: ${sanitizedName} <${sanitizedEmail}>

Message:
"${sanitizedMessage}"

-------------------
Sent on: ${formattedDate}
Via: Serenity Counseling Contact Form
    `.trim();
    
    console.log("Email content:", emailContent);

    const templateParams = {
        from_name: sanitizedName,
        from_email: sanitizedEmail,
        message: emailContent,
        to_name: 'Seyi',
        reply_to: sanitizedEmail
    };

    try {
        const response = await emailjs.send(
            'service_hilcxxo',
            'template_9334kzp',
            templateParams
        );
        
        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
        
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

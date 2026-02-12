const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "oyeniranoluwafemi36@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD, // The 16-character App Password
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
});

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", // or your specific provider host
//     port: 465,
//     secure: true, // true for 465, false for 587
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
//     // Add this to help with timeouts
//     connectionTimeout: 10000, // 10 seconds
//     greetingTimeout: 10000,
// });

const Mailing = (req, res) => {
    (async () => {
        const info = await transporter.sendMail({
            from: '"Your Conscience Awaits!" <devfemi3@gmail.com>',
            to: "devfemi3@gmail.com, aremumiriam08@gmail.com, toniaoluwarantimi@gmail.com, janetoduleke17@gmail.com",
            subject: "Will you die or live? ❌",
            // text: "Hello world?", // Plain-text version of the message
            html: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Conscience - A Moment of Reflection</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
        style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 40px 20px;">
                <!-- Main Container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600"
                    style="margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">

                    <!-- Header -->
                    <tr>
                        <td style="background: #4462ec; padding: 50px 40px; text-align: center;">
                            <h1
                                style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase;">
                                Your Conscience</h1>
                            <p style="margin: 10px 0 0 0; color: #e0e0e0; font-size: 14px; font-style: italic;">A moment
                                of reflection</p>
                        </td>
                    </tr>

                    <!-- Hero Image -->
                    <tr>
                        <td style="padding: 0;">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop"
                                alt="Peaceful Mountain Landscape"
                                style="display: block; width: 100%; height: auto; max-width: 600px;" />
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 50px 40px;">
                            <h2
                                style="margin: 0 0 25px 0; color: #333333; font-size: 24px; font-weight: 400; text-align: center; line-height: 1.4;">
                                "The mind is everything. What you think, you become."
                            </h2>

                            <p
                                style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.8; text-align: justify;">
                                In the quiet moments between the noise of daily life, we find the whispers of our true
                                selves. Each thought we nurture, each decision we make, shapes not only our present but
                                carves the path of our future.
                            </p>

                            <p
                                style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.8; text-align: justify;">
                                Remember that growth often comes disguised as discomfort. The questions that keep you
                                awake at night are often the keys to your greatest transformations. Listen to them.
                                Honor them. They are your conscience speaking.
                            </p>

                            <!-- Quote Box -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                                style="margin: 30px 0;">
                                <tr>
                                    <td
                                        style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 25px 30px; border-radius: 4px;">
                                        <p
                                            style="margin: 0; color: #555555; font-size: 16px; line-height: 1.7; font-style: italic;">
                                            "Yesterday I was clever, so I wanted to change the world. Today I am wise,
                                            so I am changing myself."
                                        </p>
                                        <p
                                            style="margin: 15px 0 0 0; color: #667eea; font-size: 14px; font-weight: 600; text-align: right;">
                                            — Rumi
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <p
                                style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.8; text-align: justify;">
                                Take a moment today to breathe deeply, to pause, and to reflect. What is your inner
                                voice telling you? What truth have you been avoiding? What dream have you been
                                postponing?
                            </p>
                        </td>
                    </tr>

                    <!-- Image Grid -->
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td width="48%" style="vertical-align: top;">
                                        <img src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=250&h=250&fit=crop"
                                            alt="Thoughtful Moment"
                                            style="display: block; width: 100%; height: auto; border-radius: 8px;" />
                                    </td>
                                    <td width="4%"></td>
                                    <td width="48%" style="vertical-align: top;">
                                        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=250&h=250&fit=crop"
                                            alt="Peaceful Reflection"
                                            style="display: block; width: 100%; height: auto; border-radius: 8px;" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Call to Action -->
                    <tr>
                        <td style="padding: 0 40px 50px 40px; text-align: center;">
                            <p style="margin: 0 0 25px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                                Your journey of self-discovery is uniquely yours.<br />Embrace it with courage and
                                compassion.
                            </p>
                            <a href="https://evento-femi.vercel.app"
                                style="display: inline-block; padding: 15px 40px; background: #667eea; color: #ffffff; text-decoration: none; border-radius: 50px; font-size: 16px; font-weight: 600; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                                Begin Your Reflection
                            </a>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td
                            style="background-color: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0 0 10px 0; color: #999999; font-size: 14px; line-height: 1.6;">
                                <strong style="color: #667eea;">Your Conscience</strong><br />
                                Guiding you towards mindful living
                            </p>
                            <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px;">
                                You're receiving this because you subscribed to our reflections.<br />
                                <a href="https://evento-femi.vercel.app/login" style="color: #667eea; text-decoration: none;">Unsubscribe</a> |
                                <a href="https://evento-femi.vercel.app/login" style="color: #667eea; text-decoration: none;">Update Preferences</a>
                            </p>
                            <p style="margin: 15px 0 0 0; color: #cccccc; font-size: 11px;">
                                © 2026 Your Conscience. All rights reserved.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>

</html>
            `
        });

        console.log("Message sent:", info.messageId);
        res.json({ messageSent: info.messageId });
    })();
}

module.exports = { Mailing }
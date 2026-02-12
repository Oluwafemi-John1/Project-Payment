require('dotenv').config()
const {Resend} = require('resend')
const resendKey = process.env.RESEND_API_KEY
const resend = new Resend(resendKey);

const sendResend = (req, res) => {
    (async function () {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['oyeniranoluwafemi36@gmail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });
    
        if (error) {
            return console.error({ error });
        }
    
        console.log({ data });
        res.status(201).json({message: data})
    })();
}

module.exports = { sendResend }
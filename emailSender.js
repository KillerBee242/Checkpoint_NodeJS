// Step 05 : E-mail sender
const { error } = require('console');
const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'expo242@gmail.com',
        pass: 'expo242p@ss',
    },
});

const mailOptions = {
    from: 'expo242@gmail.com',
    to: 'desto242@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email from Node.js using a fictitious Gmail account !',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.TEST_EMAIL, // generated ethereal user
        pass: process.env.TEST_PWD  // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
})

const sendWelcomeEmail = async (email, company, password) => {

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Jacobsen og Svart" ${process.env.TEST_EMAIL}', // sender address
        to: '', // list of receivers
        subject: 'Welcome to Jacobsen og Svart', // Subject line
        text: '', // plain text body
        html: '' // html body
    }

    const output = `
        <p>Welcome to Jacobsen og Svart, ${company}!</p>
        <h3>You are recieving this email because you registered your company at jacobsensvart.no.</h3>
        <p>Before using your account we ask you to log in with this temporary password and reset it to something of your liking.</p>
        <p>Log in credentials:</p>
        <ul>  
          <li>Email: ${email}</li>
          <li>Temporary password: ${password}</li>
        </ul>
        <p>Best regards</p>
    `
    mailOptions.html = output
    mailOptions.to = email

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
    })
}

const sendOrderConfirmation = async (email, company, ordernumber) => {

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Jacobsen og Svart" ${process.env.TEST_EMAIL}', // sender address
        to: '', // list of receivers
        subject: 'Order confirmation', // Subject line
        text: '', // plain text body
        html: '' // html body
    }
    const output = `
        <p>Hi, ${company}!</p>
        <h2>Order confirmation from Jacobsen og Svart.</h2>
        <h3>Order number:</h3>
        <ul>  
            <li>#${ordernumber}</li>
        </ul>
        <p>Thank you for ordering our coffee!</p>
        <br>
        <p>For more information about your order, please visit your account at jacobsensvart.no</p>
        <p>Best regards</p>
    `
    mailOptions.html = output
    mailOptions.to = email

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendOrderConfirmation
}
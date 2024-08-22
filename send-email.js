const nodemailer = require('nodemailer');
const { template_reservation_hotel } = require('./template_mail');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendEmail = async (to, subject, text, context) => {
  const mailOptions = {
    from: 'diego.cabrera.technology@gmail.com', 
    to: to,
    subject: subject,
    text : '',
    html : template_reservation_hotel({data : context})
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
    return { success: true };
  } catch (error) {
    console.log('Error al enviar el correo:', error);
    return { success: false};
  }
};

module.exports = { sendEmail };

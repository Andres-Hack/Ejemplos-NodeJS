var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service : 'gmail',
  auth : {
    user : 'andresmamanielt@gmail.com',
    pass : 'aritmeticaysimetria'
  }
});

var mailOptions = {
  from  : 'andres.mamani@oopp.gob.bo',
  to : 'andres.mamani@oopp.gob.bo',
  subject : 'Mensaje enviado por Node Js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error');
  }else {
    console.log('Email enviado : '+info.response);
  }
});

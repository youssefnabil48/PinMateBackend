var nodemailer = require('nodemailer');

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.sendEmail = async function(email, subject, content){
  try{
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pinmateapp@gmail.com',
      pass: 'gradproject2018'
    }
    });

    var mailOptions = {
      from: 'pinmateapp@gmail.com',
      to: email,
      subject: subject,
      text: content
    };

    var info = await transporter.sendMail(mailOptions);
    return info;
  }catch(e){
    console.log(e);
    throw e;
  }
}
/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.validateEmailAddress = function(req,res){

}

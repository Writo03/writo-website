const nodemailer = require("nodemailer");
const { otpmodel } = require("../Database/Models/otpSchema");

const getHrTime = () => {
  var datetime = new Date(Date.now());
  //console.log("Before: ", datetime);
  datetime.setHours(datetime.getHours() + 1);
  //console.log("After: ", datetime);
  return datetime;
};


//{user_email,user_id}
const sendOtpEmail = async (email) => {
  // The body of the email for recipients

  //console.log(email);
  //console.log(_id);

  const transporter = nodemailer.createTransport({
  //  host: "smtp-mail.outlook.com", // hostname
    service: "gmail",
    auth: {
      user:abc@gmail.com , //email id by which email need to send
      pass: process.env.password, //from google gmail
    },
  });

  try {

    //opt code generator
    const code = `${Math.floor(1000 + Math.random() * 9000)}`;
    
   //body of mail
    var body_html = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`;

    let mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: email, // list of receivers
      subject: "Verify Your Account", // Subject
      html: body_html,
    };

    //console.log("mail");
    //console.log(mailOptions)

      //creating new otp model
    const newOtp = await otpmodel.create({
      email:email,
      otp: code,
      createdAt: Date.now(),
      expiresAt: getHrTime(),
    });
     
   // console.log("newopt");
    //console.log(newOtp);

    await newOtp.save();
    await transporter.sendMail(mailOptions);

    return {
      status: "Pending",
      message: "Verification Otp email sent",
      data: {
        email
      },
    };
  } catch (error) {
    console.log(error);
  }
};


module.exports = { sendOtpEmail};

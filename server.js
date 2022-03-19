const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const path = require('path')
const { OAuth2 } = google.auth;


if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}

const PORT = process.env.PORT || 8080;

// const twilioClient = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN_);

//So what is happening is that OAuthclient uses clientId, clientSecret and refreshToken to generate access Token
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REFRESH_TOKEN
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

//the access token that is valid for 3600 seconds.
const accessToken = oauth2Client.getAccessToken();

console.log("EMAIL", process.env.EMAIL);

//creating a transporter that will be used to send mail later.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
    },
});

//checking and logging whether the transporter is healthy
transporter.verify(function (error, success) {
    if (error) {
        console.log('Transporter not verified ⚒', error);
    } else {
        console.log('Transporter verified successfully ✅ ', success);
    }
});

//generating express instance
const app = express();

//middlewares that are called upon each api execution
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//serving react's front-end
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  //api that receives name, email and message from the form and then sends mail
app.post('/api/sendMail', (req, res) => {
    console.log("calling api");
    const { name, email, message } = req.body;

    const mailOptions = {
        from: "darshanmemorial@gmail.com",
        to: 'darshanmemorial@gmail.com',
        subject: `Visitor's mail in portfolio`,
        text: `${name} with email address ${email} says: ${message}`,
    };

    const mailOptions2 = {
        from: name,
        to: 'groverjatin17@gmail.com',
        subject: `Visitor's mail in portfolio`,
        text: `${name} with email address ${email} says: ${message}`,
    };

    // transporter.sendMail(mailOptions, function (err, data) {
    //     if (err) {
    //         console.log(`Failed to send mail from ${name}❌`);
    //         res.send(`We are facing this Error: ${err} ❌`);
    //     } else {
    //         console.log('LOG: Mail sent Successfully 🚀');
    //         res.send('Mail sent successfully. Check Inbox!!');
    //     }
    // });

    transporter.sendMail(mailOptions2, function (err, data) {
        if (err) {
            console.log(`Email 2 error ${name}❌`);
            res.send(`We are facing this Error: ${err} ❌`);
        } else {
            console.log('LOG: Mail sent Successfully to user 🚀');
            res.send('Mail sent  via 2nd transporter!!');
        }
    });
});

// //API to send message via twilio
// app.post("/api/sendSMS", (req, res) => {
//   const { name, email, message } = req.body;

//   twilioClient.messages
//     .create({
//       body: `${name} with email ID ${email} want to sa that - ${message}`,
//       from: "+12184963628",
//       to: "+919872480059",
//     })
//     .then((message) => {
//       console.log('LOG: Message sent successfully 🤳');
//       res.status(200).send({success: message})
//     })
//     .catch((error) => {
//       console.log("Error occurred in sending SMS: ", error);
//       res.status(500).send({error: error})
//     });
// });

//starting the Express server
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.info(`server has started on ${PORT}`);
});

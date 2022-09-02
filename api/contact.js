import nodemailer from "nodemailer";

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.USER,
      pass: process.env.PASSWORD,
      clientId: process.env.CRIENT_ID,
      clientSecret: process.env.CRIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  const toHostMailData = {
    from: req.body.email,
    to: process.env.USER,
    subject: `【お問い合わせ】${req.body.name} 様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
    `,
  };

  transporter.sendMail(toHostMailData, (error, response) => {
    console.log(error || response);
    res.status(200).end()
  });
};

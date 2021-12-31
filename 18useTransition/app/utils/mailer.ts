import nodemailer from "nodemailer";

export async function sendEmail({ to, text }: { to: string; text: string }) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "Syntax <scott@syntax.fm>",
    to,
    subject: "Potluck Message",
    text,
  });

  console.log("Message sent:", nodemailer.getTestMessageUrl(info));

  return "success";
}

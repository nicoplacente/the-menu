import nodemailer from "nodemailer";

const email = process.env.EMAIL_FROM;
const pass = process.env.EMAIL_PASS;
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const emailOptions = {
  from: email,
  to: email,
};

import nodermailer from "nodemailer"

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS
const emailTo = process.env.EMAIL_TO

export const transporter = nodermailer.createTransport({
    service:"gmail",
    auth : {
        user : email,
        pass : pass
    }
})

export const mailOptions = {
    from : email,
    to : emailTo 
}
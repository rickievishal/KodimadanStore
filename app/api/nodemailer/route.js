

import { transporter,mailOptions } from "@/app/config/nodemailerconfig"

export async function POST(request) {
  const res = await request.json()
  try {
    await transporter.sendMail({
        ...mailOptions,
        subject : `New Enquiry from ${res.name}`,
        text : res.message,
        html : `
            <div>
                <h2>New Enquiry for Kodimadanstores</h2>
                <p><strong>Name:</strong> ${res.name}</p>
                <p><strong>Address:</strong> ${res.addr}</p>
                <p><strong>Phone Number:</strong> ${res.number}</p>
                <p><strong>Message:</strong> ${res.message}</p>
            </div>
            `
    })
  }catch (err) {
    console.log(err)
  }
  return Response.json({ res })
}

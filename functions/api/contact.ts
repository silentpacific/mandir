import { Resend } from "resend";

export async function onRequestPost(context) {
  const { request, env } = context;

  const form = await request.formData();

  const name = form.get("name");
  const email = form.get("email");
  const phone = form.get("phone");
  const subject = form.get("subject");
  const message = form.get("message");

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Belur Lokenath Mandir <noreply@belurlokenathmandir.com>",
      to: ["belurlokenathmandir@gmail.com"],
      replyTo: email,
      subject: `[Temple Contact] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr>

        <p>${message}</p>
      `,
    });

return new Response(
  JSON.stringify({
    success: true,
  }),
  {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  }
);

  } catch (err) {

    console.error(err);

return new Response(
  JSON.stringify({
    success: false,
  }),
  {
    status: 500,
    headers: {
      "Content-Type": "application/json",
    },
  }
);

  }
}
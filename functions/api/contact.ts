import { Resend } from "resend";

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse incoming form data
  const form = await request.formData();

  const name = form.get("name");
  const email = form.get("email");
  const phone = form.get("phone");
  const subject = form.get("subject");
  const message = form.get("message");

  // Initialize Resend with environment variable
  const resend = new Resend(env.RESEND_API_KEY);

  try {
    // Send the email via Resend
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

    // Success response
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
    // Log error for backend debugging
    console.error(err);

    // Error response
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message
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
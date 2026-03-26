const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body ?? "{}"));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body" }) };
  }

  if (!email || !EMAIL_RE.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid email address" }) };
  }

  await resend.contacts.create({
    audienceId: AUDIENCE_ID,
    email,
    unsubscribed: false,
  });

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};

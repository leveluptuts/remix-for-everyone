import { Form } from "remix";

export async function action({ request }) {
  let body = await request.formData();
  let name = body.get("name");
  let email = body.get("email");
  console.log("name", name);
  console.log("email", email);
  return null;
}

export default function () {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form method="post">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Send Message" />
      </Form>
    </div>
  );
}

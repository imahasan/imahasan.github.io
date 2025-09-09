import { FC, useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "mqadnpyn";

const ContactPage: FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);

  // Track required fields locally
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Check validity: all required fields must be non-empty
  const isFormValid =
    formValues.name.trim() !== "" &&
    formValues.email.trim() !== "" &&
    formValues.message.trim() !== "";

  return (
    <main aria-labelledby="contact-title">
      <section className="container py-4">
        <section className="row justify-content-center">
          <section className="col-lg-8">
            <header className="mb-3">
              <h1 id="contact-title" className="mb-0">Contact</h1>
              <p className="text-muted">I’ll get back to you as soon as I can.</p>
            </header>

            {state.succeeded && (
              <Alert variant="success" className="card-like">
                ✅ Thanks! Your message was sent.
              </Alert>
            )}

            {!state.succeeded && (
              <article className="card-like">
                <Form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </Form.Group>

                  {/* Subject */}
                  <Form.Group className="mb-3" controlId="contactSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      name="subject"
                      type="text"
                      placeholder="What’s this about?"
                    />
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={6}
                      required
                      placeholder="Write your message here..."
                      value={formValues.message}
                      onChange={handleChange}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </Form.Group>

                  <Button
                    type="submit"
                    disabled={!isFormValid || state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <Spinner size="sm" animation="border" className="me-2" /> Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
              </article>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default ContactPage;

import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function SiteNotice() {
  const [show, setShow] = useState(true); // 👈 always start visible

  if (!show) return null;

  return (
    <Alert
      variant="info"
      onClose={() => setShow(false)}
      dismissible
      className="mb-0 text-center"
    >
      🚧 This website is currently in the <strong>building phase</strong>.  
      Some pages may be incomplete.
    </Alert>
  );
}

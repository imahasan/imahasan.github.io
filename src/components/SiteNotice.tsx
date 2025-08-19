import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export default function SiteNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("siteNoticeSeen");
    if (!seen) {
      setShow(true);
      localStorage.setItem("siteNoticeSeen", "true");
    }
  }, []);

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

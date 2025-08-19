// src/Layout.tsx
import { FC, PropsWithChildren } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SiteNotice from "./components/SiteNotice"; // 👈 import the notice

const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      {/* Show site notice once per session */}
      <SiteNotice />

      <Container fluid>
        <Row className="min-vh-100">
          <Col md={3} lg={2} as="aside" className="p-0">
            <Sidebar />
          </Col>

          <Col md={9} lg={10} as="main" className="py-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import { Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import Footer from "../../widgets/Footer/Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Container>
        <Navigation />
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
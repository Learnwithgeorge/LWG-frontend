import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="font-montserrat bg-bg">
      <Navbar />
      <main className="lg:pt-20 py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

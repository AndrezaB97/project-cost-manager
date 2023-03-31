import { Route, Routes, Link } from "react-router-dom";
import { Company } from "./components/pages/Company";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { NewProject } from "./components/pages/NewProject";
import { Container } from "./components/layout/Container";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
      </>
  );
}
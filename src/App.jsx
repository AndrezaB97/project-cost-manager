import { Route, Routes } from "react-router-dom";
import { Container } from "./components/layout/Container";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { NewProject } from "./components/pages/NewProject";

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

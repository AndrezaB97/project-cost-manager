import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container } from "./Container";

export function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img
            src={logo}
            alt="desenho de um círculo verde com o desenho de um cifrão branco no meio"
          />
        </Link>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link to="/company"> Company </Link>
          </li>
          <li>
            <Link to="/newproject"> New Project </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

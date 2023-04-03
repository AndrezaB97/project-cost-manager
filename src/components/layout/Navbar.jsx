import { Link } from "react-router-dom";

import { Container } from "./Container";

import styles from "./Navbar.module.css";

import logo from "../../assets/logo.png";

export function Navbar() {
    return (
        <nav>
            <Container >
                <Link to="/">
                    <img src={logo} alt="desenho de um círculo verde com o desenho de um cifrão branco no meio" />
                </Link>
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/company"> Company </Link>
            <Link to="/newproject"> New Project </Link>
            </Container>
        </nav>
    )
}
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./styled";

import imagem from "../assets/fitness-jump.png";
import bolaFinal from "../assets/balls-decoration.png";

export function Home (){
    return(
        <Container>
            <header>
                <h1>treine.me</h1>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Treinar</a>
            </header>
            <main>
                <h2>Treinos <span className="azul">exclusivos</span> para você!</h2>
                <p>Nós criamos treinos <span className="cinza">exclusivos e únicos para você.</span></p>
                <p>Invista no seu corpo e <span className="cinza">tenha muito mais performance</span> e qualidade de vida.</p>
                <img src={imagem} alt="imagem" />
                <button><FaWhatsapp size={24}/> COMECE JÁ</button>
            </main>
            <footer>
                <h3>fale conosco no instagram <span className="preto">@treine.me</span></h3>
                <img src={bolaFinal} alt="Final" />
            </footer>
        </Container>
    );
}
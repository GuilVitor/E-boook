import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
     <a href="https://e-books-gratis.netlify.app/"><Button Text="ENTRAR">Entrar</Button></a>
      <Button Text="SAIR" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
     

  );
};

export default Home;

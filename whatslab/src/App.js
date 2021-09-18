import "./App.css";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
`;
const NomeUsuario = styled.span`
  margin-left: 15px;
`;

const Mensagem = styled.span`
  margin-left: 8px;
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid black;
`;

const InputCss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export default class App extends React.Component {
  state = {
    listaUsuarios: [{ nome: "", mensagem: "" }]
  };

  alterarNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  alterarMensagem = (e) => {
    this.setState({ mensagem: e.target.value });
  };

  onClickAdicionar = () => {
    this.setState({
      nome: "",
      mensagem: ""
    });

    const novosUsuarios = [
      ...this.state.listaUsuarios,
      {
        nome: this.state.nome,
        mensagem: this.state.mensagem
        
      }
    ];

    this.setState({
      listaUsuarios: novosUsuarios
    });
  };

  render() {
    return (
      <AppContainer>
        <InputCss>
          <input
            placeholder={"Usuario"}
            value={this.state.nome}
            onChange={this.alterarNome}
          />
          <input
            placeholder={"Mensagem"}
            value={this.state.mensagem}
            onChange={this.alterarMensagem}
          />
          <button onClick={this.onClickAdicionar}>Enviar</button>
        </InputCss>
        {this.state.listaUsuarios.map((usuario , indice) => {
          return (
            <Container key={indice}>
              <b>
                <NomeUsuario>{usuario.nome}</NomeUsuario>
              </b>
              <Mensagem>{usuario.mensagem}</Mensagem>
            </Container>
          );
        })}
      </AppContainer>
    );
  }
}


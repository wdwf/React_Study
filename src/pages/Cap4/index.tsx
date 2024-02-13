import React from "react";
import CompButton from "./components/CompButton";
import CompButtonParams from "./components/CompButtonParams";

export default function Cap4() {

  function onPlayMessage() {
    prompt("Hello how are you?", "...")
  }
  function onPlayMessage2(param: string) {
    alert(`${param}`)
  }

  return (
    <div>
      <div>
        <h3>Respondendo a eventos</h3>
        <p>
          React permite adicionar manipuladores de eventos ao seu JSX. Os
          manipuladores de eventos são suas próprias funções que serão acionadas
          em resposta às interações do usuário, como clicar, passar o mouse,
          focar nas entradas do formulário e assim por diante.
        </p>
        <p>
          Componentes integrados como button suportam apenas eventos de
          navegador integrados, como onClick. No entanto, você também pode criar
          seus próprios componentes e atribuir aos seus manipuladores de eventos
          quaisquer nomes específicos do aplicativo que desejar.
        </p>

        <button onClick={onPlayMessage}>testar</button>
        <CompButton onClick={onPlayMessage}>Play me!</CompButton>
        <CompButtonParams onFunc={onPlayMessage2} />
      </div>
    </div>
  );
}

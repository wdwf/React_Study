import React from "react";

export default function Cap5() {
  return (
    <div>
      <h2>Gerenciando o Estado</h2>
      <p>
        À medida que seu aplicativo cresce, é útil ser mais intencional sobre
        como seu estado é organizado e como os dados fluem entre seus
        componentes. O estado redundante ou duplicado é uma fonte comum de bugs.
        Então é bom aprender como estruturar bem o estado, como manter sua
        logica de atualização de estado sustentável e como compartilhar estado
        entre componentes distantes.
      </p>
      <hr />
      <div style={{ margin: "12px 0" }}>
        <h3>Reagindo à inputs com estado </h3>
        <p>
          React fornece uma maneira declarativa de manipular a UI. Em vez de
          manipular diretamente partes individuais da UI, você descreve os
          diferentes estados em que seu componente pode estar e alterna entre
          eles em resposta à entrada do usuário.
        </p>
        <br />
        <p>
          Na questão de uma UI declarativa para uma imperativa é que na
          imperativa, o que é dito de acontecimentos corresponde diretamente a
          como voce implementa a interação. Ou seja voce deve escrever as
          instruções exatas para manipular a UI, como criar novos elementos ou
          uma interação qye exigiria cuidados para garantir que voce não
          introduziu bugs como por exemplo esquecer de mostrar algo. O que se
          torna difícil de fazer em sistemas mais complexos. No react voce não
          manipula a UI diretamente. Em vez disso, voce declara o que deseja
          mostrar.
        </p>
        <br />
        <p>Seguindo uma ordem de implantação que é:</p>
        <ul style={{ listStyle: "initial" }}>
          <li>
            <b>Identificar os diferentes estados visuais do seu componente:</b>
          </li>
        </ul>
      </div>
    </div>
  );
}


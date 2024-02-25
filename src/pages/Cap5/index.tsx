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
          como voce implementa a interação. Ou seja voce deve escrever as instruções exatas para manipular a UI, comandos como “desativar o botão”, “ativar o botão”, “mostrar a mensagem de sucesso”. O que se
          torna difícil de fazer em sistemas mais complexos. No react voce não
          manipula a UI diretamente. Em vez disso, voce declara o que deseja
          mostrar.
        </p>
        <br />
        <p>Seguindo uma ordem de implantação que é:</p>
        <ul style={{ listStyle: "initial" }}>
          <li>
            <b>Identificar os diferentes estados visuais do seu componente:</b> Normalmente observando o design do protótipo desenvolvido pelo designer de interface é possível ver essas diferenças de estado que podem ser:
            <ul>
              <li><b>Vazio:</b> formulário tem o botão desativado pois o campo de testo esta vazio</li>
              <li><b>Digitação:</b> formulário tem botão ativo pois o campo de texto esta preenchido</li>
              <li><b>Sucesso:</b> A mensagem "Enviado com sucesso" é mostrada em vez de um formulário</li>
              <li>Entre outros...</li>
            </ul>
            <br />
            É aconselhável fazer "simulações" para diferentes estado antes de adicionar logica:
            <code>
              {`
              export default function Form({
                status = 'success'
              }) {
                if (status === 'success') {
                  return <h1>That's right!</h1>
                }...
              `}
            </code> 
            <br />
            caso o componente tenha muitos estados visuais, pode ser conveniente mostra-los todos em uma pagina seguindo a ideia do exemplo acima.
          </li>
          <li><b>Determinar o que desencadeia essas mudanças de estado:</b> é possível acionar atualizações de estado em resposta a dois tipos de entradas.
          <ul>
            <li>
              Entradas humanas: clique de botoes, digitação navegar em um link.
            </li>
            <li>Entradas do computador: Chegada de respostas, conclusão de tempos limites, carregamento de imagens.</li>
          </ul>
          <br />
          Em ambos os casos, é necessário definir variáveis de estado para atualizar a UI. Como por exemplo em um formulário usaríamos os dois tipos.
          <br />
          Um modo de ajudar a visualizar esse fluxo seria desenhar cada estado com um circulo rotulado e cada mudança entre dois estado como uma seta.
          <br />
          <code>
            {`
            Empty => (start typing) => Typing => (Press Submit) => Submitting ...
            `}
          </code>
          </li>
          <li>
            <b>Represente o estado na memoria com useState:</b> Assim determinado os estado e o que os desencadeia defina o que precisará armazenar mas lembre simplicidade é fundamental.  
          </li>
        </ul>
      </div>
    </div>
  );
}


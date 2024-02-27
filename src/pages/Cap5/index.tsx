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
          instruções exatas para manipular a UI, comandos como “desativar o
          botão”, “ativar o botão”, “mostrar a mensagem de sucesso”. O que se
          torna difícil de fazer em sistemas mais complexos. No react voce não
          manipula a UI diretamente. Em vez disso, voce declara o que deseja
          mostrar.
        </p>
        <br />
        <p>Seguindo uma ordem de implantação que é:</p>
        <ul style={{ listStyle: "initial" }}>
          <li>
            <b>
              1. Identificar os diferentes estados visuais do seu componente:
            </b>{" "}
            Normalmente observando o design do protótipo desenvolvido pelo
            designer de interface é possível ver essas diferenças de estado que
            podem ser:
            <ul>
              <li>
                <b>Vazio:</b> formulário tem o botão desativado pois o campo de
                texto esta vazio
              </li>
              <li>
                <b>Digitação:</b> formulário tem botão ativo pois o campo de
                texto esta preenchido
              </li>
              <li>
                <b>Sucesso:</b> A mensagem "Enviado com sucesso" é mostrada em
                vez de um formulário
              </li>
              <li>Entre outros...</li>
            </ul>
            <br />É aconselhável fazer "simulações" para diferentes estado antes
            de adicionar logica:
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
            caso o componente tenha muitos estados visuais, pode ser conveniente
            mostra-los todos em uma pagina seguindo a ideia do exemplo acima.
          </li>
          <li>
            <b>2. Determinar o que desencadeia essas mudanças de estado:</b> é
            possível acionar atualizações de estado em resposta a dois tipos de
            entradas.
            <ul>
              <li>
                Entradas humanas: clique de botoes, digitação, navegar em um
                link.
              </li>
              <li>
                Entradas do computador: Chegada de respostas, conclusão de
                tempos limites, carregamento de imagens.
              </li>
            </ul>
            <br />
            Em ambos os casos, é necessário definir variáveis de estado para
            atualizar a UI. Como por exemplo em um formulário usaríamos os dois
            tipos.
            <br />
            Um modo de ajudar a visualizar esse fluxo seria desenhar cada estado
            com um circulo rotulado e cada mudança entre dois estado como uma
            seta.
            <br />
            <code>
              {`
            Empty => (start typing) => Typing => (Press Submit) => Submitting ...
            `}
            </code>
          </li>
          <li>
            <b>3. Represente o estado na memoria com useState:</b> Assim
            determinado os estado e o que os desencadeia, defina o que precisará
            de fato armazenar mas lembre simplicidade é fundamental, pois muitas
            peças trazem complexidade e complexidade leva a mais bugs.
            <br />
            Comece com o estado que <i>absolutamente</i> deve existir. Por
            exemplo, você precisará armazenar o answer para a entrada e o
            error(se existir) para armazenar o último erro.
            <br />
            <code>
              {`
              const [answer, setAnswer] = useState('');
              const [error, setError] = useState(null);
              const [status, setStatus] = useState('typing');
              `}
            </code>
          </li>
          <li>
            <b>4. Remova quaisquer variáveis de estado não essenciais:</b> De
            modo simples rastreie o que é essencial e remova o restante.
            <p>
              é possível fazer alguns questionamentos a cerca das variáveis de
              estado:
            </p>
            <ul>
              <li>
                este estado causa uma paradoxo: Por exemplo, isTyping e
                isSubmitting não podem ser ambos true. Para remover o estado
                “impossível”, você pode combiná-los em um status que deve ter um
                dos três valores: 'typing', 'submitting', ou 'success'.
              </li>
              <li>
                A mesma informação já está disponível em outra variável de
                estado? Outro paradoxo: isEmpty e isTyping não pode ser true ao
                mesmo tempo.
              </li>
            </ul>
          </li>
          <li>
            <b>5. Conecte os manipuladores de eventos para definir o estado:</b>{" "}
            Chegando no ultimo ponto temos que criar, manipuladores de eventos
            que atualizem o estado.
            <br />
            <code>
              {`
              async function handleSubmit(e) {
                e.preventDefault();
                setStatus('submitting');
                try {
                  await submitForm(answer);
                  setStatus('success');
                } catch (err) {
                  setStatus('typing');
                  setError(err);
                }
              }
              ...
              `}
            </code>
          </li>
        </ul>
      </div>
    </div>
  );
}

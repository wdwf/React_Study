import React, { useState } from "react";
import Accordion from "./Accordion";

export default function Cap5() {
  const [emphasis, setEmphasis] = useState(false);
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
            <div
              style={{
                width: "100%",
                height: "200px",
                background: `${!emphasis ? "#555" : "transparent"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                console.log("Clicou na div externa");
                setEmphasis(false);
              }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Clicou na div interna");
                  setEmphasis(true);
                }}
                style={{
                  width: "100px",
                  height: "100px",
                  background: `${emphasis ? "#f56" : "#f07400"}`,
                }}
              ></div>
            </div>
          </li>
        </ul>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Escolhendo a estrutura do estado</h3>
        <p>
          Estruturar bem o estado torna o componente agradável de modicar e
          depurar. As considerações que deve ser feitas para tal são:
        </p>
        <ul>
          <li>
            <p>
              <b>Estado relacionado ao grupo:</b> Seria se voce utiliza duas
              variáveis de estado ao mesmo tempo, considere mescla-las em uma
              unica variável
            </p>
            <code>
              {`
                const [x, setX] = useState(0);
                const [y, setY] = useState(0);
                or
                const [position, setPosition] = useState({ x: 0, y: 0 });
                --
                setPosition({ ...position, x: 100 })
              `}
              <p>
                Tecnicamente, você pode usar qualquer uma dessas abordagens. Mas
                se duas variáveis de estado sempre mudam juntas, pode ser uma
                boa ideia unificá-las em uma única variável de estado.{" "}
              </p>
            </code>
          </li>
          <li>
            <p></p>
            <b>Evite contradições de estado:</b> evitar situações onde estados
            diferentes não podem estar com o mesmo valor no momento. pois se
            ambos atualizarem o estado ao mesmo tempo podem ocorrer bugs.
            <code>
              {`
                  Error:
                  setIsSending(true);
                  await sendMessage(text);
                  //setIsSending(false);
                  setIsSent(true);

                  Success:
                  setStatus('sending');
                  await sendMessage(text);
                  setStatus('sent');
              `}
            </code>
          </li>
          <li>
            <b>Evite passar propriedades para estados:</b> Ao fazer isso pode
            ocorrer de o estado não atualizar.
            <br />
            <code>
              {`
            //error
            function Message({ messageColor }) {
              const [color, setColor] = useState(messageColor);
            
            //success
            function Message({ messageColor }) {
              const color = messageColor;
            `}
            </code>
          </li>
          <li>
            <p>
              <b>evitar estado redundante:</b> é uma boa prática calcular
              informações derivadas dinamicamente durante a renderização em vez
              de armazená-las no estado do componente.{" "}
            </p>
            <code>
              {`
               const [firstName, setFirstName] = useState('');
               const [lastName, setLastName] = useState('');
               const [fullName, setFullName] = useState(''); -> Redundante (firstName + lastName da no mesmo)             
              `}
            </code>
          </li>
          <li>
            <b>Evite estados duplicados</b>: A ideia é evitar ter parte ou o
            item que ja existe em outro estado.
            <br />
            <code>
              {`
                //error
                const [items, setItems] = useState(initialItems);
                const [selectedItem, setSelectedItem] = useState(
                  items[0]
                );

                //success
                const [items, setItems] = useState(initialItems);
                const [selectedId, setSelectedId] = useState(0);

                const selectedItem = items.find(item =>
                  item.id === selectedId
                );
              `}
            </code>
          </li>
          <li>
            <b>Evite estados profundamente aninhados</b>: O estado profundamente
            hierárquico não é muito conveniente para atualizar. Quando possível,
            prefira estruturar o estado de forma plana.
          </li>
        </ul>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>
          Compartilhando estado entre componentes - Levantamento de estado
        </h3>
        <p>
          Às vezes, você deseja que o estado de dois componentes sempre mude
          juntos. Para fazer isso, remova o estado de ambos, mova-o para o pai
          comum mais próximo e, em seguida, passe-o para eles por meio de
          adereços.
        </p>
        <Accordion />
        <p>
          No geral, elevamos o estado para o componente pai, e definimos
          explicitamente que o componente filho pode alterar o estado passando
          através das propriedades do componente. Por fim, passe os
          manipuladores de eventos para que os filhos possam alterar o estado
          dos pais.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Preservando e redefinindo o estado</h3>
        <p>
          O React preserva o estado de um componente enquanto ele estiver sendo
          renderizado em sua posição na árvore da UI. Se for removido ou se um
          componente diferente for renderizado na mesma posição, o React
          descartará seu estado. Porem se o mesmo componente for renderizado na
          mesma posição o estado é preservado.
        </p>
        <code>
          {`
           const [isFancy, setIsFancy] = useState(false);
           return (
             <div>
               {isFancy ? (
                 <Counter isFancy={true} /> 
               ) : (
                 <Counter isFancy={false} /> 
               )}
               <label>
                 <input
                   type="checkbox"
                   checked={isFancy}
                   onChange={e => {
                     setIsFancy(e.target.checked)
                   }}
                 />
                 Use fancy styling
               </label>
             </div>
          `}
        </code>
        <p>
          Como regra geral, se você quiser preservar o estado entre as novas
          renderizações, a estrutura da sua árvore precisa “corresponder” de uma
          renderização para outra. Se a estrutura for diferente, o estado será
          destruído porque o React destrói o estado quando remove um componente
          da árvore.
        </p>
        <p>
          A questão de redefinir o valor fica com a execução da destruição de um
          componente e renderização de outro no lugar é possível fazer de 2
          modos:
        </p>
        <code>
          {`
          //Modo 1
          {isPlayerA &&
            <Counter person="Taylor" />
          }
          {!isPlayerA &&
            <Counter person="Taylor" />
          }

          //Modo 2 - uso da key
          <Chat key={to.id} contact={to} />
          `}
        </code>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import Accordion from "./Accordion";
import TaskList from "./TaskList";
import Section from "./Section";
import Heading from "./Heading";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { SectionElement } from "./styles";

export default function Cap5() {
  const [emphasis, setEmphasis] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <SectionElement className={theme}>
      <button onClick={toggleTheme}>Change Theme</button>
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

      <div style={{ margin: "12px 0" }}>
        <h3>Extraindo logica de estado em um redutor</h3>
        <p>
          Componentes com muitas atualizações de estado espalhadas por muitos
          manipuladores de eventos podem ser complicados. Para esses casos, você
          pode consolidar toda a lógica de atualização de estado fora do seu
          componente em uma única função, chamada redutor.
        </p>
        <p>
          <b>
            O que é uma função redutora: Os redutores são uma maneira diferente
            de lidar com o estado. Em vez de dizer ao React “o que fazer”
            definindo o estado, você especifica “o que o usuário acabou de
            fazer” despachando “ações” de seus manipuladores de eventos. Você
            pode migrar de useState para useReducer em três etapas:
          </b>{" "}
        </p>

        <ul>
          <li>
            <b>Passe do estado de configuração para ações de envio:</b>{" "}
            Removendo toda a logica de estado ficaremos apenas com as funções. A
            logica é, em vez de “configurar tasks” por meio de um manipulador de
            eventos, você está despachando uma ação “adicionou/alterou/excluiu
            uma tarefa”. Isso é mais descritivo da intenção do usuário.
            <br />
            <code>
              {`
              function handleDeleteTask(taskId) {
                dispatch(
                  // "action" object:
                  {
                    type: 'deleted',
                    id: taskId,
                  }
                );
              }`}
            </code>
            <p>O objeto para o qual você passa dispatch é chamado de “ação”:</p>
            <p>
              Você decide o que colocar nele, mas geralmente deve conter o
              mínimo de informações sobre o que é necessario para o
              funcionamento da função além de seu type.
            </p>
          </li>
          <li>
            Escreva uma função redutora: Uma função redutora é onde você
            colocará sua lógica de estado. São necessários dois argumentos, o
            estado atual e o objeto de ação, e retorna o próximo estado
            <br />
            <code>
              {`
              function yourReducer(state, action) {
                // return next state for React to set
                switch (action.type) {
                  case "added": {
                    return [
                      ...tasks,
                      {
                        id: action.id,
                        text: action.text,
                        done: false,
                      },
                    ];
                  }
                ...
              }
              `}
            </code>
          </li>
          <li>
            Use o redutor no componente:
            <br />
            <code>
              {`
              const [state, dispatch] = useReducer(reducer, initialArg, init?)
              - reducer - função redutora
              - initialArg - valor a partir do qual o estado inicial é calculado
              - init - função inicializadora que deve retornar o estado inicial. Se não for especificado, o estado inicial será definido como initialArg.

              --

              - state - Representa o estado atual.
              - dispatch - É uma função que você pode chamar para despachar uma ação e, assim, atualizar o estado.
              `}
            </code>
          </li>
        </ul>

        <br />
        <p>
          <b>Quando usar tal item:</b> use redutor se você encontrar bugs
          frequentemente devido a atualizações de estado incorretas em algum
          componente e quiser introduzir mais estrutura ao seu código. Você não
          precisa usar redutores para tudo: fique à vontade para misturar e
          combinar! Você pode até mesmo usar useState no useReducer no mesmo
          componente.
        </p>

        <TaskList />

        <p>
          Embora os redutores possam “reduzir” a quantidade de código dentro do
          seu componente, eles aumentam a quantidade de arquivos e podem trazer
          uma certa complexidade, eles são, na verdade, nomeados de acordo com a
          operação reduce() que você pode executar nos arrays. A função para a
          qual você passa reduce é conhecida como “redutor”. Pega o resultado
          até agora e o item atual e retorna o próximo resultado. Os redutores
          React são um exemplo da mesma ideia: eles pegam o estado até agora e a
          ação e retornam o próximo estado. Dessa forma, eles acumulam ações ao
          longo do tempo em estados.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Passando dados por meio de context</h3>
        <p>
          Normalmente, você passará informações de um componente pai para um
          componente filho por meio de adereços. Mas passar props pode se tornar
          detalhado e inconveniente se você tiver que passá-los por muitos
          componentes no meio ou se muitos componentes em seu aplicativo
          precisarem das mesmas informações. O contexto permite que o componente
          pai disponibilize algumas informações para qualquer componente na
          árvore abaixo dele — não importa a profundidade — sem passá-las
          explicitamente por meio de adereços.
        </p>

        <p>
          <b>O que é propagação de propriedades:</b>
          Seria o ato passar propriedades de componente para componente afim de
          alcançar na arvore de UI o elemento desejado. Passar props é uma ótima
          maneira de canalizar dados explicitamente através de sua árvore de UI
          para os componentes que os utilizam. Mas passar props pode se tornar
          detalhado e inconveniente quando você precisa passar algum prop
          profundamente pela árvore ou se muitos componentes precisarem do mesmo
          prop.
        </p>
        <p>
          <b>Como substituir a passagem repetitiva de prop por context:</b>O
          contexto permite que um componente pai forneça dados para toda a
          árvore abaixo dele. Existem muitos usos para o contexto. E o context
          entra em jogo por meio de 3 etapas:
        </p>
        <ul>
          <li>1. Crie um context</li>
          <li>2. Use esse contexto do componente que precisa dos dados.</li>
          <li>
            3. Forneça esse contexto do componente que especifica os dados.
          </li>
        </ul>
        <Section level={2}>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
        </Section>
        <Section level={5}>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
        </Section>

        <p>
          <b>
            Onde se aplicam context:
            <ul>
              <li>Tema</li>
              <li>Conta atual</li>
              <li>Roteamento</li>
              <li>Gerenciando o estado</li>
            </ul>
          </b>
        </p>
        <p>
          <b>
            Alternativas comuns ao context:
            <p>
              O contexto é muito tentador de usar! No entanto, isso também
              significa que é muito fácil usá-lo em excesso. Só porque você
              precisa passar alguns adereços com vários níveis de profundidade,
              não significa que você deva colocar essas informações em contexto.
            </p>
            <ul>
              <li>- Passar por propriedades</li>
            </ul>
          </b>
        </p>
      </div>
    </SectionElement>
  );
}

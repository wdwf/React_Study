import React from "react";
import CompButton from "./components/CompButton";
import CompButtonParams from "./components/CompButtonParams";
import CompState from "./components/CompState";

export default function Cap4() {
  function onPlayMessage() {
    prompt("Hello how are you?", "...");
  }
  function onPlayMessage2(param: string) {
    alert(`${param}`);
  }

  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
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

      <div style={{ marginBottom: "50px" }}>
        <h4>Estado: Memoria de um componente</h4>
        <p>
          Frequentemente, os componentes precisam alterar o que está na tela
          como resultado de uma interação. Digitar no formulário deverá
          atualizar o campo de entrada, clicar em “próximo” em um carrossel de
          imagens deverá alterar a imagem exibida, clicar em “comprar” deverá
          colocar um produto no carrinho de compras. Os componentes precisam
          “lembrar” coisas: o valor de entrada atual, a imagem atual, o carrinho
          de compras. No React, esse tipo de memória específica do componente é
          chamada state.
        </p>
        <p>
          O uso de variáveis locais não persistem entre renderizações. Outro
          ponto é que alterações nas variáveis locais não acionarão
          renderizações.
        </p>
        <ol>
          <li>
            Para atualizar um componente com novos dados, duas coisas precisam
            acontecer:
          </li>
          <li>- Retenha os dados entre renderizações.</li>
          <li>
            - Acione o React para renderizar o componente com novos dados (nova
            renderização).
          </li>
          <li>
            O <code>useStateHook</code> fornece essas duas coisas:
          </li>
          <li>
            - Uma variável de estado para reter os dados entre renderizações.
          </li>
          <li>
            - Uma função setter de estado para atualizar a variável e acionar o
            React para renderizar o componente novamente.
          </li>
        </ol>

        <p>
          Para usar variáveis de estado basta importar do react o{" "}
          <code>useState</code>
        </p>
        <p>VALOR POR ESTATE:</p>
        <CompState />

        <p>
          No React useState, assim como qualquer outra função que comece com “
          use”, é chamada de Hook. Hooks são funções especiais que só estão
          disponíveis durante a renderização do React
        </p>

        <p>
          Voce pode ter quantas variáveis de estado desejar porem é uma boa
          ideia ter múltiplas variáveis de estado se o estado delas não estiver
          relacionado. Mas se você descobrir que frequentemente altera duas
          variáveis de estado juntas, pode ser mais fácil combiná-las em uma.
          Por exemplo, se você tiver um formulário com muitos campos, é mais
          conveniente ter uma única variável de estado que contenha um objeto do
          que uma variável de estado por campo.
        </p>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h4>Renderizar e confirmar</h4>
        <p>
          Antes que seus componentes sejam exibidos na tela, eles devem ser
          renderizados pelo React. Compreender as etapas desse processo o
          ajudará a pensar sobre como seu código é executado e a explicar seu
          comportamento.
        </p>
        <p>
          Imagine que seus componentes são cozinheiros na cozinha, montando
          pratos saborosos a partir de ingredientes. Nesse cenário, React é o
          garçom que faz os pedidos dos clientes e traz seus pedidos. Este
          processo de solicitação e entrega da UI tem três etapas:
        </p>
        <ul>
          <li>
            Acionando uma renderização (entrega do pedido do convidado na
            cozinha)
          </li>
          <li>Renderizando o componente (preparando o pedido na cozinha)</li>
          <li>Comprometendo-se com o DOM (colocando o pedido na mesa)</li>
        </ul>
        <h5>Etapa1. Acionar uma renderização</h5>
        <p>Existem 2 motivos para a renderização de um componente acontecer:</p>
        <p>
          - Renderização inicial: Feito pelo uso do nó <code>createRoot</code>
        </p>
        <p>- o estado do componente foi atualizado</p>

        <h5>Etapa2. Renderizando seus componentes</h5>
        <p>
          Depois de acionar uma renderização, o React chama seus componentes
          para descobrir o que exibir na tela. “Renderizar” é o React chamando
          seus componentes.
        </p>

        <p>
          Este processo é recursivo: se o componente atualizado retornar algum
          outro componente, o React irá renderizar esse componente em seguida, e
          se esse componente também retornar algo, ele irá renderizar esse
          componente em seguida, e assim por diante. O processo continuará até
          que não haja mais componentes aninhados e o React saiba exatamente o
          que deve ser exibido na tela.
        </p>

        <h5>Etapa3. React confirma alterações no DOM</h5>
        <p>
          Após renderizar (chamar) seus componentes, o React modificará o DOM,
          com <code>appendChild</code> e para novas renderizações, aplicará
          operaçoes minimas necessarias, ou seja o React não toca no DOM se o
          resultado da renderização for o mesmo da última vez.
        </p>
      </div>
    </div>
  );
}

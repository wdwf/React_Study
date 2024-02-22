import React, { useState } from "react";
import CompButton from "./components/CompButton";
import CompButtonParams from "./components/CompButtonParams";
import CompState from "./components/CompState";
import ListItens from "./components/exercise1/ListItens";
import AddTasks from "./components/exercise2/AddTasks";
import ListTask from "./components/exercise2/ListTask";

//exe2
let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export type todoProps = {
  id: number;
  title: string;
  done: boolean;
};

export default function Cap4() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTask(value: string) {
    setTodos([...todos, { id: nextId++, title: value, done: false }]);
    console.log(todos);
  }
  function handleEditTask(nextTodo: todoProps) {
    setTodos(
      todos.map((item) => {
        if (item.id === nextTodo.id) {
          return nextTodo;
        } else {
          return item;
        }
      })
    );
  }
  function handleRemoveTask(removeTodoId: number) {
    setTodos(todos.filter((item) => item.id !== removeTodoId));
  }

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

      {/* -------------------------------------------------- */}

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

      {/* -------------------------------------------------- */}

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

      {/* -------------------------------------------------- */}

      <div style={{ marginBottom: "50px" }}>
        <h4>estado como um instantâneo</h4>
        <p>
          “Renderização” significa que o React está chamando seu componente, que
          é uma função. O JSX que você retorna dessa função é como um
          instantâneo da UI no tempo. Seus adereços, manipuladores de eventos e
          variáveis locais foram todos calculados usando seu estado no momento
          da renderização. Ao contrário de uma fotografia ou de um quadro de
          filme, o “instantâneo” da IU que você retorna é interativo.{" "}
        </p>
        <p>Então segue a order de:</p>
        <p>- Chama a função, dizendo ao react para atualizar o estado</p>
        <p>
          - Retorna um novo instantâneo JSX (é como se pegasse a foto do
          componente e gerasse um jsx para conseguir interagir)
        </p>
        <p>
          - Atualiza a tela para corresponder ao instantâneo que a função
          retornou (faz uma comparação pra ver se algo foi alterado e se foi
          substitui o DOM)
        </p>
      </div>

      {/* -------------------------------------------------- */}

      <div style={{ marginBottom: "50px" }}>
        <h4>Enfileirando uma serie de atualizações de estado</h4>
        <p>
          Definir uma variável de estado colocará outra renderização na fila.
          Mas às vezes você pode querer realizar várias operações no valor antes
          de enfileirar a próxima renderização. Para fazer isso, é útil entender
          como o estado dos lotes do React é atualizado.
        </p>
        <h6>Atualizações de estado dos lotes React</h6>
        <p>
          O React espera até que todo o código nos manipuladores de eventos seja
          executado antes de processar suas atualizações de estado. É por isso
          que a nova renderização só acontece depois de todas as chamadas de
          setSomething()
        </p>
        <p>
          Isso pode lembrá-lo de um garçom anotando um pedido no restaurante. Um
          garçom não corre para a cozinha ao ouvir o seu primeiro prato! Em vez
          disso, eles permitem que você termine seu pedido, faça alterações e
          até mesmo receba pedidos de outras pessoas na mesa.
        </p>
        <p>
          Nota: Ao executar uma serie de setSomething() o ultimo valor se
          manterá como valido.
        </p>
        <p>
          Isso permite atualizar diversas variáveis de estado, mesmo de vários
          componentes, sem acionar muitas novas renderizações. Mas isso também
          significa que a interface do usuário não será atualizada até que o
          manipulador de eventos e qualquer código nele contido sejam
          concluídos.
        </p>
        <h6>Função de atualização</h6>
        <p>
          Se for passado para o set uma função de atualização o mesmo sera posto
          em uma fila para ser processada apos todos os outros códigos no
          manipulador de eventos. E durante a proxima renderização, o react
          passa por essa fila e fornece o estado final atualizado
        </p>
        <p>
          ex:
          <br />
          {`setNumber(n => n + 1); -> Atualização na fila com n valendo 0 e retorna 1

        setNumber(n => n + 1); -> Atualização na fila com n valendo 1 e retorna 2

        setNumber(n => n + 1); -> Atualização na fila com n valendo 2 e retorna 3`}
          <br />
        </p>
      </div>

      {/* ---------------------------------------- */}

      <div style={{ marginBottom: "50px" }}>
        <h4>Atualizando objetos no estado</h4>
        <p>
          O estado pode conter qualquer tipo de valor JavaScript, incluindo
          objetos. Mas você não deve alterar diretamente os objetos que mantém
          no estado React. Em vez disso, quando quiser atualizar um objeto, você
          precisará criar um novo (ou fazer uma cópia de um existente) e, em
          seguida, definir o estado para usar essa cópia.
        </p>

        <p>
          Tecnicamente, é possível alterar o conteúdo do próprio objeto. Isso é
          chamado de mutação:
          {"const [position, setPosition] = useState({ x: 0, y: 0 });"}
          <br />
          position.x = 5
          <br />
          No entanto, embora os objetos no estado React sejam tecnicamente
          mutáveis, você deve tratá-los como se fossem imutáveis ​​— como
          números, booleanos e strings. Em vez de transformá-los, você deve
          sempre substituí-los.
        </p>
        <h6>Copiando com sintaxe spread</h6>
        <p>
          Para alterar um valor de um objeto sem perder os demais valores é
          necessário ter uma copia dos dados existentes. Você pode usar a
          sintaxe ...(spread) de propagação de objeto para não precisar copiar
          todas as propriedades separadamente.
          <br />
          <code>
            {`setPerson({
              ...person,
              firstname: e.target.value
            })`}
          </code>
          <br />
          Deste modo permanecemos com todos os outros valores e alteramos apenas
          o que desejamos.
        </p>
        <p>
          Observe que a ...sintaxe de propagação é “superficial” - ela copia
          apenas coisas com um nível de profundidade. Isso torna tudo mais
          rápido, mas também significa que se você quiser atualizar uma
          propriedade aninhada, terá que usá-la mais de uma vez.
        </p>
        <p>
          🚧Nota: Podemos ter uma função dinâmica que atualiza mais de um campo
          de input:
          <br />
          {`function handleChange(e) {
            setPerson({
              ...person,
              [e.target.name]: e.target.value
            })
          }
          
          <input name="name" value={person.name} onChange={handleChange} />
          `}
        </p>

        <h6>Atualizando objetos aninhados</h6>
        <p>
          Considere uma estrutura aninhada como essa:
          <br></br>
          {`
          const [person, setPerson] = useState({
            name: 'Niki de Saint Phalle',
            artwork: {
              title: 'Blue Nana',
              city: 'Hamburg',
              image: 'https://i.imgur.com/Sd1AgUOm.jpg',
            }
          });
          `}
          <br />
          como no React você deve tratar o estado como imutável Para alterar
          city, primeiro você precisaria produzir o novo artwork objeto
          (pré-preenchido com dados do anterior) e, em seguida, produzir o novo
          person objeto que aponta para o novo artwork:
          <br />
          {`
          //Cria uma copia do artwork alterando a propriedade city
          const nextArtwork = { ...person.artwork, city: 'New Delhi' };

          //Cria uma copia do person alterando artwork pela variavel criada logo a cima
          const nextPerson = { ...person, artwork: nextArtwork };

          //Seta esse novo valor
          setPerson(nextPerson);`}
          <br />
          Ou, escrito como uma única chamada de função:
          <br />
          {`
          setPerson({
            ...person, // Copy other fields
            artwork: { // but replace the artwork
              ...person.artwork, // with the same one
              city: 'New Delhi' // but in New Delhi!
            }
          });
          `}
        </p>
      </div>

      {/* ---------------------------------------- */}

      <div style={{ marginBottom: "50px" }}>
        <h4>Atualizando matrizes no estado</h4>
        <p>
          Arrays são mutáveis em JavaScript, mas você deve tratá-los como
          imutáveis ao armazená-los no estado. Assim como acontece com os
          objetos, quando você deseja atualizar um array armazenado no estado,
          você precisa criar um novo (ou fazer uma cópia de um existente) e
          então definir o estado para usar o novo array.
        </p>
        <br />
        <h6>Atualizando matrizes</h6>
        <p>
          você deve tratar os arrays no estado React como somente leitura. Isso
          significa que você não deve reatribuir itens dentro de um array como
          arr[0] = 'bird'e também não deve usar métodos que alterem o array,
          como push()e pop(). Em vez disso, prefira usar métodos que retornem um
          novo array como spread ..., map, filter, slice, ou copiar o array
          primeiro.
        </p>

        <h6>Removendo de um array</h6>
        <p>
          A maneira mais fácil de remover um item de um array é filtrá -lo . Em
          outras palavras, você produzirá um novo array que não conterá esse
          item. Para fazer isso, use o filter método.
        </p>
        <p>
          Exemplo{" "}
          {`setArtists(
            artists.filter(a => a.id !== artist.id)
          );`}
        </p>

        <br />
        <h6>Transformando uma matriz</h6>
        <p>
          Se quiser alterar alguns ou todos os itens do array, você pode usar
          map()para criar um novo array.
          <br />
          {`
           const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
              // No change
              return shape;
            } else {
              // Return a new circle 50px below
              return {
                ...shape,
                y: shape.y + 50,
              };
            }
          });
          // Re-render with the new array
          setShapes(nextShapes);
          `}
        </p>
        <br />
        <h6>Substituindo itens em um array</h6>
        <p>
          Para substituir um item, crie um novo array com map. Dentro da sua map
          chamada, você receberá o índice do item como segundo argumento. Use-o
          para decidir se deseja retornar o item original (o primeiro argumento)
          ou outra coisa:
        </p>
        <p>{`
        function handleIncrementClick(index) {
          const nextCounters = counters.map((c, i) => {
            if (i === index) {
              // Increment the clicked counter
              return c + 1;
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setCounters(nextCounters);
        }
        `}</p>
        <br />
        <h6>Inserir em um array</h6>
        <p>
          Às vezes, você pode querer inserir um item em uma posição específica
          que não está nem no início nem no final. Para fazer isso, você pode
          usar a ... junto com o slice(). Então usando o spread e slice se corta
          uma parte dos dados, então se adiciona o elemento na posição requirida
          e com o spread e slice novamente adiciona o que foi cortado em um
          unico elemento.
        </p>

        <p>{`
        const nextArtists = [
          // Items before the insertion point:
          ...artists.slice(0, insertAt), //Corta
          // New item:
          { id: nextId++, name: name }, //Adiciona
          // Items after the insertion point:
          ...artists.slice(insertAt) // Junta tudo (insertAt seria a posição desejada por exemplo 1 seguindo a ideia do lenght)
        ];
        setArtists(nextArtists)
        `}</p>

        <br />
        <h6>Fazendo alterações</h6>
        <p>
          Nada impede de utilizar reverse e sort para caso queira reverter ou
          classifica uma matriz mas para fazer isso é necessário copiar o array
          primeiro e fazer a alteração nessa copia.
        </p>
        <p>{`
          const nextList = [...list];
          nextList.reverse();
          setList(nextList)
        `}</p>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h4>Exercício</h4>
        <p>
          Criar uma lista que tenha itens, e cada item tem dois botoes uma para
          remover e outro para adicionar mais um na contagem se o item chegar a
          0 ele deve ser removido. (O numero 0 não deve aparecer para o usuário)
        </p>
        <ListItens />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h4>Exercício</h4>
        <p>
          Criar uma lista que seja possível adicionar tarefas e que seja
          possível editar a tarefa e excluir a mesma, ao clicar em editar o
          botão deve ser alterado para salvar.
        </p>
        <AddTasks handleAddTodo={handleAddTask} />
        <ListTask
          list={todos}
          handleEditTodo={handleEditTask}
          handleRemoveTodo={handleRemoveTask}
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import ExemploKitty from "./ExemploKitty";
import UsingFlushSync from "./UsingFlushSync";
import UsingEffect from "./effect/UsingEffect";
import RefComponent from "./ref/RefComponent";
import CompEffect from "./effect/CompEffect";
import { Link } from "react-router-dom";

export default function Cap6() {
  return (
    <div>
      <Link to='/capitulo-5'>Cap5</Link>
      <h1>Saindo do React</h1>
      <p>
        Alguns de seus componentes podem precisar ser controlados e
        sincronizados com sistemas fora do React. Por exemplo, pode ser
        necessário focar uma entrada usando a API do navegador, reproduzir e
        pausar um player de vídeo implementado sem React ou conectar e ouvir
        mensagens de um servidor remoto. A maior parte da lógica e do fluxo de
        dados do seu aplicativo não deve depender desses recursos.
      </p>
      <div style={{ margin: "12px 0" }}>
        <h3>Referenciando valores com referências</h3>
        <p>
          Quando você deseja que um componente “lembre” algumas informações, mas
          não deseja que essas informações acionem novas renderizações, você
          pode usar um ref .
        </p>
        <p>
          useRef é um hook do React que fornece uma maneira de acessar e
          interagir com um nó (elemento) do DOM ou com um objeto que persiste
          entre renderizações, sem acionar uma nova renderização quando o valor
          é modificado. O ref como state, pode ser apontado para qualquer coisa.
        </p>
        <p>
          Quando uma informação for usada para renderização, mantenha-a no
          estado. Quando uma informação é necessária apenas para manipuladores
          de eventos e sua alteração não requer uma nova renderização, usar uma
          referência pode ser mais eficiente. O valor de useRef persiste entre
          as renderizações do componente, mas a alteração do valor não causa uma
          re-renderização.
        </p>
        <p>
          <b>Quando usar:</b> Normalmente, você usará uma referência quando seu
          componente precisar “sair” do React e se comunicar com APIs externas –
          geralmente uma API de navegador que não afetará a aparência do
          componente. Se o seu componente precisa armazenar algum valor, mas
          isso não afeta a lógica de renderização, escolha refs. Aqui estão
          algumas dessas situações raras:
        </p>
        <ul>
          <li>Armazenando IDs de tempo limite (setInterval, setTimeout)</li>
          <li>Armazenando e manipulando elementos DOM</li>
          <li>
            Armazenar outros objetos que não são necessários para calcular o
            JSX.
          </li>
        </ul>
        <p>
          <b>Nota:</b> O useRef se assimila a duas coisas a primeira é que seu
          uso seria como o querySeletor. e a segunda é que a definição dele
          seria um state só que sem o metodo de definição de valor.
        </p>

        <RefComponent />
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Manipulando DOM com referências</h3>
        <p>
          s vezes você pode precisar de acesso aos elementos DOM gerenciados
          pelo React — por exemplo, para focar um nó, rolar até ele ou medir seu
          tamanho e posição. Não existe uma maneira integrada de fazer essas
          coisas no React, então você precisará de uma referência para o nó DOM.
        </p>
        <p>
          <b>Obtendo uma referência para o nó:</b>
        </p>
        <ul>
          <li>- Importa o useRef</li>
          <li>
            - Declara uma referencia
            <br />
            <pre>const myRef = useRef(null)</pre>
          </li>
          <li>
            - defina um atributo ref no elemento e atribua esse referencial
            <br />
            <pre>{`<div ref={myRef}>`}</pre>
          </li>
        </ul>
        <p>
          A partir desse momento o React colocará uma referência a esse nó
          myRef.current. Você pode então acessar esse nó DOM a partir de seus
          manipuladores de eventos e usar as APIs integradas do navegador
        </p>
        <pre>myRef.current.scrollIntoView();</pre>
        <br />
        <ExemploKitty />
        <p>
          Fique atento na questão de acessar referencias de outros componentes
          pois o React não permite que um componente acesse os nós DOM de outros
          componentes. Nem mesmo para seus próprios filhos! Isso é intencional.
          Refs são uma saída de emergência que deve ser usada com moderação. A
          manipulação manual dos nós DOM de outro componente torna seu código
          ainda mais frágil.
        </p>
        <p>
          os componentes que desejam expor seus nós DOM precisam aceitar esse
          comportamento. Um componente pode especificar que “encaminha” sua
          referência para um de seus filhos com <code>forwardRef</code>
        </p>
        <pre>
          {`
          const MyInput = forwardRef((props, ref) => {
            return <input {...props} ref={ref} />
          })
          `}
        </pre>
        <p>
          Para especificar claramente o que é permitido que o elemento pai possa
          executa no elemento referenciado é possivel utilizar o
          <b>useImperativeHandle</b> do React.
        </p>
        <p>
          Caso seja necessário liberar atualizações de estado de forma síncrona
          utilize o flushSync, que é uma função fornecida pelo React que permite
          forçar uma sincronização imediata das atualizações do estado do
          componente, garantindo que todas as atualizações agendadas sejam
          processadas antes de continuar a execução do código.
        </p>
        <UsingFlushSync />

        <p>
          <b>Melhores praticas: </b> Refs são uma saída de emergência. Você só
          deve usá-los quando precisar “sair do React”. Exemplos comuns disso
          incluem gerenciar o foco, a posição de rolagem ou chamar APIs do
          navegador que o React não expõe.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Sincronizando com Effect</h3>
        <p>
          Alguns componentes precisam ser sincronizados com sistemas externos.
          Por exemplo, você pode querer controlar um componente não React com
          base no estado React, configurar uma conexão de servidor ou enviar um
          log analítico quando um componente aparecer na tela. Os efeitos
          permitem executar algum código após a renderização para que você possa
          sincronizar seu componente com algum sistema fora do React.
        </p>
        <p>Há dois tipos de logica dentro do react:</p>
        <ul>
          <li>
            - O código de renderização: Seria os componentes puros aqueles que
            devem apenas executar/calcular e trazer o resultado, mas não fazer
            mais nada.
          </li>
          <li>
            Manipuladores de eventos: Seriam funções aninhadas dentro de seus
            componentes que fazem coisas em vez de apenas calculá-las (por
            exemplo, um clique de botão ou digitação).
          </li>
        </ul>
        <p>
          Às vezes isso não é suficiente. Considerando possíveis componentes que
          devem se conectar com servidores externos os tornando componentes
          impuros.
        </p>
        <p>
          <b>O que são efeitos:</b> Os efeitos permitem especificar efeitos
          colaterais causados pela própria renderização, e não por um evento
          específico, serve como uma maneira de lidar com ações que precisam
          ocorrer após renderizações, como busca de dados, assinatura de eventos
          ou manipulação do DOM. (seria a ideia de poder esperar o DOM carregar
          para assim poder fazer uma referencia com useRef)
        </p>
        <p>
          <b>Como usar um efeito:</b>
        </p>
        <ul>
          <li>
            Declare um useEffect Hook: Por padrão, seu efeito será executado
            após cada renderização se for definida a um estado para ser
            observado do contrario só sera executado esse efeito uma unica vez.
          </li>
          <li>
            Especifique as dependências do efeito: Especifique os estado as
            serem observados.
            <p>
              Nota: Se as dependências não forem definidas e as [] não forem
              passadas o useEffect sera executado em toda renderização que
              ocorra no componente caso seja definida os [] o effect só sera
              executado uma unica vez
            </p>
          </li>
          <li>
            Adicione limpeza, se necessário: Alguns efeitos precisam especificar
            como parar, desfazer ou limpar o que quer que estejam fazendo. Por
            exemplo, “conectar” precisa de “desconectar”, “assinar” precisa de
            “cancelar inscrição” e “buscar” precisa de “cancelar” ou “ignorar”.
          </li>
        </ul>
        <pre>
          {`
           // Efeito que atualiza o título da página após cada renderização
           useEffect(() => {
             document.title = 'Contagem: count';
           });
         
           // Efeito que exibe uma mensagem após a montagem inicial
           useEffect(() => {
             console.log('O componente foi montado');
           }, []);
         
           // Efeito que limpa o temporizador quando o componente é desmontado
           useEffect(() => {
             const timer = setInterval(() => {
               setCount((prevCount) => prevCount + 1);
             }, 1000);
         
             return () => {
               clearInterval(timer);
               console.log('O componente foi desmontado');
             };
           }, []);

           // Outro exemplo de limpeza
            useEffect(() => {
              let ignore = false;
            
              async function startFetching() {
                const json = await fetchTodos(userId);
                if (!ignore) {
                  setTodos(json);
                }
              }
            
              startFetching();
            
              return () => {
                ignore = true;
              };
            }, [userId]);

          //Limpeza com chat
            export default function ChatRoom({ roomId }) {
              useEffect(() => {
                const connection = createConnection(roomId);
                connection.connect();
                return () => connection.disconnect();
              }, [roomId]);
            
              return <h1>Welcome to {roomId}!</h1>;
            }
          `}
        </pre>
        <CompEffect />
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Talvez voce não precise do useEffect</h3>
        <p>
          Os efeitos são uma saída de emergência do paradigma React. Eles
          permitem que você “saia” do React e sincronize seus componentes com
          algum sistema externo, como um widget não-React, rede ou o DOM do
          navegador. Se não houver nenhum sistema externo envolvido (por
          exemplo, se você quiser atualizar o estado de um componente quando
          alguns adereços ou estado mudarem), você não deverá precisar de um
          Efeito. A remoção de efeitos desnecessários tornará seu código mais
          fácil de seguir, mais rápido de executar e menos sujeito a erros.
        </p>
        <p>
          <b>Um caso comum que não necessita de useEffect é: </b> Para
          transformar dados para renderização. Por exemplo, digamos que você
          queira filtrar uma lista antes de exibi-la, poderíamos usar useEffect
          para isso. No entanto, isso é ineficiente. Quando você atualiza o
          estado, o React primeiro chama as funções do componente para calcular
          o que deve estar na tela. Ou seja a atualização do componente em sim
          ja iria ocorrer se fosse adicionado um effect uma nova renderização
          ocorreria sem necessidade.
        </p>
        <p>
          Um outro exemplo seria adquirir um nome completo com base em duas
          variáveis de estado firstname e lastname o uso de effect não teria
          muito sentido, mas sim calcular um novo valor com base nesses dois
          estados.
        </p>
        <pre>
          {`
          function Form() {
            const [firstName, setFirstName] = useState('Taylor');
            const [lastName, setLastName] = useState('Swift');
          
            // 🔴 Avoid: redundant state and unnecessary Effect
            const [fullName, setFullName] = useState('');
            useEffect(() => {
              setFullName(firstName + ' ' + lastName);
            }, [firstName, lastName]);
            // ...
          }

          //Jeito certo

          function Form() {
            const [firstName, setFirstName] = useState('Taylor');
            const [lastName, setLastName] = useState('Swift');
            // ✅ Good: calculated during rendering
            const fullName = firstName + ' ' + lastName;
            // ...
          }
          `}
        </pre>
        <p>
          {" "}
          Armazenar informações de renderizações anteriores também pode ser um
          caso onde effect não entre
        </p>
        <pre>
          {`
          function List({ items }) {
            const [isReverse, setIsReverse] = useState(false);
            const [selection, setSelection] = useState(null);
            ❌
            useEffect(() => {
              setSelection(null);
            }, [items]);
          }

          // ------

          function List({ items }) {
            const [isReverse, setIsReverse] = useState(false);
            const [selection, setSelection] = useState(null);
          
            ✔
            const [prevItems, setPrevItems] = useState(items);
            if (items !== prevItems) {
              setPrevItems(items);
              setSelection(null);
            }
            // ...
          }
          `}
        </pre>
        <p>
          Muitos aplicativos usam efeitos para iniciar a busca de dados. É
          bastante comum escrever um efeito de busca de dados como este:
        </p>
        <pre>
          {`
          function SearchResults({ query }) {
            const [results, setResults] = useState([]);
            const [page, setPage] = useState(1);
          
            useEffect(() => {
              //variável usada para corrigir a condição de corrida das solicitações
              let ignore = false;
              fetchResults(query, page).then(json => {
                if (!ignore) {
                  setResults(json);
                }
              });
              return () => {
                ignore = true;
              };
            }, [query, page]);
          
            function handleNextPageClick() {
              setPage(page + 1);
            }
            // ...
          }
          `}
        </pre>
        <p>
          Você não precisa mover essa busca para um manipulador de eventos. Isto
          pode parecer uma contradição com os exemplos anteriores, onde você
          precisava colocar a lógica nos manipuladores de eventos! No entanto,
          considere que não é o evento de digitação o principal motivo da busca.
          As entradas de pesquisa geralmente são pré-preenchidas a partir do
          URL, e o usuário pode navegar para trás e para frente sem tocar na
          entrada. Não importa de onde page e query venha. Embora este
          componente esteja visível, você deseja mantê-lo results sincronizado
          com os dados da rede para os dados atuais page e query. É por isso que
          é um Efeito.
        </p>

        <p>
          Em geral, sempre que você precisar recorrer à escrita de efeitos,
          fique atento para quando você pode extrair uma parte da funcionalidade
          em um Hook personalizado com uma API mais declarativa e desenvolvida
          para um propósito. Quanto menos useEffect chamadas brutas você tiver
          em seus componentes, mais fácil será manter seu aplicativo.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <p>🚧 Tema deve ser movido para outro lugar 🚧</p>
        <h3>useMemo</h3>
        <p>
          O useMemo coloca em cache o resultado de uma função e o retorna. Se as
          dependências fornecidas ao useMemo permanecerem inalteradas entre as
          renderizações, o valor memorizado é retornado sem reavaliar a função.
          <br />
          Se as dependências fornecidas ao useMemo mudarem entre as
          renderizações, a função é reavaliada e um novo valor é memoizado. Esse
          novo valor é retornado nas renderizações subsequentes até que as
          dependências mudem novamente.
          <br />
          useMemo não tornará a primeira renderização mais rápida. Isso apenas
          ajuda você a pular trabalhos desnecessários nas atualizações.
        </p>
        <pre>
          {`
            const [value, setValue] = useState(10);

            // Memoriza o resultado da função de cálculo
            const memorizedResult = useMemo(() => {

              console.log('Calculando novo valor...');

              return value * 2;

            }, [value]); // Reavalia quando o valor muda
          `}
        </pre>
        <p>
          <b>Quando usar:</b> Execute a interação que você está medindo. Você
          verá os logs como filter array: 0.15ms em seu console. Se o tempo
          total registrado totalizar um valor significativo (digamos, 1ms ou
          mais), pode fazer sentido usar useMemo.
        </p>
        <pre>
          {`
           console.time('filter array'); 
           const visibleTodos = getFilteredTodos(todos, filter); 
           console.timeEnd('filter array');
          `}
        </pre>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Ciclo de vida dos efeitos reativos</h3>
        <p>
          Os efeitos têm um ciclo de vida diferente dos componentes. Os
          componentes podem ser montados, atualizados ou desmontados. Um Efeito
          só pode fazer duas coisas: começar a sincronizar algo e depois parar
          de sincronizá-lo. Este ciclo pode acontecer várias vezes se o seu
          efeito depender de adereços e estados que mudam com o tempo. O React
          fornece uma regra linter para verificar se você especificou as
          dependências do seu efeito corretamente. Isso mantém seu efeito
          sincronizado com os adereços e estados mais recentes.
        </p>
        <p>
          Para ilustrar este ponto, considere este efeito conectando seu
          componente a um servidor de chat:
        </p>
        <pre>
          {`
          const serverUrl = 'https://localhost:1234';

          function ChatRoom({ roomId }) {
            useEffect(() => {

              // -> iniciar a sincronização

              const connection = createConnection(serverUrl, roomId);
              connection.connect();

              // -> parar a sincronização
              return () => {
                connection.disconnect();
              };
              
              // ...

            }, [roomId]);
            // ...
          }
          `}
        </pre>

        <p>
          A questão de poder precisar sincronizar varias vezes e com sincronizar
          quer dizer se conectar a uma nova sala referindo-se ao exemplo acima,
          é que sem essa sincronização não ocorre a mudança de sala então a
          função de limpeza vem pra ajudar nesse caso, desconectando o user e
          reconectando novamente a uma nva sala.
        </p>
        <p>
          É observável que componente que apresentam variaveis regulares que são
          calculadas durante a renderização podem (se fizer sentido) estar
          dentro dos valores observáveis do efeito.
        </p>
        <pre>
          {`
            function ChatRoom({ roomId, selectedServerUrl }) { // roomId is reactive
              const settings = useContext(SettingsContext); // settings is reactive
              const serverUrl = selectedServerUrl ?? settings.defaultServerUrl; // serverUrl is reactive
              useEffect(() => {
                const connection = createConnection(serverUrl, roomId); // Your Effect reads roomId and serverUrl
                connection.connect();
                return () => {
                  connection.disconnect();
                };
              }, [roomId, serverUrl]); // So it needs to re-synchronize when either of them changes!
              // ...
            }
          `}
        </pre>
        <p>
          Uma observação em questão de dependências é que Evite confiar em
          objetos e funções como dependências.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Separando eventos de efeitos</h3>
        <p>
          Eventos sao acionados por triggers e efeitos são acionados por
          dependências que eram diferentes do que eram durante a última
          renderização. Às vezes, você também deseja uma mistura de ambos os
          comportamentos: um Efeito que é executado novamente em resposta a
          alguns valores, mas não a outros.
        </p>
        <br />
        <p>
          <b>Como escolher entre um evento ou um efeito:</b> se a interação for
          ser executada em um tempo especifico por conta da ação do usuario logo
          é um evento por exemplo clicar para enviar uma mensagem, agora se ação
          a ocorrer for independente do usuario logo é um efeito, por exemplo
          conectar no servidor de chat
        </p>
        <br />
        <p>
          <b>Extraindo lógica não reativa de efeitos:</b> A questão nesse ponto
          é que se uma variavel reativa (cuja as mudanças são detectadas por
          exemplo useState) estivesse como dependencia do efeito porem não se
          necessitasse dessa variavel lá (o react avisa que toda variavel
          reativa presente dentro do efeito se faz necessario dentro das
          dependencias!!!) seria preciso encontrar uma maneira de separar essa
          lógica não reativa do efeito reativo ao seu redor.
        </p>
        <p>
          Para resolver isso podemos usar o hook <code>useEffectEvent</code>
        </p>
        <pre>
          {`
          function ChatRoom({ roomId, theme }) {
            const onConnected = useEffectEvent(() => {
              showNotification('Connected!', theme);
            });
          
            useEffect(() => {
              const connection = createConnection(serverUrl, roomId);
              connection.on('connected', () => {
                onConnected();
              });
              connection.connect();
              return () => connection.disconnect();
            }, [roomId]); // ✅ All dependencies declared
            // ...
          `}
        </pre>
        <p>
          Você pode pensar em Effect Events como sendo muito semelhantes aos
          manipuladores de eventos. A principal diferença é que os manipuladores
          de eventos são executados em resposta às interações do usuário,
          enquanto os eventos de efeito são acionados por você a partir de
          efeitos. Os Eventos de Efeito permitem “quebrar a cadeia” entre a
          reatividade dos Efeitos e o código que não deveria ser reativo.
        </p>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Removendo dependência de efeito</h3>
        <p>
          Remover dependências desnecessárias pode ser necessário para não
          causar bugs ou o efeito não ser executado diversas vezes
        </p>
        <ul>
          <li>
            <p>
              Um ponto a se observar nesse topico seria se o seu efeito está
              fazendo várias coisas não relacionadas.
            </p>
            <br />
            <p>
              Imagine que você está criando um formulário de envio onde o
              usuário precisa escolher sua cidade e região. Você busca na lista
              de cities de acordo com a lista de country para mostrá-los em um
              menu suspenso:
            </p>
            <pre>
              {`
              function ShippingForm({ country }) {
                const [cities, setCities] = useState(null);
                const [city, setCity] = useState(null);
              
                useEffect(() => {
                  let ignore = false;
                  fetch('/api/cities?country=\${country}')
                    .then(response => response.json())
                    .then(json => {
                      if (!ignore) {
                        setCities(json);
                      }
                    });
                  return () => {
                    ignore = true;
                  };
                }, [country]); // ✅ All dependencies declared
              
                // ...
              `}
            </pre>
            <p>
              Agora, digamos que você adicione uma segunda caixa de seleção para
              áreas da cidade, que deve buscar o areas arquivo city. Você pode
              começar adicionando uma segunda chamada fetch para a lista de
              áreas dentro do mesmo Efeito:
            </p>
            <pre>
              {`
              function ShippingForm({ country }) {
                const [cities, setCities] = useState(null);
                const [city, setCity] = useState(null);
                const [areas, setAreas] = useState(null);
              
                useEffect(() => {
                  let ignore = false;
                  fetch('/api/cities?country=\${country}')
                    .then(response => response.json())
                    .then(json => {
                      if (!ignore) {
                        setCities(json);
                      }
                    });
                  // 🔴 Avoid: A single Effect synchronizes two independent processes
                  if (city) {
                    fetch('/api/areas?city=\${city}')
                      .then(response => response.json())
                      .then(json => {
                        if (!ignore) {
                          setAreas(json);
                        }
                      });
                  }
                  return () => {
                    ignore = true;
                  };
                }, [country, city]); // ✅ All dependencies declared
              
                // ...
              `}
            </pre>
            <p>
              No entanto, como o Efeito agora usa a city variável de estado,
              você teve que adicioná-la city à lista de dependências. Isso, por
              sua vez, introduziu um problema: quando o usuário seleciona uma
              cidade diferente, o Efeito será executado novamente e chamará
              fetchCities(country). Como resultado, você recuperará
              desnecessariamente a lista de cidades muitas vezes.
            </p>
            <p>
              Para corrigir isso divida a lógica em dois efeitos, cada um
              reagindo ao suporte com o qual precisa ser sincronizado:
            </p>
            <pre>
              {`
              function ShippingForm({ country }) {
                const [cities, setCities] = useState(null);
                useEffect(() => {
                  let ignore = false;
                  fetch('/api/cities?country=\${country}')
                    .then(response => response.json())
                    .then(json => {
                      if (!ignore) {
                        setCities(json);
                      }
                    });
                  return () => {
                    ignore = true;
                  };
                }, [country]); // ✅ All dependencies declared
              
                const [city, setCity] = useState(null);
                const [areas, setAreas] = useState(null);
                useEffect(() => {
                  if (city) {
                    let ignore = false;
                    fetch('/api/areas?city=\${city}')
                      .then(response => response.json())
                      .then(json => {
                        if (!ignore) {
                          setAreas(json);
                        }
                      });
                    return () => {
                      ignore = true;
                    };
                  }
                }, [city]); // ✅ All dependencies declared
              
                // ...
              `}
            </pre>
            <p>
              Outro ponto importante é evitar usar objetos ou funçoes como
              dependencias de efeitos, pois eles são recriados todas vez que ha
              uma renderização no componente para contornar esse problema tente
              movê-los para fora do componente, dentro do Efeito, ou extrair
              valores primitivos deles.
            </p>
            <p>
              Se o objeto ou função não depender de nenhum valor reativo (de
              algum useState) mova-ó para fora do componente
            </p>
            <pre>
              {`
              const options = {
                serverUrl: 'https://localhost:1234',
                roomId: 'music'
              };
              
              function ChatRoom() {
                const [message, setMessage] = useState('');
              
                useEffect(() => {
                  const connection = createConnection(options);
                  connection.connect();
                  return () => connection.disconnect();
                }, []); // ✅ All dependencies declared
                // ...
              `}
            </pre>
            <p>Agora se depender deve ser especificado dentro do efeito</p>
            <pre>
              {`
              function ChatRoom({ roomId }) {
                const [message, setMessage] = useState('');
              
                useEffect(() => {
                  const options = {
                    serverUrl: serverUrl,
                    roomId: roomId
                  };
                  const connection = createConnection(options);
                  connection.connect();
                  return () => connection.disconnect();
                }, [roomId]); // ✅ All dependencies declared
                // ...
              `}
            </pre>
          </li>
        </ul>
      </div>

      <div style={{ margin: "12px 0" }}>
        <h3>Reutilizando logica em hooks personalizados</h3>
        <p>
          Às vezes, você desejará que houvesse um Gancho para algum propósito
          mais específico: por exemplo, para buscar dados, para saber se o
          usuário está online ou para conectar-se a uma sala de bate-papo. Você
          pode não encontrar esses Hooks no React, mas pode criar seus próprios
          Hooks de acordo com as necessidades do seu aplicativo.
        </p>
        <p>
          <b>O que são custom hooks:</b> são uma forma de reutilizar lógica de
          estado e efeitos em componentes funcionais no React. Eles permitem
          extrair lógica de um componente e reutilizá-la em outros componentes
          sem a necessidade de repetição de código. Em essência, um custom hook
          é uma função JavaScript que utiliza hooks do React internamente. Ele
          pode utilizar hooks básicos, como useState, useEffect, useContext,
          entre outros, para encapsular um comportamento específico. Os custom
          hooks seguem uma convenção de nomenclatura, começando com o prefixo
          "use" para indicar que são hooks e permitir o compartilhamento de
          lógica em diversos componentes.
        </p>
        <pre>
          {`
          import { useState, useEffect } from 'react';

          function useFetch(url) {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
          
            useEffect(() => {
              const fetchData = async () => {
                try {
                  const response = await fetch(url);
                  const jsonData = await response.json();
                  setData(jsonData);
                  setLoading(false);
                } catch (error) {
                  console.error('Erro ao buscar dados:', error);
                  setLoading(false);
                }
              };
          
              fetchData();
          
              // Cleanup function
              return () => {
                // Executado ao desmontar o componente ou ao atualizar a URL
                setData(null);
                setLoading(true);
              };
            }, [url]);
          
            return { data, loading };
          }
          
          export default useFetch;
          `}
        </pre>
        <p>
          Ao extrair lógica em Hooks personalizados, você pode ocultar os
          detalhes complicados de como você lida com algum sistema externo ou
          uma API do navegador. O código dos seus componentes expressa sua
          intenção, não a implementação.
        </p>
        <pre>
          {`
          function useOnlineStatus() {
            const [isOnline, setIsOnline] = useState(true);
            useEffect(() => {
              function handleOnline() {
                setIsOnline(true);
              }
              function handleOffline() {
                setIsOnline(false);
              }
              window.addEventListener('online', handleOnline);
              window.addEventListener('offline', handleOffline);
              return () => {
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
              };
            }, []);
            return isOnline;
          }

          //Outro componente
          import { useOnlineStatus } from './useOnlineStatus.js';

          function StatusBar() {
            const isOnline = useOnlineStatus();
            return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
          }
          `}
        </pre>
        <p>Outro exemplo seria extrair o efeito como:</p>
        <pre>
          {`
          export function useChatRoom({ serverUrl, roomId }) {
            useEffect(() => {
              const options = {
                serverUrl: serverUrl,
                roomId: roomId
              };
              const connection = createConnection(options);
              connection.connect();
              connection.on('message', (msg) => {
                showNotification('New message: ' + msg);
              });
              return () => connection.disconnect();
            }, [roomId, serverUrl]);
          }

          //------------------

          export default function ChatRoom({ roomId }) {
            const [serverUrl, setServerUrl] = useState('https://localhost:1234');
          
            useChatRoom({
              roomId: roomId,
              serverUrl: serverUrl
            });
          
            return (
              <>
                <label>
                  Server URL:
                  <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
                </label>
                <h1>Welcome to the {roomId} room!</h1>
              </>
            );
          }
          `}
        </pre>
      </div>
    </div>
  );
}


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
            <p>Reacqt guarda essa função</p>
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
          transformar dados para renderização: Por exemplo, digamos que você
          queira filtrar uma lista antes de exibi-la. No entanto, isso é
          ineficiente. Quando você atualiza o estado, o React primeiro chama as
          funções do componente para calcular o que deve estar na tela.
        </p>
      </div>
    </div>
  );
}


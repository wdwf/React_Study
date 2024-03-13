import ExemploKitty from "./ExemploKitty";
import UsingFlushSync from "./UsingFlushSync";
import RefComponent from "./ref/RefComponent";

export default function Cap5() {
  return (
    <div>
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
      </div>
    </div>
  );
}


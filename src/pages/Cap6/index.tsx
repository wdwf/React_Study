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
      </div>
    </div>
  );
}


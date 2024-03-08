import RefComponent from "./ref/refComponent";

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
          não deseja que essas informações acionem novas renderizações , você
          pode usar um ref .
        </p>
        <p>
          O ref aponta para um número (no exemplo feito), mas, como state , você
          pode apontar para qualquer coisa: uma string, um objeto ou até mesmo
          uma função. Ao contrário do estado, ref é um objeto JavaScript simples
          com a current propriedade que você pode ler e modificar.
        </p>
        <p>
          o componente não é renderizado novamente a cada incremento. Assim como
          o estado, as referências são retidas pelo React entre as novas
          renderizações. No entanto, definir o estado renderiza novamente um
          componente. Mudar uma referência não!
        </p>

        <RefComponent />
      </div>
    </div>
  );
}


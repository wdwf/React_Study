import thinkingReact from "../../assets/images/s_thinking-in-react_ui_outline.png";
import FilterableProductTable from "./components/FilterableProductTable";

function Cap2() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <div>
      <h2>Pensando em react</h2>
      <p>
        Ao utilizar o react é necessário mudar a forma como se pensa na questão
        de designer. Ao construir uma interface com react, primeiro é necessário
        dividir em partes chamadas componentes. Em seguida voce deve descrever
        os diferentes estados visuais de cada um de seus componentes.
        Finalmente, voce devera conectar os mesmo para que os dados flutuem
        através deles.
      </p>
      <br />
      <div style={{ marginBottom: "24px" }}>
        <h4>Etapa 1. Dividir a IU em uma hierarquia de componentes</h4>
        <hr />
        <p>
          Desenhando em caixas separe cada componente e subcomponente do modelo
          visual/protótipo e nome-os
        </p>
        <img src={thinkingReact} alt="" style={{ width: "500px" }} />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <h4>Etapa 2. Construir uma versão estática no react</h4>
        <hr />
        <p>
          Tendo essa hierarquia de componentes ja podemos implementa-la. A
          abordagem mais direta é construir uma versão que renderize a UI a
          partir do seu modelo de dados sem adicionar qualquer interatividade.
          Ou seja primeiro construa a versão estática e depois adicione
          interatividade.
        </p>
        <p>
          Utilize props caso deseje utilizar componentes que utilizam outros
          componentes. evite usar states pois eles são reservados para
          interatividade.
        </p>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <h4>
          Etapa 3. Encontre a representação minima, mas completa, do estado da
          IU
        </h4>
        <hr />
        <p>
          Para tornar a IU interativa, voce precisa permitir que os usuarios
          alterem seu modelo de dados subjacentes. e é ai que entra o estado.
        </p>
        <p>
          Pense no estado como um conjunto minimo de dados variaveis que seu
          aplicativo precisa lembrar. Porem o ponto chave esta em manter os
          estado seco ou do ingles DRY que seria "Não se repita."
        </p>
        <p>
          Então pense em todos os dados do aplicativo e identifique aqueles que
          não são mutaveis
        </p>
        <ul>
          <li>
            Permanece inalterado ao longo do tempo? Se sim, não é estatal.
          </li>
          <li>
            É transmitido de um pai por meio de acessórios? Se sim, não é
            estatal.
          </li>
          <li>
            Você pode calculá-lo com base no estado ou adereços existentes em
            seu componente? Se sim, definitivamente não é estado!
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <h4>Etapa 4. Identifique onde seu estado deveria ficar</h4>
        <p>Depois de identificar os dados de estado mínimo do seu aplicativo, você precisa identificar qual componente é responsável por alterar esse estado ou é o proprietário do estado. Lembre-se: o React usa fluxo de dados unidirecional, passando os dados pela hierarquia de componentes do componente pai para o componente filho.</p>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <h4>Etapa 5. Adicionar fluxo de dados inverso</h4>
        <p>Para alterar o estado de acordo com a entrada do usuario, voce precisara oferecer suporte ao fluxo de dados no sentido contrario. ou seja os componentes na hierarquia precisam atualizar o estado no elemento pai.</p>
      </div>
      <h4>O Projeto</h4>
      <hr />
      <p>
        Se você observar o código desse projeto devera entender o funcionamento
      </p>
      <FilterableProductTable products={PRODUCTS} />;
    </div>
  );
}

export default Cap2;

import React from "react";
import CompExport from "./components/CompExport";
import CompProps from "./components/CompProps";
import CompPuro from "./components/CompPuro";
import CompImpuro from "./components/CompImpuro";
import generic_render_tree from "../../assets/images/generic_render_tree.webp";

export default function Cap3() {
  function Comp() {
    return <p style={{ background: "#ccc" }}>Isso é um componente</p>;
  }

  const lista = [
    { name: "Fulano", about: "Texto aleatorio" },
    { name: "Siclano", about: "Texto aleatorio 2" },
    { name: "Gatuno", about: "Texto aleatorio 3" },
  ];

  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <h4>Primeiro componente</h4>
        <hr />
        <p>
          Para se criar um componente basta criar uma função que retorne um JSX
          mas se atente pois todo componente deve ter sua primeira letra como
          maiuscula
        </p>
        <Comp />
        <Comp />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Importando e exportando componentes</h4>
        <hr />
        <p>
          Para importar um elemento é utilizado <code>import</code> e para
          exportar temos 2 métodos
        </p>
        <p>
          <code>export</code> e <code>export default</code> a diferença esta na
          forma de importar:
        </p>
        <ul>
          <li>export - Utilizamos as {"{elemento}"}</li>
          <li>export default - Não utilizamos as {"{}"}</li>
        </ul>
        <CompExport />
        <CompExport />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Javascript em JSX com chaves</h4>
        <hr />
        <p>
          Se quisermos utilizar javascript em meio ao html utilizamos as{" "}
          {"{codigo javascript}"}
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Passando adereços para um componente</h4>
        <p>
          Por meio das props podemos passar valores e funções para os outros
          componentes
        </p>
        <CompProps title="Componente com props">
          <p>Texto aleatorio...</p>
        </CompProps>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Renderização condicional</h4>
        {false && <button>Botão 1</button>}

        {true && <p>Texto Condicional 1</p>}

        {2 + 2 === 4 ? <p>Verdadeiro</p> : <p>Falso</p>}
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Renderizando listas</h4>
        <p>
          para renderizar listas fazemos uso das funçoes do javascript que
          operão em cima de arrays
        </p>
        <ul>
          {lista.map((item) => (
            <li>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {item.name}
              </p>
              <p>{item.about}</p>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>Componentes puros</h4>
        <p>
          Componentes puros são aqueles que não altera nenhum objeto ou variavel
          que existia antes de ser chamado.
        </p>
        <CompPuro valor={1} />
        <CompPuro valor={2} />
        <CompImpuro />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4>IU como uma árvore</h4>
        <p>
          React usa árvores para modelar os relacionamentos entre componentes e
          módulos.
        </p>
        <div style={{ background: "#555" }}>
          <img src={generic_render_tree} alt="" />
        </div>
        <p>Os componentes próximos ao topo da árvore, próximos ao componente raiz, são considerados componentes de nível superior. Componentes sem componentes filhos são componentes folha. Essa categorização de componentes é útil para compreender o fluxo de dados e o desempenho de renderização.</p>
      </div>
    </div>
  );
}

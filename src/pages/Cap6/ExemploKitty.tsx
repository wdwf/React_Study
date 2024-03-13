import React, { useRef } from "react";

const listImages = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1673967796686-154ab5ad9ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1624798118458-fb59e82ca1ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdHR5fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1673967796686-154ab5ad9ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1673967796686-154ab5ad9ca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ExemploKitty() {
  const itemsRef = useRef<any>(null);

  function scrollToId(itemId: number) {
    //transforma a referencia em um objeto de chave-valor
    const map = getMap();
    console.log(map);
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }
  return (
    <div>
      <nav>
        <button onClick={() => scrollToId(1)}>Tom</button>
        <button onClick={() => scrollToId(2)}>Maru</button>
        <button onClick={() => scrollToId(4)}>Jellylorum</button>
      </nav>
      <div>
        <ul style={{ width: "100%", display: "flex", overflowY: "scroll" }}>
          {listImages.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                console.log(map);

                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.image}
                alt={"Cat #" + cat.id}
                style={{ width: "500px" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


import { createContext } from "react";

/*
O único argumento createContexté o valor padrão . Aqui, 1refere-se ao maior nível de título, mas você pode passar qualquer tipo de valor (até mesmo um objeto). 
*/
export const LevelContext = createContext(1);

import React, { ReactNode, createContext, useContext } from "react";

export const TaskContextEx = createContext({});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  return <TaskContextEx.Provider value={{}}>{children}</TaskContextEx.Provider>;
};

export const useTasks = () => useContext(TaskContextEx);


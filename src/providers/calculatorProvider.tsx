import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { errorToast } from "../components/toasts";
import API from "../services/API";

type CalculatorProviderProps = { children: ReactNode };

interface CalculatorProviderData {}

export const CalculatorContext = createContext<CalculatorProviderData>(
  {} as CalculatorProviderData
);

export const Calculator = () => {
  const context = useContext(CalculatorContext);
  return context;
};

export default function CalculatorProvider({
  children,
}: CalculatorProviderProps) {
  useEffect(() => {}, []);

  return (
    <CalculatorContext.Provider value={{}}>
      {children}
    </CalculatorContext.Provider>
  );
}

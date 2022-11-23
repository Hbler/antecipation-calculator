import { ReactNode } from "react";

import AppTheme from "../styles/theme";
import CalculatorProvider from "./calculatorProvider";

type RootProviderProps = { children: ReactNode };

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <AppTheme>
      <CalculatorProvider>{children}</CalculatorProvider>
    </AppTheme>
  );
}

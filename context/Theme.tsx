import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <div>
      <NextThemesProvider {...props}>
        ThemeProviderProvider: {children}
      </NextThemesProvider>
    </div>
  );
};

export default ThemeProvider;

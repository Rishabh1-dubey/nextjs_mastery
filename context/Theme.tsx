"use client";
import React from "react";
import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <div>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </div>
  );
};

export default ThemeProvider;

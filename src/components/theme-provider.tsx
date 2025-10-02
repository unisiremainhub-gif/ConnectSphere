
"use client"

import type { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export const ThemeProvider: FC<ThemeProviderProps & { children: ReactNode }> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

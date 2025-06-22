import type { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AppKitProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
      <ReactQueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
  );
}

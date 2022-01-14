import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistor } from "./redux/store";
import CBridgeHome  from "./views/CBridgeHome";
import { Web3ContextProvider } from "./providers/Web3ContextProvider";
import { ContractsContextProvider } from "./providers/ContractsContextProvider";
import { ThemeProvider } from "react-jss";
import { ColorThemeContext } from "./providers/ThemeProvider";
import { ConfigContextProvider } from "./providers/ConfigContextProvider";
import { darkTheme, lightTheme } from "./theme/theme";
import useThemeType from "./hooks/useThemeType";
import "./app/app.less";
import { useWindowWidth } from "./hooks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function CBridgeTransferWidget(): JSX.Element {
  const [themeType, toggleTheme] = useThemeType();
  useWindowWidth();

  return (
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Web3ContextProvider>
            <ContractsContextProvider>
              <ConfigContextProvider>
                <ColorThemeContext.Provider value={{ themeType, toggleTheme }}>
                  <ThemeProvider theme={ themeType === "dark" ? darkTheme : lightTheme}>
                    <CBridgeHome />
                  </ThemeProvider>
                </ColorThemeContext.Provider>
              </ConfigContextProvider>
            </ContractsContextProvider>
          </Web3ContextProvider>
        </HashRouter>
      </QueryClientProvider>
    </PersistGate>
  );
}

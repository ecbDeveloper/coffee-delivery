import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "sonner";


export function App() {

	return (
		<ThemeProvider theme={DefaultTheme}>
			<Toaster position="top-right" />
			<BrowserRouter>
				<Router />
			</BrowserRouter>

			<GlobalStyle />
		</ThemeProvider>
	)
}



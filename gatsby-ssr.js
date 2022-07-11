import React from "react";
import { AppContextProvider } from "./src/components/appContext/AppContext.tsx";

export function wrapRootElement({ element, props }) {
	return <AppContextProvider {...props}> {element} </AppContextProvider>;
}

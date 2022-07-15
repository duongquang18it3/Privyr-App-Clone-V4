import React from "react";
import {
	createContext,
	useContext,
	useLayoutEffect,
	useReducer,
	useState,
} from "react";
import { authentication } from "./appContextDataType";
import { appStateReducer, AppStateDispatch } from "./AppStateReducer";
import { initAppState } from "./InitAppState";

export type AppState = {
	authentication: authentication;
	isActiveBurger: boolean;
	isActiveFloatPopUp: boolean;
	activeTab?: string;
};

export type AppStateInitParams =
	| {
			authentication: authentication;
			isActiveBurger: boolean;
			isActiveFloatPopUp: boolean;
			activeTab?: string;
	  }
	| undefined;

export type AppStateProviderProps = {
	children: React.ReactNode;
	appStateInitParams?: AppStateInitParams;
};

export const AppContext = createContext<AppState | undefined>(undefined);
const AppStateDispatchContext = createContext<AppStateDispatch | undefined>(
	undefined
);

export const AppContextProvider = ({
	children,
	appStateInitParams,
}: AppStateProviderProps): JSX.Element => {
	const [state, dispatch] = useReducer<
		typeof appStateReducer,
		AppStateInitParams
	>(appStateReducer, appStateInitParams, initAppState);

	const [appState, setAppState] = useState(state);

	useLayoutEffect(() => {
		// Only queue new update if previous is finished.
		setAppState(state);
	}, [state]);

	return (
		<AppContext.Provider value={appState}>
			<AppStateDispatchContext.Provider value={dispatch}>
				{children}
			</AppStateDispatchContext.Provider>
		</AppContext.Provider>
	);
};

export function useAppState(): AppState {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppState must be used within a AppStateProvider");
	}
	return context;
}

export function useAppStateDispatch(): AppStateDispatch {
	const context = useContext(AppStateDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useAppStateDispatch must be used within a AppStateProvider"
		);
	}
	return context;
}
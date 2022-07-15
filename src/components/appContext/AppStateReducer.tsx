import { AppState } from "./AppContext";

export type AppStateDispatch = (action: AppStateAction) => void;
export type AppStateAction =
  | { type: "toggleActiveBurger"; value?: boolean }
  | { type: "toggleActiveFloatPopUp"; value?: boolean }
  | { type: "setTabActive"; value?: string };
export function appStateReducer(
  state: AppState,
  action: AppStateAction
): AppState {
  switch (action.type) {
    case "toggleActiveBurger":
      return toggleActiveBurger(state, action.value);
    case "toggleActiveFloatPopUp":
      return toggleActiveFloatPopUp(state, action.value);
    case "setTabActive":
      return setTabActive(state, action.value);

    default:
      console.error("invalid action");
      return state;
  }
}

const toggleActiveBurger = (state: AppState, value?: boolean): AppState => {
  const result = { ...state };
  if (value === undefined) {
    result.isActiveBurger = !result.isActiveBurger;
  } else {
    result.isActiveBurger = value;
  }

  return result;
};

const toggleActiveFloatPopUp = (state: AppState, value?: boolean): AppState => {
  const result = { ...state };
  if (value === undefined) {
    result.isActiveFloatPopUp = !result.isActiveFloatPopUp;
  } else {
    result.isActiveFloatPopUp = value;
  }

  return result;
};

const setTabActive = (state: AppState, value?: string): AppState => {
  const result = { ...state };
  if (value === undefined) {
    result.activeTab = undefined;
  } else {
    result.activeTab = value;
  }

  return result;
};
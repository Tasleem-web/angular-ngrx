import { createReducer, on } from "@ngrx/store";
import { setAPISuccess } from "./app.action";
import { Appstate } from "./appstate";

const initialState: Appstate = {
  apiStatus: "",
  apiResponseMessage: ""
}
export const appReducer = createReducer(
  initialState,
  on(setAPISuccess, (state, { appStatus }) => {
    return appStatus
  })
)

import { createAction, props } from "@ngrx/store";
import { Books } from "src/app/customers/store/books";
import { Appstate } from "./appstate";

export const setAPISuccess = createAction(
  "SET_API_SUCCESS",
  props<{ appStatus: Appstate }>()
)

export const invokeUpdateBookAPI = createAction(
  "INVOKE_UPDATE_BOOK_API",
  props<{ payload: Books }>()
)

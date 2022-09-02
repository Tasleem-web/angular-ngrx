import { createReducer, on } from "@ngrx/store";
import { Books } from "./books";
import { booksAPIFetchSuccess, deleteBookSuccess, saveBooksSuccess, updateBooksSuccess } from "./books.action";

export const initialState: ReadonlyArray<Books> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksAPIFetchSuccess, (state, { allBooks }) => allBooks),
  on(saveBooksSuccess, (state, { response }) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  }),
  on(updateBooksSuccess, (state, { response }) => {
    let newState = state.filter(_ => _.id !== response.id);
    newState.unshift(response);
    return newState
  }),
  on(deleteBookSuccess, (state, { id }) => {
    let newState = state.filter(_ => _.id !== id);
    return newState
  })
)

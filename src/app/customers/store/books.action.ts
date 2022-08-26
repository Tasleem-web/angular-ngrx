import { createAction, props } from "@ngrx/store";
import { Books } from "./books";

export const invokeBooksAPI = createAction(
  "INVOKE_FETCH_BOOKS"
)

export const booksAPIFetchSuccess = createAction(
  "FETCH_BOOKS_SUCCESS",
  props<{ allBooks: Books[] }>()
)

// For Add a Book
export const saveBooks = createAction("SAVE_BOOKS", props<{ payload: Books }>());
export const saveBooksSuccess = createAction("SAVE_BOOKS_SUCCESS", props<{ response: Books }>());

// for update a book
export const updateBooksSuccess = createAction("UPDATE_BOOKS_SUCCESS", props<{ response: Books }>());

// For Delete a book
export const deleteBook = createAction("DELETE_BOOK", props<{ id: number }>());
export const deleteBookSuccess = createAction("DELETED_BOOK_SUCCESS", props<{ id: number }>());

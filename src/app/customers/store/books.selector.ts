import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Books } from "./books";

export const selectBooks = createFeatureSelector<Books[]>('myBooks')

export const selectBookById = (bookId: number) => {
  return createSelector(selectBooks, (books: Books[]) => {

    let bookById = books.filter(_ => _.id == bookId);

    if (bookById.length > 0) return bookById[0];
    return null;
  })
}

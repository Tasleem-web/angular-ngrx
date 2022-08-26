import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, switchMap, withLatestFrom } from "rxjs";
import { invokeUpdateBookAPI, setAPISuccess } from "src/app/shared/store/app.action";
import { Appstate } from "src/app/shared/store/appstate";
import { BooksService } from "../books.service";
import { booksAPIFetchSuccess, deleteBook, deleteBookSuccess, invokeBooksAPI, saveBooks, saveBooksSuccess, updateBooksSuccess } from "./books.action";
import { selectBooks } from "./books.selector";

@Injectable()
export class BooksEffect {
  constructor(
    private _actions$: Actions,
    private _bookService: BooksService,
    private _appStore: Store<Appstate>,
    private _Store: Store
  ) { }

  loadAllBooks$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this._Store.pipe(select(selectBooks))),
      switchMap(([, booksFromStore]) => {
        if (booksFromStore.length > 0) return EMPTY;
        return this._bookService.get()
          .pipe(map((data) => booksAPIFetchSuccess({ allBooks: data })))
      })
    )
  )

  saveBook$ = createEffect(() =>
    this._actions$.pipe(
      ofType(saveBooks),
      switchMap((action) => {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        return this._bookService
          .create(action.payload)
          .pipe(map((data) => {
            this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: 'Success', apiResponseMessage: '' } }));
            return saveBooksSuccess({ response: data })
          }))
      })
    ))

  updateBook$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeUpdateBookAPI),
      switchMap((action) => {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        return this._bookService
          .update(action.payload)
          .pipe(map((data) => {
            this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: 'Success', apiResponseMessage: '' } }));
            return updateBooksSuccess({ response: data })
          }))
      })
    ))

  deleteBook$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deleteBook),
      switchMap((action) => {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        return this._bookService
          .delete(action.id)
          .pipe(map((data) => {
            this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: 'Success', apiResponseMessage: '' } }));
            return deleteBookSuccess({ id: action.id })
          }))
      })
    ))
}

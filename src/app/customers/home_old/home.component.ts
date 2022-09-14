import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setAPISuccess } from 'src/app/shared/store/app.action';
import { appSelector } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Books } from '../store/books';
import { deleteBook, deleteBookSuccess, invokeBooksAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _store: Store,
    private _appStore: Store<Appstate>
  ) { }

  books$ = this._store.pipe(select(selectBooks));
  totalBooks: any;


  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.books$.subscribe(data => {
      this.totalBooks = data
    });

    this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'));
    this._store.dispatch(invokeBooksAPI());
  }

  openModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }


  confirmDelete() {
    this._store.dispatch(deleteBook({ id: this.idToDelete }));
    let appStatus$ = this._appStore.pipe(select(appSelector));
    appStatus$.subscribe((data) => {
      if (data.apiStatus == 'Success') {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        this.deleteModal.hide();
      }
    })
  }
}

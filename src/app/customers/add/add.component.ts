import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPISuccess } from 'src/app/shared/store/app.action';
import { appSelector } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Books } from '../store/books';
import { saveBooks } from '../store/books.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _store: Store, private _appStore: Store<Appstate>, private _router: Router) { }

  bookForm: Books = {
    id: +((Math.random().toString(36) + Date.now().toString(36)).substr(2)),
    title: '',
    author: '',
    cost: 0
  }

  isSubmitted = false
  ngOnInit(): void {
  }

  save() {
    console.log(this.bookForm);
    this._store.dispatch(saveBooks({ payload: { ...this.bookForm } }));
    let appStatus$ = this._appStore.pipe(select(appSelector));
    appStatus$.subscribe((data) => {
      if (data.apiStatus == 'Success') {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        this._router.navigate(['/books']);
      }
    })
    this.isSubmitted = true
  }

}

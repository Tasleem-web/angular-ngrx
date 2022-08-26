import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { invokeUpdateBookAPI, setAPISuccess } from 'src/app/shared/store/app.action';
import { appSelector } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { Books } from '../store/books';
import { selectBookById } from '../store/books.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private _router: Router,
    private _appStore: Store<Appstate>
  ) { }

  bookForm: Books = {
    id: +((Math.random().toString(36) + Date.now().toString(36)).substr(2)),
    title: '',
    author: '',
    cost: 0
  }

  ngOnInit(): void {
    let fetchDataForm$ = this._route.paramMap.pipe(
      switchMap((param) => {
        let id = Number(param.get('id'));
        return this._store.pipe(select(selectBookById(id)));
      })
    )
    console.log("fetchDataForm$", fetchDataForm$);

    fetchDataForm$.subscribe((data) => {
      if (data) {
        this.bookForm = { ...data };
      } else {
        this._router.navigate(['/books'])
      }
    })
  }

  Update() {
    this._store.dispatch(invokeUpdateBookAPI({ payload: { ...this.bookForm } }));
    let appStatus$ = this._appStore.pipe(select(appSelector));
    appStatus$.subscribe((data) => {
      if (data.apiStatus == 'Success') {
        this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
        this._router.navigate(['/books']);
      }
    })
  }
}

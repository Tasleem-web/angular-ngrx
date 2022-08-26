import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/books.effects';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    StoreModule.forFeature("myBooks", bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ]
})
export class CustomersModule { }

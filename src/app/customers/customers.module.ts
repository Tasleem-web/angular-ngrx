import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/books.effects';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EmptyComponent } from './empty/empty.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
    EmptyComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("myBooks", bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ]
})
export class CustomersModule { }

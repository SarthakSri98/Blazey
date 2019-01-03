import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopicComponent } from './topic/topic.component';

var route:Routes = [
  { path:'signup' ,component:SignupComponent },
  { path:'' ,component:LoginComponent },
  { path:'genre' ,component:GenreComponent},
  { path:'topic' , component:TopicComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GenreComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route), BrowserAnimationsModule,
    MatToolbarModule,MatInputModule,MatDialogModule,MatButtonModule,ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

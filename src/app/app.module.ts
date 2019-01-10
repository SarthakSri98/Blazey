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
import { MatSelectModule, MatOptionModule, MatSnackBarModule } from '@angular/material';
import { SubTopicComponent } from './sub-topic/sub-topic.component';

var route:Routes = [
  { path:'signup' ,component:SignupComponent },
  { path:'' ,component:LoginComponent },
  { path:'genre' ,component:GenreComponent},
  { path:'genre/topic/:id' , component:TopicComponent },
  { path:'genre/topic/:id/subtopic/:id1', component:SubTopicComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GenreComponent,
    TopicComponent,
    SubTopicComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route), BrowserAnimationsModule,
    MatToolbarModule,MatInputModule,MatDialogModule,MatButtonModule,MatSnackBarModule, ReactiveFormsModule,FormsModule,
    HttpClientModule,MatSelectModule,MatOptionModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

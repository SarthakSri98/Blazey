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
import { GaurdsService } from './auth/gaurds.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Gaurd2Service } from './auth/gaurd2.service';

var route:Routes = [
  { path:'signup' ,component:SignupComponent, canActivate:[Gaurd2Service] },
  { path:'' ,component:LoginComponent, canActivate: [Gaurd2Service]},
  { path:'genre' ,component:GenreComponent, canActivate:[ GaurdsService ]},
  { path:'genre/topic/:id' , component:TopicComponent, canActivate:[ GaurdsService ] },
  { path:'genre/topic/:id/subtopic/:id1', component:SubTopicComponent, canActivate:[ GaurdsService ] },
  { path:'**', component:PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GenreComponent,
    TopicComponent,
    SubTopicComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route), BrowserAnimationsModule,
    MatToolbarModule,MatInputModule,MatDialogModule,MatButtonModule,MatSnackBarModule, ReactiveFormsModule,FormsModule,
    HttpClientModule,MatSelectModule,MatOptionModule,HttpClientModule
  ],
  providers: [ GaurdsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

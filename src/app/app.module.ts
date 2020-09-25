import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentsComponent } from './documents/documents.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { UserService } from './services/UserService';


var myRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'features',component:FeaturesComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'userlogreg',component:UserLoginRegisterComponent},
  {path:'*',component:HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeaturesComponent,
    DocumentsComponent,
    UserLoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

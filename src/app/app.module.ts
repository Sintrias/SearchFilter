import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Router
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './router';

// dep Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

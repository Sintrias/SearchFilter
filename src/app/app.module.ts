import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Router
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './router';

// dep Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YTApiModule } from 'ngx-youtube';

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
    // Youtube Api
    YTApiModule.setConfig(
      {
        clientId: "1090991752868-0b1saff9i5tdtjqtrpahnme9004396cv.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
        scope: "https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

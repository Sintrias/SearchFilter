import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from "./pages/signup/signup.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Welcome to Search Filter' }
    },
    {
        path: 'signup',
        component: SignupComponent,
        data: { title: 'Search Filter - Sign Up' }
    }
]
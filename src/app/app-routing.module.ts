import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityListComponent } from './charity-list/charity-list.component';
import { CharityComponent } from './charity/charity.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'charities', component: CharityListComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityListComponent } from './charity-list/charity-list.component';
import { CharityComponent } from './charity/charity.component';
import { FinancialSupportComponent } from './financial-support/financial-support.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { ViewCharityComponent } from './view-charity/view-charity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'charities', component: CharityListComponent },
  { path: 'financial-support', component: FinancialSupportComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'view-charity/:charityName', component: ViewCharityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

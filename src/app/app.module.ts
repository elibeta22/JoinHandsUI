import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CharityComponent } from './charity/charity.component';
import { CharityListComponent } from './charity-list/charity-list.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    CharityComponent,
    CharityListComponent,
    ChatBoxComponent,
    ReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

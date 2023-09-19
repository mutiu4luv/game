import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './component/hompage/hompage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './pages/hero/hero.component';
import { TypewriterDirective } from './core/typewriter.directive';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';
import { FouthComponent } from './pages/fouth/fouth.component';
// import { SponsorComponent } from './pages/sponsor/sponsor.component';
// import { FooterComponent } from './component/footer/footer.component';
// import { SharedmoduleModule } from './sharedmodule/sharedmodule/sharedmodule.module';
import { FooterComponent } from './component/footer/footer.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    NavbarComponent,
    HeroComponent,
    TypewriterDirective,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FouthComponent,
    FooterComponent,
    SponsorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  // exports: [SharedmoduleModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

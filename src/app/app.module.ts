import { authInterceptorProviders } from './services/auth/AuthInterceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderLogoComponent } from './components/common/header-logo/header-logo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatchListComponent } from './components/matches/match-list/match-list.component';
import { PredictionListComponent } from './components/predictions/prediction-list/prediction-list.component';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { StandingsComponent } from './components/standings/standings/standings.component'
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoaderComponent } from './components/common/loader/loader.component';
import { DeleteProfileComponent } from './components/profile/delete-profile/delete-profile.component';
import { MatchItemComponent } from './components/matches/match-item/match-item.component';
import {MatIconModule} from '@angular/material/icon';
import { PredictionItemComponent } from './components/predictions/prediction-item/prediction-item.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HeaderLogoComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MatchListComponent,
    PredictionListComponent,
    UserProfileComponent,
    StandingsComponent,
    LoaderComponent,
    DeleteProfileComponent,
    MatchItemComponent,
    PredictionItemComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
    JwtModule
    ,FormsModule
  ],
  providers: [{
    provide: JWT_OPTIONS, useValue: JWT_OPTIONS
  }, JwtHelperService, authInterceptorProviders
],
  bootstrap: [AppComponent]
})
export class AppModule { }

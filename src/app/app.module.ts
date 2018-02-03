import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { RouterModule, Route } from "@angular/router";
import{ UserService} from './user.service'
import{ AuthguardGuard} from './authguard.guard'
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([{
     path:'',
     redirectTo:'home',
     pathMatch:'full' 
    },
  {
    path:'home',
    canActivate:[AuthguardGuard],
    component:HomeComponent
  },
{path:'games',
canActivate:[AuthguardGuard],
component:GamesComponent

},
{
  path:'login',
  component:LoginComponent
}
])
],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

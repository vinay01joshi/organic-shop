import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/core/components/home/home.component';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),    
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
    BsNavbarComponent,
    LoginComponent
  ],
  exports:[
    BsNavbarComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { UsersService } from './services/users.service';
import { authGuard } from './guard/auth.guard';
import { Parent1Component } from './parent1/parent1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    HooksChildComponent,
    UsersComponent,
    UsdInrPipe,
    Parent1Component,
    
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [UsersService,],
  bootstrap: [AppComponent]
})
export class AppModule {
  title!:string;
  add(){
    this.title = "this is video of local storage"
  }
}

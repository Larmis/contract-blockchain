import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { LoginsComponent } from './logins/logins.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ContractsListComponent } from './contracts-list/contracts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent,
    ContractsComponent,
    ContractsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

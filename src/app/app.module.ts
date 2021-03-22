import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrochesComponent } from './broches/broches.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BrochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    ModalModule.forRoot(),
    TooltipModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

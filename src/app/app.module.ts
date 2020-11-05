import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcmeProductsComponent } from './acme-products/acme-products.component';
import { MailOrderComponent } from './mail-order/mail-order.component';
import { FormsModule } from '@angular/forms';
import { AcmeAboutComponent } from './acme-about/acme-about.component';
import { AcmeStoreComponent } from './acme-store/acme-store.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcmeProductsComponent,
    MailOrderComponent,
    AcmeAboutComponent,
    AcmeStoreComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

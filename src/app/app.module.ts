import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcmeProductsComponent } from './acme-products/acme-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MailOrderComponent } from './mail-order/mail-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AcmeProductsComponent,
    CatalogComponent,
    MailOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

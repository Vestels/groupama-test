import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentCaseFeeComponent } from './payment-case-fee/payment-case-fee.component';
import { PaymentItemsComponent } from './payment-items/payment-items.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentHistoryComponent,
    PaymentCaseFeeComponent,
    PaymentItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

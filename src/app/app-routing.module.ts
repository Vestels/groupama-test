import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentCaseFeeComponent } from './payment-case-fee/payment-case-fee.component';
import { PaymentItemsComponent } from './payment-items/payment-items.component';


const routes: Routes = [
  { path: '', redirectTo: 'payments', pathMatch: 'full' },
  { path: 'payments', component: PaymentComponent,
    children: [
      { path: 'history', component: PaymentHistoryComponent },
      { path: 'case-fee', component: PaymentCaseFeeComponent },
      { path: 'items', component: PaymentItemsComponent },
    ]
   },
  { path: '**', redirectTo: 'payments', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

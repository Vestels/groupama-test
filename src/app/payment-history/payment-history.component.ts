import { Component } from '@angular/core';
import { PaymentModel } from './interfaces/payment';

@Component({
  selector: 'app-payment-history',
  standalone: false,
  
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.sass'
})
export class PaymentHistoryComponent {
[x: string]: any;

  constructor() {}

  receiptFile: File = new File(["Test File"], "receipt.pdf", { type: "application/pdf" });

  paymentHistories: PaymentModel[] = [
    {
        identifier: 'EPAYMT8JKJASKJDA9',
        method: 'Bankkártya',
        date: '2019. 06. 25.',
        amount: 5000,
        status: 'Folyamatban',
        receipt: this.receiptFile,
        details: false
    },
    {
        identifier: 'EPAYMT8JK',
        method: 'Átutalás',
        date: '2019. 06. 25.',
        amount: 12700,
        status: 'Beérkezett',
        details: false
    },
    {
        identifier: 'EPAYMT8JKJASKJDA9F34343DFDHH64532FAGDHH',
        method: 'Bankkártya',
        date: '2019. 06. 25.',
        amount: 7789,
        status: 'Sikertelen',
        receipt: this.receiptFile,
        details: false
    },
    {
        identifier: 'EPAA33DASKJASKJDA9',
        method: 'Bankkártya',
        date: '2019. 06. 25.',
        amount: 16735,
        status: 'Beérkezett',
        receipt: this.receiptFile,
        details: false
    },
  ]

  getTruncatedText(text: String, limit: number = 10): String {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  }

  getPaymentStatus(status: String): String {
    if (status.toUpperCase() === 'FOLYAMATBAN') {
      return 'in-progress'
    } else if (status.toUpperCase() === 'SIKERTELEN') {
      return 'failed'
    } else {
      return 'success'
    }
  }
}
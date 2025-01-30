export interface PaymentModel {
    identifier: String;
    method: String;
    date: String;
    amount: Number;
    status: String;
    receipt?: File | null;
    details: boolean;
}
export interface PaymentModel {
    identifier: String;
    method: String;
    date: String;
    amount: number;
    status: String;
    receipt?: File | null;
    details: boolean;
}
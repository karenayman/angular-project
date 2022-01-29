import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  paymentMethod : PaymentType[]= [
 {id:1 , name:"Visa"},
{id:2 , name:"MasterCard"},
{id:3 , name:"Americam Express"},
{id:4 , name:"PayPal"},
{id:5 , name:"Cash"}

  ]

  constructor() { }
  getAllPaymentMethod(): PaymentType[] {
    return this.paymentMethod.splice(0);
  }
}

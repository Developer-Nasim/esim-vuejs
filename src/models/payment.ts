export class Payment{
    constructor(public contact:string,public Billing:string,public TypePayment:PaymentMethod,public CreditCard:CreditCard,){}
}
export enum PaymentMethod{
    CreditCard,
    ApplePay,
    Bit,
    PayPal
}
export class CreditCard{
    constructor(public Cardnumber:string,public NameOnCard:NameCard,public SecurityCode:number,public expirationDate: string,){}
}
export enum NameCard{
    Viza,
    MasterCard,
    AmericanExpress
}
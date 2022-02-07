interface PaymentMethod {
    method(store: string): void
}
class Cash implements PaymentMethod {
    method(store: string): void {
        console.log("I pay cash.");
    }

}
class CreditCard implements PaymentMethod {
    method(store: string): void {
        console.log("I pay with CreditCard.");
    }

}


class Man {
    Payment: PaymentMethod | undefined;
    setPayment(_Payment: PaymentMethod) {
        this.Payment = _Payment;
    }
    constructor() { }
    Shoping(storSelected: string) {
        console.log(
            `Man: I want to Buy in ${storSelected}`
        );
        if (!this.Payment) {
            throw new Error("You must call the Payment before using this function");
        }
        this.Payment.method(storSelected)
        console.log(`Man: I Buy in shoping`);
    }
}

export function BuyingSetter() {
    let man = new Man();
    man.setPayment(new CreditCard())
    man.Shoping('Refah Chain Store');
}
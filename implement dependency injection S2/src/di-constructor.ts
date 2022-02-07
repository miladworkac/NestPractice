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
    constructor(private Payment: PaymentMethod) { }
    Shoping(storSelected: string) {
        console.log(
            `Man: I want to Buy in ${storSelected}`
        );
        this.Payment.method(storSelected)
        console.log(`Man: I Buy in shoping`);
    }
}

export function Buying() {
    let man = new Man(new CreditCard());
    man.Shoping('Refah Chain Store');
}
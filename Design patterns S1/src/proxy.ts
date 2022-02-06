class Access {
    role: string;
    CheckAccess() {
        console.log("CheckAccess");
    }
}

class ProxyCheckAccess {
    checkAccess: Access;
    constructor(_checkAccess: Access) {
        this.checkAccess = _checkAccess;
    }
    ProxyCheckAccess() {
        if (this.checkAccess.role == "Admin") {
            this.checkAccess.CheckAccess()
        } else {
            console.log(`You're not authorized to run this function`);
        }
    }
}
export function proxy() {
    let c = new Access();
    c.role = "user";
    let p = new ProxyCheckAccess(c);

    p.ProxyCheckAccess();

    let c2 = new Access();
    c2.role = "Admin";
    let p2 = new ProxyCheckAccess(c2);

    p2.ProxyCheckAccess();
}
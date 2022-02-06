interface Logistic {
    Access(): LogisticAccess
}

class Admin implements Logistic {
    Access() {
        return new AdminAccess()
    }
}

class Member implements Logistic {
    Access() {
        return new MemberAccess()
    }
}
interface LogisticAccess {
    access(): void
}

class AdminAccess implements LogisticAccess {
    access() {
        console.log("Admin access")
    }
}

class MemberAccess implements LogisticAccess {
    access() {
        console.log("Member access")
    }

}


export function factory() {
    let user1 = new Admin()
    const s = user1.Access()
    s.access()

    let user2 = new Member()
    const s2 = user2.Access()
    s2.access()
}
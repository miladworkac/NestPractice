interface news {
    subscrib(user: observer): void
    unsubscrib(user: observer): void
    newevent(): void
}
class car implements news {
    subscribs: observer[] = []
    subscrib(user: observer): void {
        if (this.subscribs.indexOf(user) == -1) {
            this.subscribs.push(user)
            console.log("Subject: You are successfuly subscribed to Magazine");
        } else {
            console.log("Subject: You already subscribed!");
        }
    }
    unsubscrib(user: observer): void {
        const userIndex = this.subscribs.indexOf(user)
        if (userIndex >= 0) {
            this.subscribs.splice(userIndex, 1)
        }
    }
    newevent(): void {
        console.log("Subject: new publish");
        this.subscribs.forEach(element => {
            element.Notices()
        });
    }
}
interface observer {
    Notices(): void
}

class User implements observer {
    Notices() {
        console.log("Observer: I receive new publish");
    }

}

export function observer() {
    const A = new car()
    let o1 = new User();
    let o2 = new User();
    A.subscrib(o1);
    A.subscrib(o2);
    A.subscrib(o1);
    A.newevent();
    A.unsubscrib(o1);
    A.newevent();
}
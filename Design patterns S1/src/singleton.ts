class Area {
    private static Radius: Area;

    private constructor() { }

    public static getRadius() {
        if (!Area.Radius) {
            Area.Radius = new Area();
        }
        return Area.Radius;
    }
    circle(radius: number) {
        return radius * radius
    }
}

export function clientCode() {
    const s1 = Area.getRadius().circle(2);
    const s2 = Area.getRadius().circle(3);

    // if (s1 === s2) {
    //     console.log('Area works, both variables contain the same Radius.');
    // } else {
    //     console.log('Area failed, variables contain different Radiuss.');
    // }
    console.log(s1)
    console.log(s2)
}
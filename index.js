class Polygon {

    constructor([integers]) {
        this.sides = [integers]
    }

    get countSides() {
        return this.sides.length()
    }
}
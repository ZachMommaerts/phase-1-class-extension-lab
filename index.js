class Polygon {

    constructor(integers) {
        this.sides = integers
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1]) {
            return true
        } else {
            return false
        }
    }

}

class Square extends Polygon {

    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0]**2
    }
}
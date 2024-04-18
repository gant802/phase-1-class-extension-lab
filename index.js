// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((accumulator, element) => {
            return accumulator + element
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a
    }
}

class Square extends Polygon {
    get isValid() {
        const [a, b, c, d] = this.sides;
        return a + b === c + d && a + c === b + d && a + d === c + b && c + b === a + d
    }
    get area() {
        const [a, b, c, d] = this.sides;
        return a * b
    }
}
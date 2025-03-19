/*class rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth
    }

    calculateArea(){
        return this.length*this.breadth
     }

     calculatePerimeter(){
        return 2*(this.length+this.breadth)
     }

}

const rectangle4x5 = new rectangle(4,5);
const rectangle10x20 = new rectangle(10,20);

console.log(`Area : ${rectangle4x5.calculateArea()}`)
console.log(`Perimeter : ${rectangle4x5.calculatePerimeter()}`);
console.log(`Area : ${rectangle10x20.calculateArea()}`)
console.log(`Perimeter : ${rectangle10x20.calculatePerimeter()}`);

class square{
    constructor(side){
        this.side = side;
    }

    calculateArea(){
        return this.side*this.side;
     }

     calculatePerimeter(){
        return 4*this.side;
     }
}

const square4 = new square(4);
const square10 = new square(10);

console.log(`Area : ${square4.calculateArea()}`)
console.log(`Perimeter : ${square4.calculatePerimeter()}`);
console.log(`Area : ${square10.calculateArea()}`)
console.log(`Perimeter : ${square10.calculatePerimeter()}`);

*/
const PI_VALUE= 3.14
const { setMaxIdleHTTPParsers } = require("http")

class Shape{
    constructor(){
       if(this.constructor===Shape){
        throw new Error("can't be instantiated")
       }
    }

    calculateArea(){
        throw new Error("calculateArea() should be implemented")
     }

     calculatePerimeter(){
        throw new Error("calculatePerimeter() should be implemented")
     }

}

class Rectangle extends Shape{
       constructor(length,breadth)
       {
        super()
        this.length=length
        this.breadth=breadth
       }

       calculateArea(){
        return this.length*this.breadth
       }
        calculatePerimeter(){
            return 2*(this.length+this.breadth)
        }
}

class Square extends Shape{
    constructor(side)
    {
        super()
        this.side=side;
    }
    calculateArea(){
        return this.side*this.side;
     }

     calculatePerimeter(){
        return 4*this.side;
     }
    }
class Circle extends Shape{
    constructor(radius)
    {
        super()
        this.radius=radius;
    }
    calculateArea(){
        return PI_VALUE*this.radius*this.radius
    }
    calculatePerimeter(){
        return 2*PI_VALUE*this.radius
    }
}

const rectangle = new Rectangle(4,5)
const square = new Square(6)
const circle = new Circle(9)


console.log(`Perimeter : ${rectangle.calculatePerimeter()}`);
console.log(`Area : ${rectangle.calculateArea()}`);
console.log(`Perimeter : ${square.calculatePerimeter()}`);
console.log(`Area : ${square.calculatePerimeter()}`);
console.log(`Perimeter : ${circle.calculatePerimeter()}`);
console.log(`Area : ${circle.calculatePerimeter()}`);

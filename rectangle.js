class rectangle{
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
function Rectangle(length,breadth){
  let lenPrivate = length;
  let breadthPrivate = breadth;

  return{
    getLength : () => lenPrivate,
    getBreadth : () => breadthPrivate,
    setLength : (length)=>lenPrivate = length,
    setBreadth:(Breadth)=> breadthPrivate = breadth,
    calculateArea : ()=>lenPrivate*breadthPrivate,
    calculatePerimeter:()=>2*(lenPrivate+breadthPrivate)
  }
}

const rectangle = new Rectangle(10,5)

console.log(`Length: ${rectangle.getLength()}`)
console.log(`Breadth: ${rectangle.getBreadth()}`)
console.log(`Area: ${rectangle.calculateArea()}`)
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`)

rectangle.setLength(8)
rectangle.setBreadth(2)

console.log(`Length: ${rectangle.getLength()}`)
console.log(`Breadth: ${rectangle.getBreadth()}`)
console.log(`Area: ${rectangle.calculateArea()}`)
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`)





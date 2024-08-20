import { log } from "console";

abstract class Shape{
    constructor(){
        log('shape start')
    }
    abstract draw(): void
}

class Circle extends Shape{
    draw(): void {
        console.log('Draw Circle')
    }
}


const circle = new Circle();
circle.draw()
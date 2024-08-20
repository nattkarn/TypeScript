import { log } from "console";
import { version } from "os";

class Point{
    // Don't forget init default values
    x: number = 0
    y:number = 0
    readonly version:string = '0.0.1'

    //default constructor
    constructor(a:number, b?:number){
        log('Default constructor is Created')
        this.x = a
        
        

    }

    
}


const point = new Point(10,20);

// point.x = 10
point.y = 20
log(`${point.x} -Hello- ${point.y}`)


class OverLoad{
    
   
    // Constructor overloads
    constructor(x: number, y: string);
    constructor(y: string);
    constructor(x: any , y?: any) {
      // Code logic here
    }
}
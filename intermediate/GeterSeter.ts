import { log } from "console";

class Point{
    private _x: number = 0;
    private _y: number = 0;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    

    
}

class Person{
    private _name: string = "";
    private _age: number = 0;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }




    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(name:string, age?:number){
        this._name = name;
        this._age = age ?? 0; // Default to 0 if age is not provided
        
    }

    sayHi(){
        log(`Hi, I'm ${this.name} and ${this.age} year old`)
    }

}


const point = new Point()

point.x = 10;

log(point.x);

const person = new Person("ARM");

person.sayHi()


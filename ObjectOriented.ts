class Human {
    name: string = ''
    lastname: string = ''
    age: number = 0

    sayHello(){
        return "Hello ! I'm "+ this.name + " " + this.lastname + " and " + this.age + " years old."
    }
}

const user1: any = new Human()
user1.name = 'nattkarn'
user1.lastname = 'prajansri'
user1.age = 28
console.log(user1.sayHello())

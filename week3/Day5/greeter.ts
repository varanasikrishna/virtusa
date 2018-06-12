class Student {
    fullName: string;
    constructor(public firstName: string,public middleName,public lastName: string){
        this.fullName=firstName + " " + middleName + " " + lastName;
    }
}
interface Person{
    firstName: string;
    middleName: String;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " +person.middleName + " " + person.lastName;
}
let user=new Student("Jane", "M.", "User");
document.body.innerHTML=greeter(user);
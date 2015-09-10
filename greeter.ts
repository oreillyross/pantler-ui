class Student {
    fullname: string;
    constructor(public first, public middle, public last) {
        this.fullname = first + " " + middle + " " + last;   
    }
}




function greeter(person: Student) {
    return "hello " + person.fullname; 
}

let user = new Student("jane", "roo", "doe");

document.body.innerHTML = greeter(user);
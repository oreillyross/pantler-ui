var Student = (function () {
    function Student(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
        this.fullname = first + " " + middle + " " + last;
    }
    return Student;
})();
function greeter(person) {
    return "hello " + person.fullname;
}
var user = new Student("jane", "roo", "doe");
document.body.innerHTML = greeter(user);

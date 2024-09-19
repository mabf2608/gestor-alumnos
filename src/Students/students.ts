export class Student{
    private static n : number = 1;
    name: string;
    surname: string;
    age: number;
    id: number;

    constructor(name: string, surname: string, age:number) {
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.id=Student.n;
        Student.n++;
    }

    toString(): string{
        return ('Alumno: '+this.name+' '+this.surname+' Edad: '+this.age+' ID: '+this.id);
    }

}
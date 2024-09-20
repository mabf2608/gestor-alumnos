import { Subject } from "../Subjects/subjects";

export class Student implements studentInterface{
    private static n : number = 1;
    name: string;
    surname: string;
    age: number;
    id: number;

    studentSubjects: Subject[] = [];

    constructor(name: string, surname: string, age:number) {
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.id=Student.n;
        Student.n++;
    }

    public studentAddSubject(subject : Subject) {
        this.studentSubjects.push(subject)
    }

    get getStudentName () : string{
        return this.name;
    }

    get getStudentSurname () : string{
        return this.surname;
    }

    get getStudentAge () : number{
        return this.age;
    }

    get getStudentID () : number {
        return this.id;
    }

    public getStudentSubjects (){
        this.studentSubjects.forEach((subject) => {
            console.log(subject.getSubjectName)
        });
    }

    set setStudentName (aux : string){
        if (aux.length >0){
            this.name=aux;
        }else{
            console.error("El nombre del alumno no puede estar vacío.")
        }
    }

    set setStudentSurname (aux : string){
        if (aux.length > 0){
            this.surname=aux
        }else{
            console.error("El apellido del alumno no puede estar vacío")
        }
    }

    set setStudentAge (aux : number){
        this.age=aux;
    }

    toString() : string{
        return ('Alumno: '+this.name+' '+this.surname+' Edad: '+this.age+' ID: '+this.id);
    }

}
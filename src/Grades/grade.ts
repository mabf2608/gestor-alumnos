import {Subject} from "../Subjects/subjects";
import { Student } from "../Students/students";

export class Grade implements gradesInterface{
    grade: number = 0;
    idStudent: number;
    idSubject: number;

    constructor(idStudent:number,idSubject:number,grade:number){
        this.idStudent=idStudent;
        this.idSubject=idSubject;
        this.grade=grade;
    }

    get getGrade():number{
        return this.grade;
    }

    set setGrade(grade:number){
        this.grade=grade;
    }

    get getStudentID():number{
        return this.idStudent;
    }

    get getSubjectID():number{
        return this.idSubject;
    }

    toString():string{
        return (`El alumno con ID ${this.idStudent} tiene un ${this.grade} en la asignatura con ID ${this.getSubjectID} `)
    }
}
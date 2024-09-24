interface gradesInterface{
    grade : number;
    idStudent: number;
    idSubject: number;

    get getGrade () : number;
    get getStudentID () : number;
    get getSubjectID () : number;

    set setGrade(grade:number) ;
}
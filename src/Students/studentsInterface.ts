interface studentInterface{
    name : string;
    surname : string;
    age : number;
    id : number;
    studentSubjects : object[];

    studentAddSubject(aux:object):void;

    get getStudentName () :string;
    get getStudentSurname () : string;
    get getStudentAge () : number;
    get getStudentID () : number;

    set setStudentName(aux : string);
    set setStudentSurname(aux : string);
    set setStudentAge(aux : number);

    toString() : string;
}
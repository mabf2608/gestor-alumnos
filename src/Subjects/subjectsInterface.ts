interface subjectInterface {
    name : string;
    id : number;

    get getSubjectName () : string;
    get getSubjectID () : number;

    set setSubjectName (aux : string) ;

    toString() : string;
}
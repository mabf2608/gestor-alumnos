export class Subject implements subjectInterface{
    private static n : number =1;
    name: string;
    id: number;

    constructor(name: string){
            this.name=name;
            this.id=Subject.n;
            Subject.n++;
    }
    get getSubjectName () : string{
        return this.name;
    }
    get getSubjectID() : number{
        return this.id;
    }

    set setSubjectName (aux:string){
        if(aux.length>0){
            this.name=aux;
        }else{
            console.error('El nombre de la asignatura no puede estar vacío.')
        }
    }

    toString(): string{
        return ('Nombre de la asignatura: '+this.name+' ID: '+this.id)
    }
}
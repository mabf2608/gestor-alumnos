export class Subject{
    private static n : number =1;
    name: string;
    id: number;

    constructor(name: string){
        this.name=name;
        this.id=Subject.n;
        Subject.n++;
    }

    toString(): string{
        return ('Nombre de la asignatura: '+this.name)
    }
}
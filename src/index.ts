import * as readline from 'readline-sync';
import {Student} from './Students/students';
import {Subject} from './Subjects/subjects';

const students : Student[] = [
    new Student('Miguel','Bonilla', 22),
    new Student('Jorge', 'Bech', 19)
]

const subjects : Subject[] = [
    new Subject('Lengua'),
    new Subject('Matematicas')
]

function main(){
    

    console.log("=== Gestor de Alumnos y sus respectivas notas ===")

    const options = ['Crear alumno',
                    'Listar alumnos',
                    'Asignar Materia a un alumno',
                    'Listar materias de un alumno',
                    'Crear una materia', 
                    'Listar materias',
                    'Asignar nota de una materia a un alumno',
                    'Listar alumnos con nota']

    const index = readline.keyInSelect(options, 'Seleccciona una opción: ')

    if(index === -1) {
        console.log('Operación cancelada.');
        return;
    }
    
        switch (index){
            case 0:
                let name = readline.question('Ingrese el nombre del alumno: ')
                let surname = readline.question('Ingrese el apellido del alumno: ')
                let age = readline.questionInt('Ingrese la edad del alumno: ')
                students.push(new Student(name, surname, age))
                break;
            case 1:
                students.forEach((student) => {
                    console.log(student.toString())
                });
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                let subjectName = readline.question('Ingrese el nombre de la asignatura: ')
                subjects.push(new Subject(subjectName))
                break;
            case 5:
                subjects.forEach((subject) => {
                    console.log(subject.toString())
                });
                break;
        }

        const continuar = readline.keyInYN('¿Desea realizar otra operación? ');
        if (continuar) {
          main(); // Llamada recursiva para reiniciar el proceso
        } else {
          console.log('Gracias por usar nuestro gestor.');
        }
    
}
main();
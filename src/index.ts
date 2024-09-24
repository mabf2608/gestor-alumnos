import * as readline from 'readline-sync';
import {Student} from './Students/students';
import {Subject} from './Subjects/subjects';
import {Grade} from './Grades/grade';

const students : Student[] = [
    new Student('Miguel','Bonilla', 22),
    new Student('Jorge', 'Bech', 19)
]

const subjects : Subject[] = [
    new Subject('Lengua'),
    new Subject('Matematicas')
]

const grades : Grade[] = [
    new Grade(1,1,8),
    new Grade(2,1,5)
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
                var studentName = readline.question('\nIngrese el nombre del alumno: ')
                var studentSurname = readline.question('\nIngrese el apellido del alumno: ')
                if(studentName.length <= 0 || studentSurname.length <= 0){
                    console.log('El nombre del alumno no puede contener campos vacíos.')
                }else{
                    var age = readline.questionInt('\nIngrese la edad del alumno: ')
                students.push(new Student(studentName, studentSurname, age))
                }
                break;
            case 1:
                students.forEach((student) => {
                    console.log(student.toString())
                });
                break;
            case 2:
                var subjectIDToAdd = readline.questionInt('Ingrese el ID de la asignatura a añadir: ');

                var studentID = readline.questionInt('Ingresa la ID del alumno al que quieres añadirle la asignatura: ')

                students.forEach((student) =>{
                    if(student.getStudentID === studentID){
                        subjects.forEach((subject) =>{
                            if(subject.getSubjectID === subjectIDToAdd){
                                student.studentAddSubject(subject)
                            }
                        })
                    }
                });
                break;
            case 3:
                var studentID = readline.questionInt('Ingresa la ID del alumno del que quieres saber sus asignaturas: ')
                
                //Intentar añadir el nombre cuando se dicen las materias asignadas a un alumno
                console.log('Las asignaturas del alumno son las siguientes: \n')
                students.forEach((student) => {
                    if(student.getStudentID===studentID){
                        student.getStudentSubjects()
                    }
                });
                break;
            case 4:
                var subjectName = readline.question('Ingrese el nombre de la asignatura: ')
                if(subjectName.length <= 0 ){
                    console.log('ERROR: El nombre de la asignatura no puede contener campos vacíos.')
                }else{
                    subjects.push(new Subject(subjectName))
                }
                break;
            case 5:
                subjects.forEach((subject) => {
                    console.log(subject.toString())
                });
                break;
            case 6:
                var studentID = readline.questionInt('Ingresa el ID del alumno al que le quieres añadir nota: ')
                var subjectID = readline.questionInt('Ingresa el ID de la materia :')
                var grade = readline.questionFloat('Ingresa la nota del alumno en la materia indicada: ')

                if(grade<0||grade>10){
                    console.log('ERROR: La nota tiene que ir del 0 al 10')
                }else{
                    grades.push(new Grade(studentID, subjectID, grade))
                }

                break;
            case 7:
                var aux1 :string;
                var aux2 : string;
                
                grades.forEach((g) =>{
                    console.log(g.toString());
                });
                break;
            default:
                break;
        }

        const continuar = readline.keyInYN('\n¿Desea realizar otra operación? ');
        if (continuar) {
          main(); // Llamada recursiva para reiniciar el proceso
        } else {
          console.log('\nGracias por usar nuestro gestor.');
        }
    
}
main();
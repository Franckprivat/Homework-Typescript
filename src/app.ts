// Allias
// type User = { firstname: string, lastname: string}
type DateString = string 
type Id = string | number
type Username = keyof User


const user = {
    firstname: 'Privat',
    lastname: 'Kiemde',
    age: 32
}

type User = typeof user


// Generics
type identity<ArgType> = (arg: ArgType) => ArgType

function consoleSize<Type extends{length: number}>(arg: Type): Type {
    console.log(arg.length);
    return arg
}

const abb = consoleSize(["3", 2])



function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const aa = identity<number>(3);
const aaa = identity(3);


const ab = ["aze", "bze", 3];
const abc: Array<string | number> = ["aze", "bze", 3];


const a = "firstname"
const n: number = 3
const b = true 
// Littérals
const d: null = null 
const arr: any[] = ['aze', 'aze', 'aze']
// const user: {firstname: string, lastname: string, age?: number} = {firstname: "Franck", lastname: "Kiemde", age:23}
const User = {firstname: "Franck", lastname: "Kiemde"}
const date: Date = new Date();
const Cb: Function = (e: MouseEvent): void => {

// }
// const cb: (e:MouseEvent)=> void = (e: MouseEvent): number => {
//     return 3
// }

const compteur = document.querySelector('#compteur') as HTMLButtonElement
// // On peut forcer le type d'une variable grace à "as"
// // On peut l'écrire ainsi
// const Compteur = <HTMLInputElement>document.querySelector('#compteur')


// function printID(id:number): void {
//     console.log(id.toString());
// }

// // Union-type
// function printId(id:number |string): void {
//     console.log(id.toString());
// }
const compteur = document.querySelector<HTMLButtonElement>('#compteur')!
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if(span) {
        // Type narrowing
    span.innerText = i.toString()
}
}

// // // Type Narrowing
// // function printId(id: string |number) {
// //     if(typeof id =="number") {
// //         console.log((id * 3).toString());
// //     }else {
// //         console.log(id.toUpperCase());
        
// //     }
// // }

// // function isDate (a: any): a is Date {
// //     return a instanceof Date
// // }
// // function example ( a: Date |HTMLInputElement) {
// //     if (isDate(a)) {
// //         a
// //     }
// // }

compteur?.addEventListener('click', increment)
// }




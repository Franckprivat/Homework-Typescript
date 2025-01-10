"use strict";
const a = "firstname";
const n = 3;
const b = true;
// Littérals
const d = null;
const arr = ['aze', 'aze', 'aze'];
const user = { firstname: "Franck", lastname: "Kiemde", age: 23 };
const User = { firstname: "Franck", lastname: "Kiemde" };
const date = new Date();
const Cb = (e) => {
    // }
    // const cb: (e:MouseEvent)=> void = (e: MouseEvent): number => {
    //     return 3
    // }
    // const compteur = document.querySelector('#compteur') as HTMLButtonElement
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
    const compteur = document.querySelector('#compteur');
    let i = 0;
    const increment = (e) => {
        e.preventDefault();
        i++;
        const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
        if (span) {
            // Type narrowing
            span.innerText = i.toString();
        }
    };
    // // Type Narrowing
    // function printId(id: string |number) {
    //     if(typeof id =="number") {
    //         console.log((id * 3).toString());
    //     }else {
    //         console.log(id.toUpperCase());
    //     }
    // }
    // function isDate (a: any): a is Date {
    //     return a instanceof Date
    // }
    // function example ( a: Date |HTMLInputElement) {
    //     if (isDate(a)) {
    //         a
    //     }
    // }
    compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
};

"use strict";
// const a: string = "Hello World"
// const n: number = 3
// const b = true 
// // Littérals
// const d: null = null 
// const arr: any[] = ['aze', 'aze', 3]
// const user: {firstname: string, lastname: string, age?: number} = {firstname: "Franck", lastname: "Kiemde", age:23}
// const User = {firstname: "Franck", lastname: "Kiemde"}
// const date: Date = new Date();
// const Cb: Function = (e: MouseEvent): void => {
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
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);

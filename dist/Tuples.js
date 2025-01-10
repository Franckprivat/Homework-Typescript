// // #Tuples
// const e  = {isPrivate: true, isPublic: false} as const;
// const e  = [1, 2, 3] as const;
// const e: ListItem = ['tomate', 2]
// const f: ListItem = ['banane', 3]
// type ListItem = [string, number]
// function merge<T extends unknown[], U extends unknown[]>(e: T, f: U) {
//     return [...e, ...f] as const 
// }
// const g = merge(e, f)
// type ListItem = [string, number]
// const e: ListItem = ['tomate', 2]
// const f: ListItem = ['banane', 3]
// const i = [] as string[] 
// function merge<T extends unknown[], U extends unknown[]>(e: T, f: U): [...T, ...U] {
//     return [...e, ...f]
// }
// const g = merge(e, f)
// const h = merge(e, [1, 2, 3])
// console.log(e[0].toUpperCase());

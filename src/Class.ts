// function reverse<T>(arr: readonly T[]): readonly T[] {
//     return [...arr].reverse();
// }

// class A {
//     constructor(
//         public a: number
//     ){

//     }

// }

// const aInstance = new A(3);
// // aInstance.log()
// console.log(aInstance.a);

// class B extends A {
    
//     log() {
//         console.log(this.b);
//     }
    
// }

// const bInstance = new B();
// console.log(bInstance);



// class C {
//     private c = 9
// }

// const cInstance = new C();
// console.log(cInstance['c']);


class Collection<T> {
    constructor (private items: T[]) {

    }

    add (item: T): this {
        this.items.push(item)
        return this
    }

    first (): T | null {
        return this.items[0] || null 
    }
}

class Subscriber {
    on (this: HTMLInputElement, name: string, cb: Function) {

    } 
}


const a = new Collection([1, "aze", 2])
const c = a.add(3)
const b = a.first()



abstract class Geometry {
    x = 0 
    y = 0
    abstract surface (): number
}

class Triangle extends Geometry {
    x = 2
    y = 2

    surface () {
        return 3 
    }
}
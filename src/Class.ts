function reverse<T>(arr: readonly T[]): readonly T[] {
    return [...arr].reverse();
}

class A {
    #a = 3 
    protected b = 5



    log() {
        console.log(this.#a);
        
    }

}

const aInstance = new A();
aInstance.log()
console.log(aInstance);



class B extends A {
    
    log() {
        console.log(this.b);
    }
    
}

const bInstance = new B();
console.log(bInstance);



class C {
    private c = 9
}

const cInstance = new C();
console.log(cInstance['c']);



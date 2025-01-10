function reverse<T>(arr: readonly T[]): readonly T[] {
    return [...arr].reverse();
}

class A {
    private a = 3 
    protected b = 5



    log() {
        console.log(this.a);
        
    }

}

const aInstance = new A();
aInstance.log()


class B extends A {

    log() {
        console.log(this.b);
    }
    
}

const bInstance = new B();
bInstance.log()


class C {
    public c = 9
}

const cInstance = new C();
console.log(cInstance.c);



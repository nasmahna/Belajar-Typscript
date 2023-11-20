describe('Interface', function(){

    interface HasName {
        name: string;
    }

    interface CanSayHello{
        sayHello(name: string): void;
    }

    class Orang implements HasName, CanSayHello{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${name}`);
        }
    }

    it('should support implement of interface ', function(){
        const orang = new Orang("Ami");
        orang.sayHello("Tika");
    });
});
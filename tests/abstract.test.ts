describe('Abstract', function(){
    abstract class Pembeli{
        readonly id: number;
        abstract nama: string;

        constructor(id: number){
            this.id = id;
        }
        
        hello(){
            console.info(`Hello`);
        }

        abstract sayHello(nama: string): void;
    }

    class RegulerPembeli extends Pembeli{
        nama: string;

        constructor(id: number, nama: string){
            super(id);
            this.nama = nama;
        }

        sayHello(nama: string): void{
            console.info(`Hello ${nama}, my name is ${this.nama}`);
        }
    }
    it("should support abstract class", function(){
        const pemberli = new RegulerPembeli(1, "Ami");
        pemberli.sayHello("Sani");
    });
});
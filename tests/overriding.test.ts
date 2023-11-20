describe('Overriding', function(){
    class Karyawan {
        nama: string;

        constructor(nama: string){
            this.nama = nama;
        }

        sayHello(nama: string): void{
            console.info(`Hello ${nama}, my name is ${this.nama}`);
        }
    }

    class Menejer extends Karyawan{
        sayHello(nama: string): void {
            super.sayHello(nama);
            console.info("And I am your manager.")
        }
    }

    it('should support overriding', function(){
        const karyawan = new Karyawan("Ami");
        karyawan.sayHello("Tina");

        const menejer = new Menejer("Ami");
        menejer.sayHello("Tina");
    });
});
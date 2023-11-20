describe('Polimorfisme', function(){

    class Karyawan{
        constructor(public nama: string){

        }
    }

    class Manager extends Karyawan{

    }

    class VP extends Manager{

    }

    function sayHello(karyawan: Karyawan): void{
        if(karyawan instanceof VP){
            const vp = karyawan as VP;
            console.info(`Hello VP ${vp.nama}`);
        } else if (karyawan instanceof  Manager){
            const manager = karyawan as Manager;
            console.info(` Hello Manager ${manager.nama}`);
        } else {
            console.info(`Hello Karyawan ${karyawan.nama}`);
        }
    }

    function sayHelloWrong(karyawan: Karyawan): void{
        if(karyawan instanceof Manager){
            const manager = karyawan as Manager;
            console.info(`Hello Manager ${manager.nama}`);
        } else if (karyawan instanceof  VP){
            const vp = karyawan as VP;
            console.info(` Hello VP ${vp.nama}`);
        } else {
            console.info(`Hello karyawan ${karyawan.nama}`);
        }
    }

        let karyawan: Karyawan = new Karyawan('Ami');
        console.info(karyawan);

        karyawan = new Manager("Sinta");
        console.info(karyawan);

        karyawan = new VP("Putri");
        console.info(karyawan);

    it('should support polimorfime', function(){
        sayHello(new Karyawan('Ami'));
        sayHello(new Manager("Sinta"));
        sayHello(new VP("Putri"));
    });

    it('should support polimorfime salah', function(){
       sayHelloWrong(new Karyawan('Ami'));
       sayHelloWrong(new Manager("Sinta"));
       sayHelloWrong(new VP("Putri"));
    });
});
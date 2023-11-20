describe('Inheritance', function(){

    class Karyawan{
        nama: string;

        constructor(nama: string){
            this.nama = nama;
        }
    }

    class Menejer extends Karyawan{

    }

    class Direktur extends Karyawan{

    }

    it('should suppoer inheritance', function(){
        const karyawan = new Karyawan("Toni");
        console.info(karyawan.nama);

        const menejer = new Menejer("Doni");
        console.info(menejer.nama);

        const direktur = new Direktur("Tatang");
        console.info(direktur.nama)
    })
})
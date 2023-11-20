describe('Super Constructor', function(){

    class Orang {
        nama: string;

        constructor(nama: string){
            this.nama = nama;
        }
    }

    class Karyawan extends Orang{
        departemen: string;

        constructor(nama: string, departemen: string){
            super(nama);
            this.departemen = departemen;
        }
    }

    it('should support constructor', function(){
        const karyawawn = new Karyawan("Ami", "Tech");
        console.info(karyawawn.nama);
        console.info(karyawawn.departemen);
    });
});
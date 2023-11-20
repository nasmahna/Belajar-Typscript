describe('Param Properties', function(){
    class Orang {
        constructor(public nama: string){
        }
    }
    it('should support param prop', function(){
        const orang = new Orang('Ami');
        console.info(orang.nama);

        orang.nama = "Dinda";
        console.info(orang.nama);
    })
})
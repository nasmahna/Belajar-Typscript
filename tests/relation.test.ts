describe('Relation', function(){

    class Orang {
        constructor(public name: string){

        }
    }

    class Pembeli {
        constructor(public name: string){

        }
    }

    it('should support ', function(){
        const orang: Orang = new Pembeli("Ami");
        console.info(orang.name);
    });

});
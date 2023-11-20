describe('Getter dan Setter', function(){

    class Kategori{
        _name? :string;

        get name(): string{
            if(this._name){
                return this._name;
            } else {
                return "empty";
            }
        }

        set name(value: string){
            if(value !== ""){
                this._name = value;
            }
        }
    }
    it('should suppoert in class', function(){
        const kategori = new Kategori();
        console.info(kategori.name);
    })
})
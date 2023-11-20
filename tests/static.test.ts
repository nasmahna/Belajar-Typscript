describe('Static', function(){

    class Configuration{
        static NAME: string = "Belajar Typescript OOP";
        static VER: number = 1.0;
        static AUT: string = "Nasmah";
    }

    class MathUtil{
        static sum(...values: number[]): number{
            let total  = 0;
            for (const value of values){
                total += value;
            }
        return total;
        }
    }
    
    it("should support static method", function(){
        console.info(MathUtil.sum(2,3,4,5,6));
    });

    it("should support static prop", function(){
        console.info(Configuration.NAME);
        console.info(Configuration.VER);
        console.info(Configuration.AUT);
    });
});
describe('Error handling', function(){

    class ValError extends Error{
        constructor(public message: string){
            super(message);
        }
    }

    function doubleIt(value: number): number{
        if(value < 0){
            throw new ValError('Value cannot be less than 0');
        }
        return value * 2;
    }

    it('should support', function(){
        try{
            const result = doubleIt(-1);
            console.info(result)
        } catch(e){
            if(e instanceof ValError){
                console.info(e.message);
            }
        }
       
    });
});
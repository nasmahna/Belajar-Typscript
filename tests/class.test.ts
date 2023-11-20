describe('Class', function(){
    class Cust{
        constructor(){
            console.info('can create constructor');
        }
    }

    class Obj{

    }

    it('should can create class', function(){
        const customer: Cust = new Cust();
        const object: Obj = new Obj();
    });

    it('can create constructor', function(){
        new Cust();
        new Cust();
    });
});
describe('Visibility', function(){

    class Counter {
        protected counter: number = 0;

        public increment(): void{
            this.counter++;
        }

        public getCounter(): number{
            return this.counter;
        }
    }

    class DoubleCounter extends Counter{
        public  increment(): void {
            this.counter += 4;
            
        }
    }

    it('should support visibilty', function(){
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });

    it('should support double counter', function(){
        const double = new DoubleCounter();
        double.increment();
        double.increment();
        double.increment();
        console.info(double.getCounter());
    });
});
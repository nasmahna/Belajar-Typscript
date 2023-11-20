describe('Properties', function(){

    class Cust{
        readonly id: number;
        name: string = "ERI";
        age?: number;

        constructor(id: number, name: string){
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it('should can have properties', function(){

        const customer: Cust = new Cust(1, "Ami");
        customer.age = 20;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer)
    });

    it('should can havea methods', function(){
        const customer = new Cust(2, "Joko");
        customer.sayHello("Curut")
    })
});
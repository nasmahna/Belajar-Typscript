describe('Instanceof', function(){

    class Karyawan{}
    class Manager {}

    const budi = new Karyawan();
    const dodi = new Manager();

    it('should have proble using typeof', function(){

        console.info(typeof budi);
        console.log(typeof dodi);

    });

    it('should have proble using instanceof', function(){
        expect(budi instanceof Karyawan).toBe(true);
        expect(budi instanceof Manager).toBe(false);

        expect(dodi instanceof Karyawan).toBe(false);
        expect(dodi instanceof Manager).toBe(true);

    });
});
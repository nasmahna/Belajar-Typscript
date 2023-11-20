import { MathUtil } from "../src/math";

describe('Namespace', function(){
    it('should support', function(){
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(9,8,7,6,5));
    });
});
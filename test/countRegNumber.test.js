import assert from 'assert';

import countRegNumber from '../countRegNumber.js';

describe('countAllRegNumber Function', ()=>{
    it('should return 5 as the number of registrations in a string', function(){
        assert.equal(5, countRegNumber('CY 123,CJ 123, FGT 123 L, EFF 100 GP, NP 7425'));

    });
    it('should return 1 as the number of registrations in a string', function(){
        assert.equal(1, countRegNumber('FGT 123 L'));
        
    });
    it('should return 2 if there are no registrations in a string', function(){
        assert.equal(2, countRegNumber('NA 12459, NKA 0789'));
        
    });

    

});
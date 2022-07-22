import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe('The isFromBellville Function', ()=>{
    it('should return true if a registration is from Bellville', ()=>{
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('should return false if a registration is from Cape Town', ()=>{
        assert.equal(false, isFromBellville('CA 123'));
    });
});
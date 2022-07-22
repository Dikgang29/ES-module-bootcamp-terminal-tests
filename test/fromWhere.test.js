import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('fromWhere Function', ()=>{
    it('should show that a registration is from Bellville if it starts with CY', ()=>{

        assert.equal('Bellville', fromWhere('CY 8596'));
    });
    it('should show that a registration is from Paarl if it starts with CJ', ()=>{

        assert.equal('Paarl', fromWhere('CJ 1256'));
    });
    it(`should show that a registration is from  'Some Other place' if  it starts with CCA`, ()=>{

        assert.equal('Some other place!', fromWhere('CCA 4478'));
    });
});
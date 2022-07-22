import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('countAllPaarl Function', ()=>{

    it('Should return the number of registrations from Paarl to be 4', ()=>{

        assert.equal(4,countAllPaarl('CJ 123, CA 456, CJ 789, CJ 01112, CJ 951, CY 4319'));
    });

    it('Should return the number of registrations from Paarl to be 0', ()=>{

        assert.equal(0,countAllPaarl('CY 123, CA 456, CA 789, NP 01112, NA 951'));
    });

});
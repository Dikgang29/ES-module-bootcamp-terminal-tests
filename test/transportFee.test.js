import assert from "assert";
import transportFee from "../transportFee.js";

describe('transportFee Function', ()=>{

    it('should be able to show how much could be spent on a morning shift', ()=>{

        assert.equal('R20', transportFee('morning'));
    });

    it('should be able to show how much could be spent on a afternoon shift', ()=>{

        assert.equal('R10', transportFee('afternoon'));
    });
    it('should be able to show how much could be spent on a night shift', ()=>{

        assert.equal('free', transportFee('night'));
    });
});
import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('totalPhoneBill Function', ()=>{

    it('should callculate the bill if 2 calls were made and 2 sms sent', ()=>{

        assert.equal('R6.80', totalPhoneBill('call, sms, call, sms'))
    });
    it('should callculate the bill if 1 call was made and 3 sms sent', ()=>{

        assert.equal('R4.70', totalPhoneBill('call, sms, sms, sms'))
    });

    it('should callculate the bill if 2 calls were made and no sms sent', ()=>{

        assert.equal('R5.50', totalPhoneBill('call,call'))
    });
} );
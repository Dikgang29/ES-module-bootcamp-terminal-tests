import assert from 'assert';
import regCheck from '../regCheck.js';

describe('The Function RegCheck', ()=>{
    it('Should be able identify registrations from Limpopo', ()=>{
        assert.equal(true, regCheck('CYX 123 L','L'))
    });
    it('Should be able identify registrations from Gauteng', ()=>{
        assert.equal(true, regCheck('EF 123 GP','GP'))
    });
    
    it('Should return false if a registration is not from a certain province', ()=>{
        assert.equal(false, regCheck('CY 123-256','GP'))
    });
    });
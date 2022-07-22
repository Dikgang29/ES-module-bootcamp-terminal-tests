import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('YeasAgo Function', ()=>{
    it('should calculate the difference between the current year and the year 2010', ()=>{
        assert.equal(12, yearsAgo(2010));
    });

    it('should calculate the difference between the current year and the year 1996', ()=>{
        assert.equal(26, yearsAgo(1996));
    });
})
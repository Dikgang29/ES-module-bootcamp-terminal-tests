import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday Function', ()=>{

    it('should return true if the weekday is Monday', ()=>{
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return false if the weekday is Sunday', ()=>{
        assert.equal(false, isWeekday('Sunday'));
    });
   
});
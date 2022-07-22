import assert from 'assert';
import greet from '../greet.js';

describe('greet Function', ()=>{

    it('should be able to greet Xola',()=>{
        assert.equal('Hello, Xola', greet('Xola'))
    });
    it('should send an error message is a number is called istead of a name',()=>{
        assert.equal('Error, Enter a name not a number!', greet(10.5));
    });

    it('Should send an error message if no name is called',()=>{
        assert.equal('Error, Please enter a name', greet(''));
        
    });
});
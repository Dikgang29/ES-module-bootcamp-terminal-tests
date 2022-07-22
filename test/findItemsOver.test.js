let itemList1 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 13}
];

let itemList2 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('findItemsOver Function',()=>{

    it('should find items with the quantity over 15 in a list', ()=>{

        assert.deepEqual([{name : 'pears', qty : 19},{name : 'bananas', qty : 17}], findItemsOver(itemList1,15))
    });

    it('should find items with the quantity over 22 in a list', function(){

        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23}, {name : 'apples', qty : 37}], findItemsOver(itemList2,22))
    });
    it('should find items with the quantity over 10 in a list', function(){

        assert.deepEqual([{name : 'pears', qty : 19},{name : 'bananas', qty : 17},{name : 'apples', qty : 13}], findItemsOver(itemList1,10))
    });
});
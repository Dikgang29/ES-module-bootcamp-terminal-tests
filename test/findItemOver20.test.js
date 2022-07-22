let itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

let itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

let  itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('findItemsOver20 Function', ()=>{
    it('it should be able to find items that have the quantity over 20 in list 1', ()=>{
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20(itemList));
    });

    it('it should be able to find items that have the quantity over 20 in list 2', ()=>{
        assert.deepEqual([], findItemsOver20(itemList2));
    });

    it('it should be able to find items that have the quantity over 20 in list 3', ()=>{
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23}, {name : 'apples', qty : 37}], findItemsOver20(itemList3));
    });
})
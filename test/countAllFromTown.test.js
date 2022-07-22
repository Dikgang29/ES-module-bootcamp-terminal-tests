import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('countAllFromTown Function ',()=>{

    it('should be able to count how many reistrations are from Cape Town ',()=>{
        assert.equal(3, countAllFromTown('CA 123, CJ 897, CA 563, CY 894, CA 9713', 'CA'));

    });
    it('should be able to count how many reistrations are from Bergville ',()=>{
        assert.equal(2, countAllFromTown('NA 123, NB 897, NC 563, NB 894, CA 9713', 'NB'));

    });
    it('should be able to count how many reistrations are from Umlazi ',()=>{
        assert.equal(2, countAllFromTown('NUZ 123, NU 897, NR 563-589, NZ 894, NT 9713, NUZ 0085', 'NUZ'));

    })
});
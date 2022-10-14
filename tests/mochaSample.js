import { strict as assert } from 'assert';
import { expect } from 'chai';
import util from 'util';
import { Logtail }  from "@logtail/node";
const isSet = (value) => (value !== null && value !== undefined);

const logtailSource = process.env.CH_LOGTAIL_SOURCE;

describe("logTail + Mocha", function() {

    before(async function () {
      console.info(" :: before");
      if (!isSet(logtailSource)) {
        console.log("please set CH_LOGTAIL_SOURCE");
        process.exit(1);
      }
    });

    it("should work", function() {
        const logtail = new Logtail(logtailSource);
        logtail.info("Logtail tested " + new Date());
    });

});

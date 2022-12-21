import { strict as assert } from 'assert';
import { expect } from 'chai';
import util from 'util';
import { Node } from "@logtail/js";
const isSet = (value) => (value !== null && value !== undefined);

const logtailSource = process.env.CH_LOGTAIL_SOURCE;

describe("@logtail/js + Mocha", function() {

    before(async function () {
      console.info(" :: before");
      if (!isSet(logtailSource)) {
        console.log("please set CH_LOGTAIL_SOURCE");
        process.exit(1);
      }
    });

    it("should work", async function() {
        const logtail = new Node(logtailSource);
        await logtail.info("Logtail @logtail/js tested " + new Date());
    });

});

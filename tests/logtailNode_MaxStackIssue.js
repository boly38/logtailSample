
import { Logtail }  from "@logtail/node";
const logtailSource = process.env.CH_LOGTAIL_SOURCE;
const logtail = new Logtail(logtailSource);

const noCircularRef = { "b": 22, "c": 33};

console.log("no issue")
await logtail.info("Logtail @logtail/node max stack (1) " + new Date(), noCircularRef);


const circularRef = { a: "44", "b": 55};
circularRef._self = circularRef;
console.log("issue logtail")
await  logtail.info("Logtail @logtail/node max stack (2) " + new Date(), circularRef);

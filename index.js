// doc : https://docs.logtail.com/integrations/javascript
import { Logtail }  from "@logtail/node";

const isSet = (value) => (value !== null && value !== undefined);

const logtailSource = process.env.CH_LOGTAIL_SOURCE;
if (!isSet(logtailSource)) {
  console.log("please set CH_LOGTAIL_SOURCE");
  process.exit(1);
}
const logtail = new Logtail(logtailSource);

logtail.info("Logtail installed " + new Date());
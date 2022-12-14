# logtailSample

HowTo reproduce (logtail issue?):

1) setup your logtail secret:

```bash
export CH_LOGTAIL_SOURCE=blahblahblah
```

2) try classic usage

```bash
node index.js
```

This works! you could see the resulte in your https://logtail.com/ `Live tail` :
![img.png](img.png)

3) now same test with mocha with `@logtail/node` or `@logtail/js` : this doesnt work

```bash
npm run test
```

I expect 2 `Live tail` additional entries.
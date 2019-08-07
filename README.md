# Vue Storefront v-html router

v-html link router component for Vue Storefront

When using data from extenal resources, e.g. Magento CMS Pages and CMS Blocks, if the content has links, they will do a refresh to access the link. With this, it will find links in the CMS Page Content, intercept their click event and use Vue Router to go to these links without refresh.

This only works with relative links, e.g. /home, if link is specified as http://page.url/home, it will do a redirect with a refresh.


## Installation

1. Download this repo into `src/modules/v-html-router` folder.
2. Register module in `src/modules/index.ts`

```js
...
import { VHtmlRouter } from '../modules/v-html-router'
...

export const registerModules: VueStorefrontModule[] = [
  ...
  VHtmlRouter
]
```

## Example usage

This module provides a mixin that will add router functionality to a links within v-html element.

You need to add the function in your component, passing it a reference element to which the router will work on.

For example you can create a custom component like the following:

```vue
<template>
  <div class="row center-xs">
    <div class="col-sm-3 pb15" ref="referenceElement" v-html="html"/>
  </div>
</template>

<script>
import VHtmlRouter from 'src/modules/v-html-router/components/VHtmlRouter'

export default {
  name: 'RouterTest',
  mixins: [VHtmlRouter],
  data () {
    return {
      html: "<a href='/home'>Going home...</a>"
    }
  },
  mounted () {
      this.vHtmlRouter(this.$refs.referenceElement)
  }
}
</script>
```

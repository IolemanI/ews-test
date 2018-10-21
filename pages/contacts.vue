<template>
  <section class="main">
    <page-header :params="pageHeaderData"/>
    <section-ews307/>
    <section-ews317/>
    <section-ews323/>
    <section-ews41/>
  </section>
</template>

<script>
import pageHeader from '~/components/sections/page-header/index.vue'
import sectionEws307 from '~/components/sections/section-EWS-307/index.vue'
import sectionEws317 from '~/components/sections/section-EWS-317/index.vue'
import sectionEws323 from '~/components/sections/section-EWS-323/index.vue'
import sectionEws41 from '~/components/sections/section-EWS-41/index.vue'

export default {
  components: {
    pageHeader,
    sectionEws307,
    sectionEws317,
    sectionEws323,
    sectionEws41
  },
  data () {
    return {
      pageHeaderData: {
        title: 'Let’s Create Remarkable Products Together!',
        cssClass: 'contacts',
        titleClass: 'contacts-text'
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

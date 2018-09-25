<template>
  <section class="main">
    <section-ews3/>
    <section-ews16/>
    <section-ews21/>
    <section-ews24/>
  </section>
</template>

<script>
import sectionEws3 from '~/components/sections/section-EWS-3/index.vue'
import sectionEws16 from '~/components/sections/section-EWS-16/index.vue'
import sectionEws21 from '~/components/sections/section-EWS-21/index.vue'
import sectionEws24 from '~/components/sections/section-EWS-24/index.vue'

export default {
  head: {
    title: 'Домашнаяя страница'
  },
  components: {
    sectionEws3,
    sectionEws16,
    sectionEws21,
    sectionEws24,
  }

}
</script>

<style scoped>

</style>

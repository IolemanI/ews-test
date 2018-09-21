<template>
  <section class="main">
    <section-ews3/>
    <section-ews16/>
    <section-ews21/>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import sectionEws3 from '~/components/sections/section-EWS-3/index.vue'
import sectionEws16 from '~/components/sections/section-EWS-16/index.vue'
import sectionEws21 from '~/components/sections/section-EWS-21/index.vue'

export default {
  components: {
    sectionEws3,
    sectionEws16,
    sectionEws21
  },
  head: {
    title: 'Домашнаяя страница'
  }
}
</script>

<style scoped>

</style>

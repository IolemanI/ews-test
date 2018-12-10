<template>
  <section class="main">
    <section-ews3/>
    <section-ews16/>
    <section-ews21/>
    <section-ews24/>
    <section-ews27/>
    <section-ews30/>
    <section-ews34/>
    <section-ews36 :isCaseA="true"/>
    <section-ews41/>
  </section>
</template>

<script>
  import sectionEws3 from '~/components/sections/section-EWS-3/index.vue'
  import sectionEws16 from '~/components/sections/section-EWS-16/index.vue'
  import sectionEws21 from '~/components/sections/section-EWS-21/index.vue'
  import sectionEws24 from '~/components/sections/section-EWS-24/index.vue'
  import sectionEws27 from '~/components/sections/section-EWS-27/index.vue'
  import sectionEws30 from '~/components/sections/section-EWS-30/index.vue'
  import sectionEws34 from '~/components/sections/section-EWS-34/index.vue'
  import sectionEws36 from '~/components/sections/section-EWS-36/index.vue'
  import sectionEws41 from '~/components/sections/section-EWS-41/index.vue'
  import {getCaseStudies, getReviews, getBlogPosts} from "../plugins/api-helper";

  export default {
    head: {
      title: 'ELIFTECH | Your Trusted IT Partner | Software Development',
      meta: [
        { hid: 'description', name: 'description', content: 'Global tech service company that covers all aspects of custom software development using the latest technologies and frameworks' },
        { hid: 'image', property:"og:image", content: '/data/social/facebook.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'software developer, offshore software development, custom software development company, Software Project Outsourcing, Quality Assurance, software Architecture, UI, UX, DevOps, fintech, adtech, martech, Health tech, edtech, LogTech' }
      ]
    },
    async mounted () {
      let [caseStudies, blogPosts, reviews] = await Promise.all([
        getCaseStudies(),
        getBlogPosts(),
        getReviews()
      ])

      this.$store.commit('setCaseStudies', caseStudies)
      this.$store.commit('setBlogPosts', blogPosts)
      this.$store.commit('setReviews', reviews)
    },
    components: {
      sectionEws3,
      sectionEws16,
      sectionEws21,
      sectionEws24,
      sectionEws27,
      sectionEws30,
      sectionEws34,
      sectionEws36,
      sectionEws41
    }
  }
</script>

<style scoped>

</style>

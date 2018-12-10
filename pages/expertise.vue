<template>
  <section class="main">
    <page-header :options="{ titleClass: '', title: 'Our expertise', cssClass: 'expertise' }"/>
    <section-ews73 />
    <section-ews77 />
    <section-ews34 />
    <section-ews36 />
    <section-ews41 />
  </section>
</template>

<script>
  import {getCaseStudies} from "../plugins/api-helper";
  import pageHeader from '~/components/sections/page-header/index.vue'
  import sectionEws73 from '~/components/sections/section-EWS-73/index.vue'
  import sectionEws77 from '~/components/sections/section-EWS-77/index.vue'
  import sectionEws34 from '~/components/sections/section-EWS-34/index.vue'
  import sectionEws36 from '~/components/sections/section-EWS-36/index.vue'
  import sectionEws41 from '~/components/sections/section-EWS-41/index.vue'

  export default {
    head: {
      title: 'ELIFTECH | Software Development | Our Expertise',
      meta: [
        { hid: 'description', name: 'description', content: 'Global tech service company that covers all aspects of custom software development using the latest technologies and frameworks' },
        { hid: 'image', property:"og:image", content: '/data/social/facebook.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'software developer, offshore Software development, web app, iot, mobile development, mobile, Cloud Computing, Cloud Solutions, bid data, data science, ui, ux, golang, node js, react js, .net, javascript, angular, aws, azure, android, windows, ios, macos, mongo db, linux' }
      ]
    },
    async mounted () {
      if (this.$store.state.caseStudies.list.length === 0) {
        let [caseStudies] = await Promise.all([
          getCaseStudies(),
        ])

        this.$store.commit('setCaseStudies', caseStudies)
      }
    },
    components: {
      pageHeader,
      sectionEws73,
      sectionEws77,
      sectionEws34,
      sectionEws36,
      sectionEws41
    }
  }
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

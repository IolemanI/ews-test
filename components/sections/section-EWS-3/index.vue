<template>
  <section class="section-ews3">
    <b-carousel id="carousel1"
                style=""
                indicators
                :interval=8000
                background="#0000"
                img-width="2560"
                img-height="832"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

      <b-carousel-slide v-for="slide in slides" :img-src="slide.src" :key="slide.src">
        <img slot="img" class="mainBanner" width="2560" height="832" :style="'background-image: url('+slide.src+')'"
             src="" alt="">
        <div class="container">
          <h1 class="main-title" v-html="slide.title"></h1>
          <div class="subtitle" v-html="slide.subtitle"></div>

          <nuxt-link :to="slide.button.link" :class="slide.button.style">
            {{slide.button.title}}
          </nuxt-link>
        </div>
      </b-carousel-slide>

    </b-carousel>

    <a href="" class="ion-icon ion ion-ios-arrow-dropdown" id="ews3-scrolldown"></a>
  </section>
</template>

<script>

  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        slides: [
          {
            src: '/images/banners/banner_team_wide.png',
            style: 'whoweare-slide',
            title: `Business-savvy <br/>software engineers <br class="d-md-none"/>ready
                    <br class="d-none d-md-block"/>to work <br class="d-md-none"/>for you`,
            button: {
              title: 'See the team',
              link: '/who-we-are',
              style: 'btn btn-lg btn-white btn-hover-secondary btn-rounded btn-shadow'
            }
          },
          {
            src: '/images/banners/banner_startup_wide.png',
            style: 'forstartups-slide',
            title: `Supporting <br class="d-md-none"/>Startups<br/>at Every Stage`,
            subtitle: `Ensure your startup’s success with our tailor-made services throughout the product life cycle.`,
            button: {
              title: 'I want that',
              link: '/forstartups',
              style: 'btn btn-lg btn-white btn-hover-secondary btn-rounded btn-shadow'
            }
          },
          {
            src: '/images/banners/banner_portfolio_wide.png',
            style: 'portfolio-slide',
            title: `Started by <br class="d-md-none"/>engineers,<br/>run by engineers<br/>to enhance your <br class="d-md-none"/>business`,
            subtitle: ``,
            button: {
              title: 'View our work',
              link: '/portfolio',
              style: 'btn btn-lg btn-primary btn-hover-secondary btn-rounded btn-shadow'
            }
          },
          {
            src: '/images/banners/banner_expertise_wide.png',
            style: 'expertise-slide',
            title: `Enjoy living on the <br class="d-xs-none d-md-none"/>cutting
                    <br class="d-none d-md-block"/> edge of <br class="d-md-none"/>technology?`,
            subtitle: `We can install the latest tech into your business, <br class="d-sm-none d-md-block"/>and do it cost-effectively`,
            button: {
              title: 'Show Me More',
              link: '/expertise',
              style: 'btn btn-lg btn-primary btn-hover-secondary btn-rounded btn-shadow'
            }
          },
          {
            src: '/images/banners/main_banner.png',
            style: 'main-slide',
            title: `We are technophiles`,
            subtitle: `eager to implement <span class='mob-brick'>the <strong>newest technologies</strong></span><br/>into the most <strong>valuable solutions</strong>`,
            button: {
              title: 'See what we do',
              link: '/expertise',
              style: 'btn btn-blue btn-primary btn-rounded btn-lg btn-shadow'
            }
          }
        ]
      }
    },
    computed: {
      isSlide0: function(){
        return this.slide == 0 ? 'active' : ''
      },
      isSlide1: function(){
        return this.slide == 1 ? 'active' : ''
      },
      isSlide2: function(){
        return this.slide == 2 ? 'active' : ''
      },
      isSlide3: function(){
        return this.slide == 3 ? 'active' : ''
      },
      isSlide4: function(){
        return this.slide == 4 ? 'active' : ''
      },
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped lang="scss">

  .section-ews3{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mainBanner{
    background-position: center;
    background-size: cover;
    display: block;
    width: 100%;
  }

  .carousel-caption{
    position: relative;
    width: 100%;

    .container{
      width: 960px;
      height: 51.25rem;
      text-align: left;
      padding: 267px 0 0 13%;
      margin: 0;

      h1{
        font-size: 3.25rem;
        font-family: Roboto,sans-serif;
        font-weight: 700;
        line-height: 1.1;
      }
      p{
        font-size: 27px;
        letter-spacing: 1px;
        font-family: Lato,sans-serif;
        font-weight: 300;
        line-height: 1.5;
        margin: 0;
      }
      .btn.btn-blue {
        margin-top: 70px;
        padding: 1rem 2rem;
        font-weight: 400;
        font-size: 1rem;
        border: 0 none;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
        background: #11a5e1;
        background: linear-gradient(180deg,#11a5e1 0,#195aa9);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#11a5e1",endColorstr="#195aa9",GradientType=0);
      }
    }
  }

  .ion-icon{
    display: block;
    font-size: 50px;
    text-align: center;
    text-decoration: none;
    opacity: .8;
    color: #FFF;
    transition: all 500ms;
    position: absolute;
    left: 0;
    bottom: 30px;
    right: 0;

    &:hover {
      opacity: 1;
    }
  }

  .main-title{
    color: #FFF;
    margin-bottom: 1rem;
    font-size: 3.15rem;
    line-height: 1.22;
  }

  .btn.btn-white {
    font-weight: bold;
    border: 0 none;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    margin-top: 5.5rem;
    padding: 1rem 2.3rem;
    &:visited, &:focus, &:hover {
      //color: $white;
    }
    &:hover {
      box-shadow: 0 5px 20px rgba(0,0,0,.5);
    }
  }

  .btn.btn-primary {
    margin-top: 5.5rem;
    padding: 1rem 2.3rem;
  }

</style>

<style lang="scss">

  #carousel1___BV_indicators_{
    padding: 0 0 0 10%;
    margin: 0;
    bottom: 12rem;
    width: 960px;
    justify-content: flex-start;
    right: 15%;
    left: 15%;

    li {
      width: 11px;
      height: 11px;
      margin-right: 6px;
      margin-left: 6px;
      border-radius: 100%;
    }
  }

</style>

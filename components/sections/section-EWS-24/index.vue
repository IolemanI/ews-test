<template>
  <section class="section-ews24">
    <div class="bg"></div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="section-title">{{title}}</h2>
        </div>
      </div>

      <div class="row wrapper hidden-sm-down">
        <div class="offset-md-1 col-md-10 content">
          <div class="row filter">
            <div class="ml-auto">
              <div class="dropdown theme-dropdown" id="expertise-filter">
                <a class="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown">
                  {{dropdown[0]}}
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                  <span v-for="item in dropdown" :key="item" :class="'dropdown-item '+ dropdown[0] ? 'selected':''">{{item}}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="cards">

            <b-carousel id="cs_carousel"
                        style=""
                        indicators
                        img-width="100"
                        img-height="280"
                        :interval=0
                        background="#fff0"
                        v-model="slide">

              <b-carousel-slide v-for="(slide, index) in caseStudies" :key="index">
                <div class="case-study-slide">

                  <div class="col-md-6 case-study" v-for="caseStudy in slide" :key="caseStudy.url" :data-expertise="caseStudy.expertise">

                    <div class="card post">
                      <a :href="'/portfolio/' + caseStudy.url">
                        <div class="card-img-bg img-${caseStudy.url}" :style="'background-color: '+caseStudy.bgColor">
                          <img class="card-img-top image"
                               :src="caseStudy.coverImage"
                               :alt="caseStudy.title"/>
                        </div>
                        <div class="card-block">
                          <ul class="card-tags">
                            <li v-for="tag in caseStudy.tags" :key="tag">{{tag}}</li>
                          </ul>
                          <p class="card-title">
                            {{caseStudy.title}}
                          </p>
                          <div class="arrow">
                            <div class="ion-md-arrow-forward"></div>
                          </div>
                          <div class="hidden-desc">
                            {{caseStudy.description}}
                          </div>
                        </div>
                      </a>
                    </div>

                  </div>

                </div>
              </b-carousel-slide>

            </b-carousel>

          </div>

          <div class="btn-view">
            <a class="btn btn-rounded btn-outline-primary" href="/portfolio">{{view}}</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        title: "Our case studies",
        dropdown: [
          "All expertises",
          "Web application",
          "Internet of Things",
          "Mobile App development",
          "Cloud Solutions / Cloud Computing",
          "Big Data & Data Science",
          "UI/UX",
          "High-Load Systems"
        ],
        view: "View all",
        slide: 0,
        sliding: null,
        caseStudies: ''
      }
    },
    computed: {
    },
    methods: {
    },
    mounted(){
      let caseStudies = this.$store.state.casestudies.list;
      let tempCaseStudies = [];
      let itemsPerSlide = 4;

      if(window.screen.availWidth <= 480){
        itemsPerSlide = 3;
      }

      for (let i = 0; i < caseStudies.length; i += itemsPerSlide) {
        tempCaseStudies.push(caseStudies.slice(i, i + itemsPerSlide))
      }

      this.caseStudies = tempCaseStudies
    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $dropdown-text-color: #434344;
  $dropdown-border-color: #B6B6B7;
  $dropdown-hover-item-color: #F1F2F5;
  $carousel-card-arrow-color: #9394A7;
  $carousel-card-tags-color: #A5A5AA;
  $carousel-navigation: #D6D6D6;
  $carousel-post-border-color: #F2F4F4;
  $text-on-dark: #FFFFFF;
  $btn-view-margin: 1.4rem 0 1.3rem -0.4rem;
  $carousel-card-tags-color: #A4A4A9;
  $carousel-card-border-color: #ECEEEE;
  $slick-dot-margin:  0 0.4rem;
  $carousel-active-navigation: #20ABE2;
  $content-margin: 0 1.5rem;
  $section-subtitle-color: #848484;
  $margin-view-all: 1.6rem auto 1rem;

  .section-ews24 {
    padding-bottom: 2.5rem;

    @media(max-width: $sm) {
      padding-bottom: .5rem;
    }
  }

  .bg {
    width: 100%;
    height: 26.86rem;
    background: url(/sections/section-ews24/imgs/cases-bg.jpg) no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 0;

    @media(max-width: $sm) {
      height: 13rem;
    }
  }

  .container {
    position: relative;
    z-index: 1;
    padding-top: 4.5rem;

    .section-title {
      color: $white;
      padding-top: 1rem;
      position: relative;
      z-index: 1;
      text-align: center;
      @media(max-width: $sm) {
        margin-bottom: -1rem;
      }
    }

    .theme-dropdown {
      padding-left: 2.5rem;

      .show {
        .dropdown-toggle {
          background-color: $white;
        }
      }

      .dropdown-menu {
        right: 0;
        margin-top: 0.3125rem;
        padding: 0.56rem 0;
        border: none;
        cursor: pointer;
        -webkit-box-shadow: 3px 4px 1.56rem 4px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 3px 4px 1.56rem 4px rgba(0, 0, 0, 0.1);
        box-shadow: 3px 4px 1.56rem 4px rgba(0, 0, 0, 0.1);

        .dropdown-item {
          color: $color-primary;
          padding: 0.43rem 1.5rem;

          &:hover {
            color: $white;
            background-color: $color-primary;
          }
        }

        .selected {
          font-weight: 700;
        }
      }

      .dropdown-toggle {
        border-color: $dropdown-border-color;
        background-color: $white;
        height: 1.5rem;
        border-radius: 1rem;
        padding: 0.65rem 2.9rem;
        line-height: 0;
        color: $color-primary;
        display: flex;
        align-items: center;

        &:focus, &:hover {
          box-shadow: none;
          border-color: $dropdown-border-color;
          background-color: $white;
        }
      }
    }

    .wrapper {
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      padding-top: 4.5rem;
    }

    .filter{
      margin-left: 3rem;
      margin-right: 3rem;
      padding-right: 10px;

      @media(max-width: $sm) {
        display: none;
      }
    }

    .cards {
      margin-left: 3rem;
      margin-right: 3rem;

      .case-study-slide{
        display: flex;
        flex-wrap: wrap;
      }

      @media(max-width: $sm) {
        margin-left: .5rem;
        margin-right: .5rem;
        margin-bottom: 7rem;

        .case-study-slide{

          .case-study{
            padding: 0;
          }
        }
      }
    }

    .content {
      height: auto;
      background-color: $white;
      -webkit-box-shadow: -2px 0.56rem 2.18rem -4px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -2px 0.56rem 2.18rem -4px rgba(0, 0, 0, 0.2);
      box-shadow: -2px 0.56rem 2.18rem -4px rgba(0, 0, 0, 0.2);
      padding: 3rem 0 4rem;

      @media(max-width: $sm) {
        padding: .5rem 0;
      }

      .card {
        border-radius: 0;
        border: 1px solid $carousel-post-border-color;
        margin-top: 1.2rem;
        cursor: pointer;
        height: 20.2rem;
        overflow: hidden;

        .hidden-desc {
          display: none;
        }

        .card-block {
          padding: 0.5rem 1.4rem;
          border: 1px solid $carousel-post-border-color;
          height: 6.3rem;

          a {
            text-decoration: none;
          }
        }

        .card-tags {
          list-style: none;
          text-transform: uppercase;
          color: $carousel-card-tags-color;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          padding: 0;
          width: 100%;
          max-height: 1.5rem;
          overflow: hidden;
          white-space: normal;
          text-align: left;

          li {
            display: inline-flex;
            padding-right: 1.25rem;
            line-height: 2;

            &:last-child {
              padding-right: 0;
            }
          }
        }

        .card-title {
          color: $color-primary;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1.125rem;
          width: 14rem;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: -0.43rem;
          text-align: left;
        }

        .arrow {
          position: absolute;
          margin-top: -3.3rem;
          right: 1.8rem;
          font-size: 1.5rem;
          color: $carousel-card-arrow-color;
        }

        .card-img-bg {
          height: 13.8rem;
          padding-top: 1.8rem;
          text-align: center;
          display: flex;
          justify-content: center;

          .card-img-top {
            border-radius: 0;
          }
          @media(max-width: $sm) {
            height: 9.5rem;
            padding-top: 2.8rem;

            .card-img-top {
              height: 6.8rem;
              width: unset;
            }
          }
        }

        .img-107-windscribe{
          .card-img-top{
            position: relative;
            left: -19%;
          }
        }

        .image {
          height: 12rem;
          background-size: cover;
          background-repeat: no-repeat;
        }

        &:hover {
          -webkit-box-shadow: 1px 2px 2.5rem 2px rgba(218, 221, 221, 0.3);
          -moz-box-shadow: 1px 2px 2.5rem 2px rgba(218, 221, 221, 0.3);
          box-shadow: 1px 2px 2.5rem 2px rgba(218, 221, 221, 0.3);

          .arrow {
            color: $color-secondary;
          }

          .hidden-desc {
            display: block;
            font-size: 0.875rem;
            text-align: left;
            padding-right: 1rem;
            position: absolute;
            animation: show-desc-hover;
            color: $color-primary;
            animation-duration: 0.2s;
            background-color: $white;
            overflow: hidden;
            height: 4.3rem;
            text-overflow: ellipsis;
            transition: all .2s linear;
            -o-transition: all .2s linear;
            -moz-transition: all .2s linear;
            -webkit-transition: all .2s linear;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }

          .card-block {
            background: $white;
            height: 11.5rem;
            position: absolute;
            top: 14.5rem;
            width: 100%;
            animation: show-desc-hover;
            animation-duration: 0.2s;
            border: 1px solid $carousel-post-border-color;
            transition: all .2s linear;
            margin-top: -5.93rem;
            -o-transition: all .2s linear;
            -moz-transition: all .2s linear;
            -webkit-transition: all .2s linear;
            -webkit-box-shadow: 1px 1rem 2rem 0 rgba(238, 238, 238, 0.82);
            -moz-box-shadow: 1px 1rem 2rem 0 rgba(238, 238, 238, 0.82);
            box-shadow: 1px 1rem 2rem 0 rgba(238, 238, 238, 0.82);
          }

          @media(max-width: $sm) {
            & {
              height: 19.7rem;
            }
          }
        }

        @media(max-width: $sm) {
          margin: 0 0 0.5rem 0;
          height: unset;
        }
      }
    }

    @media(max-width: $sm) {
      margin-bottom: 70px;
    }
  }

  .slick-dots {
    margin-top: 0.7rem;
    list-style: none;
    text-align: center;
    padding: 0;

    li {
      display: inline-block;
      margin: $slick-dot-margin;
      button {
        padding: 0;
        border: none;
        width: 0.5rem;
        height: 0.5rem;
        background: $carousel-navigation;
        color: transparent;
        font-size: 0;
        border-radius: 50%;
      }
    }

    .slick-active {
      button{
        background: $carousel-active-navigation;
      }
    }
  }

  .slick-slide {
    outline: none;
  }

  .btn-view {
    text-align: center;
    margin: $margin-view-all;
  }

  @keyframes show-desc-hover {
    from {
      transition-duration: 0.2s;
      transform: translateY(2rem);
      opacity: 0;
    }

    to {
      transition-duration: 0.2s;
      opacity: 1;
      transform: translateY(2rem);
    }
  }

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md){
  }
</style>

<style lang="scss">
  @import "~/assets/styles/index.scss";

  #cs_carousel{
    height: 740px;

    .carousel-caption{
      position: unset;
    }
  }

  #cs_carousel___BV_indicators_{
    padding: 1rem 0 0 0;
    margin: 0;
    bottom: 0;
    width: 100%;
    justify-content: center;

    li {
      width: .5rem;
      height: .5rem;
      background: #d6d6d6;
      margin-right: 6px;
      margin-left: 6px;
      border-radius: 100%;
      flex: 0 0 auto;

      &.active{
        background: #20abe2;
      }
    }

    @media(max-width: $sm) {
      bottom: -5rem !important;
    }
  }

  #cs_carousel___BV_inner_{
    .carousel-caption{
      padding: 0;
    }
  }
</style>

<template>
  <section class="section-ews16">

    <div class="container">

      <h2 class="section-title">We Serve Your Needs In</h2>
      <div class="row">

        <div class="col-6 col-lg-3" v-for="(service, index) in services" :key="service.title">
          <div class="block block-active">
            <div class="block-content">
              <div :class="'block-icon icon-'+index"></div>
              <div class="block-title" v-html="service.title"></div>
              <p class="block-text" v-html="service.article"></p>
            </div>
            <div class="block-modal-trigger hidden-md-up" data-toggle="modal" :data-target="'#block-modal-'+index"></div>
          </div>
          <div class="modal service-modal block-modal fade" :id="'block-modal'+index" data-backdrop="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
                  <span class="ion-ios-close"></span>
                </button>
                <div class="modal-body">
                  <div class="block-title" v-html="service.title"></div>
                  <p class="block-text" v-html="service.article"></p>
                </div>
              </div>
            </div>
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
        services: [{
          title: "Software Project <br/> Outsourcing",
          article: "Get your existing project improved or implement your idea with our full software development lifecycle process, starting with discovery and prototyping and moving all the way to engineering, deployment and maintenance."
        },{
          title: "Development <br/> & Operations",
          article: "Accelerate your software product development and increase time to market with our DevOps service."
        },{
          title: "Efficient <br/> Dedicated Team",
          article: "We provide fully dedicated, scalable and stable teams, ready to join your project on a remote basis."
        },{
          title: "Quality Assurance",
          article: "Take advantage of the perfect software product thanks to our thorough quality assurance process. We apply both manual and automated testing approaches."
        },{
          title: "Architecture <br/> Consulting and Design",
          article: "Our experienced Software Architects provide consulting services for existing and new systems."
        },{
          title: "Software Development <br/> Process Audit",
          article: "Profit from your project’s audit, which will show you how to decrease time to market and expenses, increase productivity and visibility and improve quality and predictability of project outcomes."
        },{
          title: "UX & UI <br/> Consulting Services",
          article: "Our User Interface and User Experience consulting services help you deliver both an excellent experience to your customers and a competitive product."
        },{
          title: "Cyber Security <br/> Services",
          article: "Ensure the safety of your product thanks to our certified, dedicated Security Engineers who provide continual threat monitoring and customized guidance 24/7/365."
        }]
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $block-margin: 10px 0;
  $block-padding: 10px 10px;
  $block-height: 250px;
  $block-icon-height: 152px;
  $transition-time: 0.5s;

  body.modal-backdrop-bg .modal-backdrop {
    background-color: transparent;
    display: none;
  }

  .section-ews16 {
    margin-top: 5rem;
    margin-bottom: 70px;
  }

  .block-modal-trigger {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .block-modal {
    .modal-dialog {
      max-width: 390px;

      .modal-content {
        border: none;
        box-shadow: 0 5px 40px rgba(0,0,0,.1);
        transition: all .5s;
        padding-top: 2rem;

        .modal-body {
          padding: 1rem 3rem;

          .block-title {
            color: $color-primary;
            margin-bottom: 1.5rem;
            font-family: $font-family-base;
            font-weight: 700;
            font-size: 1.05rem;
            line-height: 1.4rem;
            text-align: center;
          }

          .block-text {
            font-size: 1rem;
            text-align: justify;
            line-height: 1.9rem;
          }
        }

        .close {
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 4rem;
          color: $color-secondary;
          line-height: 0;

          span {
            line-height: 0;
            &:before {
              line-height: 0;
            }
          }
        }
      }
    }
  }

  .section-title {
    text-align: center;
    margin-bottom: 3.6rem;
  }

  .block {
    display: block;
    margin: $block-margin;
    position: relative;
    padding: $block-padding;
    height: $block-height;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
    transition: all $transition-time;
    overflow: hidden;
    background: white;

    @media(max-width: $sm) {
      height: 175px;
      margin-bottom: 0;
    }

    @media (min-width: 0) and (max-width: $xs) {
      height: 150px;
      margin-bottom: 0;
      padding: 0 5px;
    }

    .block-title {
      color: $color-primary;
      line-height: 1.8rem;
      margin-bottom: 10px;
      font-size: 1.1rem;
      font-family: $font-family-base;
      font-weight: 700;
      transition: all $transition-time;

      @media(max-width: $sm) {
        font-size: 0.875rem;
        line-height: 1.2rem;
      }

      @media (min-width: 0) and (max-width: $xs) {
        font-size: 0.78rem;
      }
    }

    .block-icon {
      height: $block-icon-height;
      transition: opacity $transition-time;
      background-repeat: no-repeat;
      background-position: center center;

      @media(max-width: $sm) {
        background-size: $block-icon-height / 2;
        height: 100px;
      }

      @media (min-width: 0) and (max-width: $xs) {
        background-size: $block-icon-height / 2.6;
        height: 100px;
      }

      &.icon-0 {
        background-image: url('/images/services/outsourcing-icon.png');
      }
      &.icon-1 {
        background-image: url('/images/services/development-icon.png');
      }
      &.icon-2 {
        background-image: url('/images/services/team-icon.png');
      }
      &.icon-3 {
        background-image: url('/images/services/quality-icon.png');
      }
      &.icon-4 {
        background-image: url('/images/services/architecture-icon.png');
      }
      &.icon-5 {
        background-image: url('/images/services/audit-icon.png');
      }
      &.icon-6 {
        background-image: url('/images/services/ui-icon.png');
      }
      &.icon-7 {
        background-image: url('/images/services/security-icon.png');
      }
    }

    .block-text {
      color: $color-font;
      opacity: 0;
      transition: opacity $transition-time;
      line-height: 1.3rem;
      padding: 0 0.35rem;
      font-size: 0.73rem;
      text-align: start;

      @media(max-width: $sm) {
        font-size: 0.6rem;
        line-height: 1rem;
      }
    }

    .block-content {
      transition: transform $transition-time;
    }
  }

  @media(max-width: $sm) {
    .section-ews16 {
      padding-left: 10px;
      padding-right: 10px;
    }

    .service-modal{
      top: 90px;
    }
  }

  @media (min-width: 0) and (max-width: $xs) {
    .col-6 {
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  @media (min-width: $md){
    .block:hover {
      position: relative;
      transform: scale(1.16);
      box-shadow: 0 15px 20px 10px rgba(0,0,0,0.05);
      border-radius: 5px 5px 0 0;
      border-top: 5px solid $color-secondary;
      padding-top: 1.5rem;
      z-index: 1;

      .block-title {
        transform: scale(0.85);
      }

      .block-text {
        opacity: 1;
        padding-top: 0.8rem;
      }

      .block-icon {
        opacity: 0;
      }

      .block-content {
        transform: translateY(-$block-icon-height - 8px);
      }
    }
  }

</style>

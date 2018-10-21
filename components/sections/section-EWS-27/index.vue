<template>
  <section class="section-ews27">

    <div class="bg">
      <div class="container">
        <h2 class="title">Clients Testimonials</h2>
        <div class="row hidden-sm-down">
          <div class="carousel-container offset-md-2 col-md-8">
            <div id="feedbackCarousel" class="carousel slide" @mouseover="mouseOver" @mouseout="mouseOut">
              <div class="carousel-inner testimonials" role="listbox">

                <div class="carousel-item"
                     v-for="(review, index) in reviews"
                     :id="'carousel_item_'+index"
                     :key="review.name">
                  <div class="feedback">
                    <div class="feedback-icon"><img :src="review.mainImage" alt=""/></div>
                    <div class="feedback-name">{{review.name}}</div>
                    <div class="feedback-company">{{review.company}}</div>
                    <div class="feedback-text" v-html="review.text"></div>
                    <a :href="review.link" target="_blank" class="feedback-link">
                      Read more
                      <i class="ion-ios-arrow-forward"></i>
                    </a>
                  </div>
                </div>

                <a class="carousel-control-prev visible" href="javascript:;"
                   @click="prevSlide"
                   role="button"
                   data-slide="prev">
                  <div class="circle">
                    <i class="ion-ios-arrow-back"></i>
                    <span class="sr-only">Previous</span>
                  </div>
                </a>
                <a class="carousel-control-next visible" href="javascript:;"
                   @click="nextSlide"
                   role="button"
                   data-slide="next">
                  <div class="circle">
                    <i class="ion-ios-arrow-forward"></i>
                    <span class="sr-only">Next</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden-md-up">
          <div class="slider">

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
        slide: 1,
        sliding: null,
        carouselItems: null,
        slideInterval: 4000,
        isPaused: false
      }
    },
    computed: {
      reviews () {
        return this.$store.state.reviews.list
      }
    },
    watch: {
      slide: function () {
        this.setSlide(this.slide)
      }
    },
    methods: {
      mouseOver: function () {
        this.isPaused = true
      },
      mouseOut: function () {
        this.isPaused = false
      },
      nextSlide: function () {
        if(this.slide >= this.carouselItems.length)
          this.slide = 1
        else
          this.slide += 1
      },
      prevSlide: function () {
        if(this.slide > 1)
          this.slide -= 1
        else
          this.slide = this.carouselItems.length
      },
      setSlide: function (slide) {
        try {
          for(let i = 0; i < this.carouselItems.length; i++){
            this.carouselItems[i].classList.remove('active', 'left', 'right')
          }

          this.carouselItems[slide-1].classList.add('active')

          if(slide === 1){
            this.carouselItems[this.carouselItems.length-1].classList.add('left')
            this.carouselItems[slide].classList.add('right')
          }else if(slide === this.carouselItems.length){
            this.carouselItems[slide-2].classList.add('left')
            this.carouselItems[0].classList.add('right')
          }else{
            this.carouselItems[slide-2].classList.add('left')
            this.carouselItems[slide].classList.add('right')
          }
        }catch (e) {
          console.error(e)
        }
      }
    },
    mounted: function () {
      this.carouselItems = document.querySelector('.carousel-inner.testimonials').getElementsByClassName('carousel-item')
      this.setSlide(this.slide)

      let slideInterval = setInterval(()=>{

        if(!this.isPaused){
          if(this.slide < this.carouselItems.length)
            this.slide += 1
          else
            this.slide = 1
        }

      }, this.slideInterval)

    }
  }
</script>

<style scoped lang="scss">
  $feedback-icon-size: 6.3rem;
  $feedback-icon-size-sm: 4.5rem;
  $feedback-icon-margin: -$feedback-icon-size/2 auto 1.7rem;
  $button-circle-radius: 2.1rem;
  $feedback-height: 25rem;
  $section-height: 45.8rem;
  $animation-time: .4s;
  $controls-animation-time: .2s;
  $feedback-link-arrow-size: 1rem;
  $scale-image: 1;
  $center-image-width: 520px * $scale-image;
  $half-width: ($center-image-width / 2);
  $arrow-size: 32px;
  $arrow-padding-x: 36px;
  $slick-prev-character: "\F3CF";
  $slick-next-character: "\F3D1";
  $slick-dot-color: #D6D6D6 !default;
  $slick-dot-color-active: $color-secondary !default;
  $slick-dot-size: 9px !default;

  .section-ews27 {

  }


  .bg {
    padding-top: 5.8rem;
    background-color: #F2F3F6;
    height: $section-height;
    margin-bottom: -$headings-margin-bottom;

    @media(max-width: $sm) {
      height: auto;
      padding-bottom: 50px;
    }
  }

  .title {
    text-align: center;
    font-weight: 700;
    margin-bottom: 6.2rem;
    @media(max-width: $sm) {
      margin-bottom: 4rem;
    }
  }

  .carousel-inner {
    overflow: visible;
    height: $feedback-height;

    @media(max-width: $sm) {
      height: 45rem;
    }
  }

  @media(max-width: $xs) {
    .slick-slide.slick-center .feedback {
      height: 100%;
    }

    .slick-slide.slick-center .feedback {
      .feedback-text, p {
        padding: 0 1rem;
        white-space: normal;
        overflow: auto;
        text-overflow: initial;
      }
    }
  }


  .carousel-item {
    display: block;
    position: absolute;
    visibility: hidden;
    transition: transform $animation-time ease-out;
    min-height: $feedback-height;
    text-align: center;
    background: white;
    box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.08);

    @media(max-width: $sm) {
      width: 90%;
    }

  }
  .feedback {
    padding-bottom: 2rem;
    @media (min-width: 0) and (max-width: $xs) {
      height: 0;
    }

    .feedback-icon {
      margin: $feedback-icon-margin;
      transition: opacity $animation-time;
      opacity: 0;
      height: $feedback-icon-size;
      width: $feedback-icon-size;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px rgba(0,0,0,0.05);
      @media(max-width: $sm) {
        height: $feedback-icon-size-sm;
        width: $feedback-icon-size-sm;
      }

      img{
        width: $feedback-icon-size;
        @media(max-width: $sm) {
          width: $feedback-icon-size-sm;
        }
      }
    }

    .feedback-name {
      color: $color-primary;
      font-weight: 700;
      margin-bottom: 0.3rem
    }

    .feedback-company {
      color: $color-font;
      font-weight: 700;
      font-style: italic;
      margin-bottom: 1.3rem;
    }

    .feedback-text {
      color: black;
      line-height: 1.8rem;
      padding: 0 5rem;
      margin-bottom: 1rem;

      @media(max-width: $sm) {
        padding: 0 1rem;
      }

      @media (min-width: 0) and (max-width: $xs) {
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

    }

    .feedback-link {
      color: $color-primary;
      i {
        display: inline-block;
        text-align: center;
        line-height: $feedback-link-arrow-size;
        height: $feedback-link-arrow-size;
        width: $feedback-link-arrow-size;
        color: white;
        background: $color-primary;
        border-radius: 50%;
        font-size: 0.8rem;
      }
    }
  }

  .carousel-container {
    @media(max-width: $sm) {
      padding: 0 3rem;
    }
  }

  .carousel-item.active {
    visibility: visible;
    z-index: 2;
    .feedback {
      .feedback-icon {
        opacity: 1;
      }
    }
  }

  .carousel-item-prev, .active.carousel-item-left {
    transform: translate3d(-50%,0,0);
  }

  .carousel-item-next, .active.carousel-item-right {
    transform: translate3d(50%, 0, 0);
  }

  .carousel-item.left {
    visibility: visible;
    transform: translateX(-6.25rem) scale(0.85);

    @media(max-width: $sm) {
      transform: scale(0.85);
    }
  }

  .carousel-item.right {
    visibility: visible;
    transform: translateX(6.25rem) scale(0.85);
    @media(max-width: $sm) {
      transform: scale(0.85);
    }
  }

  .carousel-item-next, .carousel-item-prev {
    z-index: 1;
  }

  .circle {
    height: $button-circle-radius * 2;
    width: $button-circle-radius;
    background-color: $color-secondary;
    i {
      line-height: $button-circle-radius * 2;
    }
  }

  .carousel-control-next, .carousel-control-prev {
    width: auto;
    opacity: 0;
    i {
      font-size: 1.6rem;
    }
  }

  .carousel-control-next.visible, .carousel-control-prev.visible {
    opacity: 1;
    transition: all 0.2s $animation-time;
    transform: translateX(0);
  }

  .carousel-control-prev {
    transform: translateX($button-circle-radius*2);
    left: -$button-circle-radius ;
    justify-content: flex-end;
    .circle {
      border-top-left-radius: $button-circle-radius * 2;
      border-bottom-left-radius: $button-circle-radius * 2;
    }
  }

  .carousel-control-next {
    transform: translateX(-$button-circle-radius*2);
    right: -$button-circle-radius ;
    justify-content: flex-start;
    .circle {
      border-top-right-radius: $button-circle-radius * 2;
      border-bottom-right-radius: $button-circle-radius * 2;
    }
  }

  // Slick

  .slick-slider {
    padding: 70px 0;

    @media(max-width: $sm) {
      padding: 70px 10px;
    }

  }
  .slick-list {
    overflow: visible;
  }
  .slider {
    .carousel-item {
      position: relative;
      box-shadow: none;
      background: transparent;
      visibility: visible;
      outline: none;
    }
  }
  .slick-arrow {
    display: block;
    position: absolute;
    height: $arrow-size;
    width: $arrow-size;
    line-height: 0;
    font-size: 0;
    cursor: pointer;
    color: transparent;
    top: 50%;
    left: 50%;
    padding: 0;
    border: none;
    outline: none;
    //font-family: $ionicons-font-family;
    z-index: 1;
    background-color: $white;
    border-radius: 100px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

    &:before {
      font-size: 1rem;
      color: $color-primary;
      line-height: $arrow-size;
      text-align: center;
    }
    &:hover, &:focus {
      outline: none;
      background: $color-primary;
      box-shadow: 0 1px 3px rgba($white, 0.5);
      &:before {
        color: $white;
        opacity: 1;
      }
    }

    &.slick-prev {
      display: none;
      transform: translate(-$half-width - $arrow-size - $arrow-padding-x, 0);
      [dir="rtl"] & {
        transform: translate($half-width + $arrow-padding-x, 0);
      }
      &:before {
        content: $slick-prev-character;
        [dir="rtl"] & {
          content: $slick-next-character;
        }
      }
    }
    &.slick-next {
      transform: translate($half-width + $arrow-padding-x, 0);
      [dir="rtl"] & {
        transform: translate(-$half-width - $arrow-size - $arrow-padding-x, 0);
      }
      &:before {
        content: $slick-next-character;
        [dir="rtl"] & {
          content: $slick-prev-character;
        }
      }
    }
  }
  .slick-slide {
    transition: all $default-animation-speed;

    @media(max-width: $sm) {
      padding-top: 1.6rem;
    }

    .feedback-icon {
      transform: translateY(-50%);
      margin-bottom: -1rem;
    }
    .feedback {
      transform: scale(.9);
      transition: transform $animation-time ease-out;
      min-height: $feedback-height;
      text-align: center;
      background: white;
      box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.08);
    }

    .feedback-text {
      padding: 0 2rem;
      color: $color-primary;
    }
    .feedback-company {
      font-weight: normal;
      color: #848484;
    }

    &.slick-center {
      position: relative;
      z-index: 1;

      @media(max-width: $sm) {
        padding-top: 0rem;
      }

      .feedback {
        transform: scale($scale-image);

        @media(max-width: $sm) {
          margin-left: 0.7rem;
          margin-right: 0.7rem;
        }
      }
      .feedback-icon {
        opacity: 1;
      }
    }
  }
  .slick-dots {
    $margin-value: 0;
    display: block;
    margin: $margin-value;
    position: absolute;
    bottom: 5px;
    list-style: none;
    text-align: center;
    padding: 0;
    width: 100%;
    li {
      $margin-value: 0 5px;
      display: inline-block;
      margin: $margin-value;
      position: relative;
      height: $slick-dot-size;
      width: $slick-dot-size;
      padding: 0;
      cursor: pointer;
      button {
        display: block;
        border: 0;
        height: $slick-dot-size;
        width: $slick-dot-size;
        outline: none;
        line-height: 0;
        font-size: 0;
        background: transparent;
        padding: 5px;
        cursor: pointer;
        &:hover, &:focus {
          outline: none;
        }
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          content: $empty-content;
          width: $slick-dot-size;
          height: $slick-dot-size;
          background-color: $slick-dot-color;
          border-radius: 100px;
          text-align: center;
          color: $slick-dot-color;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
      &.slick-active button:before {
        background-color: $slick-dot-color-active;
      }
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

      &.active{
        background: #20abe2;
      }
    }
  }
</style>

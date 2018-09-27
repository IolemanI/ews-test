<template>
  <section class="section-ews30">
    <div class="container">
      <h2 class="section-title">{{title}}</h2>
      <div class="section-subtitle">{{subtitle}}</div>

      <div class="hidden-sm-down">
        <div class="row">
          <div class="offset-md-1 col-md-10 offset-0 col-12">
            <div class="menu-wrapper">
              <div class="menu">
                <ul class="row">
                  <li class="col-md" v-for="category in categories" :key="category.category" :data-category="category.category">
                    <span>{{category.caption}}</span>
                  </li>
                </ul>
                <div class="lamp"></div>
              </div>
            </div>
          </div>
        </div>

        <div data-interval="false" class="blog-carousel">

          <b-carousel id="blog_carousel"
                      style=""
                      indicators
                      img-width="100"
                      img-height="280"
                      :interval=0
                      background="#000"
                      v-model="slide">

            <b-carousel-slide v-for="slide in blogs" :key="slide[0].id">
              <div class="blog-slide">

                  <div class="post card" v-for="blog in slide" :key="blog.url" :data-category="blog.category">
                    <div class="card-img-top image" style="background-image: url(/images/banners/banner_startup_wide.jpg)"></div>
                    <div class="card-block desc">
                      <p class="card-title title">
                        {{blog.title}}
                      </p>
                      <p class="card-text data">
                        <small class="text-muted">
                          <span class="ion-ios-time-outline"></span> {{blog.pubDate}}
                        </small>
                      </p>
                    </div>

                    <div class="post-hover">
                      <div class="card-block">
                        <a :href="'/blog/'+blog.url">
                          <p class="card-title hover-title">{{blog.title}}</p>
                          <p class="card-tags">
                            {{blog.tags}}
                          </p>
                          <p class="card-text text">
                            {{blog.description}}
                          </p>
                          <div class="opacity-bg"></div>
                          <span class="card-text read-more">
                            Read more
                            <span class="arrow ion-ios-arrow-forward"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

              </div>
            </b-carousel-slide>

          </b-carousel>

        </div>
      </div>

      <div class="hidden-md-up">
        <div class="row">
          <div class="col-12">
            <div class="menu-wrapper">
              <div class="menu">
                <ul class="row">
                  <li class="col-md mobile-item" v-for="category in categories" :key="category.category" :data-category="category.category">
                    <span>{{category.caption}}</span>
                  </li>
                </ul>
                <div class="mobile-lamp"></div>
              </div>
            </div>
          </div>
        </div>

        <div data-interval="false" class="blog-carousel-mobile">
        </div>
      </div>

      <div class="row">
        <a class="btn btn-rounded btn-outline-primary btn-view" href="/blog">{{view}}</a>
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
        itemsPerSlide: 3,
        title: 'Blog',
        subtitle: 'Our insightful ideas and relevant industry news',
        categories: [
          {
            category: "blogs",
            caption: "Blog"
          },
          {
            category: "news",
            caption: "News"
          },
          {
            category: "guides",
            caption: "Guides"
          },
          {
            category: "events",
            caption: "Events"
          },
          {
            category: "experiments",
            caption: "Experiments"
          }
        ],
        view: "View all"
      }
    },
    computed: {
      blogs () {
        let blogs = this.$store.state.blogs.list
        let tempBlogs = [];

        for (let i = 0; i < blogs.length; i += this.itemsPerSlide) {
          tempBlogs.push(blogs.slice(i, i + this.itemsPerSlide))
        }

        return tempBlogs
      }
    },
    watch: {
      slide: function () {
        this.setSlide(this.slide)
      }
    },
    methods: {
      setSlide: function (slide) {

      }
    },
    mounted: function () {

    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";

  $text-color-hover: #FFFFFF;
  $text-color-active: #FFFFFF;
  $blog-menu-subtitle-color: #212121;
  $carousel-active-navigation: #20ABE2;
  $blog-menu-bg: #F2F3F6;
  $carousel-navigation: #D6D6D6;
  $carousel-post-border-color: #EDEFEF;
  $carousel-post-data-color: #5B5B5B;
  $carousel-post-hover-tags-color: #71C9ED;
  $carousel-post-hover-bg-gradient-0: rgba(19, 166, 225, .1);
  $carousel-post-hover-bg-gradient-80: rgba(19, 166, 225, .8);
  $carousel-post-hover-bg-gradient-90: rgb(19, 166, 225);
  $carousel-post-hover-bg-gradient-100: rgb(19, 166, 225);
  $slick-dot-margin:  0 0.4rem;
  $post-margin: 0 .15rem;
  $margin-1-auto: 1rem auto;
  $margin-1-5-auto: 2rem auto 0;

  .section-ews30 {
    padding-top: 5.3rem;

    @media(max-width: $sm) {
      margin-bottom: 40px;
    }
  }

  .section-title {
    text-align: center;
    font-weight: bold;
    font-family: $headings-font-family;
    color: $color-primary;
  }

  .section-subtitle {
    text-align: center;
    font-size: 1.125rem;
    margin-top: -3rem;
    padding-bottom: 2.8rem;
    font-family: $font-family-base;
    color: $blog-menu-subtitle-color;
  }

  .menu-wrapper {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-bottom: 3.4rem;

    .menu {
      position: relative;
      width: 100%;
      min-height: 2.1rem;
      border-radius: 2.5rem;
      background-color: $blog-menu-bg;

      .width-40-percent {
        @media(max-width: $sm) {
          width: 40%;
        }
      }

      ul {
        list-style: none;
        position: relative;
        padding: 0;
        width: 100%;
        margin-right: 0;
        margin-left: 0;

        li {
          font-family: $font-family-base;
          line-height: 2.1rem;
          text-align: center;
          font-size: 1rem;
          float: left;
          cursor: pointer;
          padding: 0;

          span {
            z-index: 2;
            font-size: 1rem;
            position: relative;
          }
        }

        .active {
          transition: all .3s linear;
          -o-transition: all .3s linear;
          -moz-transition: all .3s linear;
          -webkit-transition: all .3s linear;
          color: $text-color-active;
        }
      }

      .lamp {
        position: absolute;
        top: 0;
        height: 2.1rem;
        z-index: 1;
        border-radius: 2.5rem;
        background-color: $color-secondary;
        transition: all .2s linear;
        -o-transition: all .2s linear;
        -moz-transition: all .2s linear;
        -webkit-transition: all .2s linear;
      }
    }
  }

  .image {
    img {
      width: 100%;
      height: 11.5rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .post-hover {
    display: none;
    top: -12.5rem;
    left: -3.12rem;
    position: absolute;
  }

  .slick-arrow {
    display: none;
  }

  .slick-dots {
    margin-top: 1.9rem;
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

  .blog-slide{
    display: flex;
  }

  .card {
    border-radius: 0;
    border: 1px solid $carousel-post-border-color;
  }

  .post {
    padding: 0;
    height: 20rem;
    overflow: hidden;
    width: 100%;

    a {
      text-decoration: none;
    }

    .card-title {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 3rem;
      font-family: $font-family-base;
      font-weight: bold;
      color: $color-primary;
      margin-bottom: 0;
    }

    .data {
      font-family: $font-family-base;
      color: $carousel-post-data-color;

      .text-muted {
        span {
          padding-right: 3px;
        }
      }
    }

    .desc {
      padding: .9rem .8rem;
    }

    .image {
      height: 13.12rem;
      min-width: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .card-img-top {
      border-radius: 0;
    }

    &:hover {
      .card-block {
        a {
          color: $white;
          text-decoration: none;
        }
      }

      .post-hover {
        display: block;
        width: 100%;
        height: 20rem;
        animation: show-post-hover;
        animation-duration: .5s;
        top: 0;
        left: 0;
        z-index: 3;
        padding: .2rem .2rem 0 .6rem;
        background-color: $color-secondary;
        color: $text-color-hover;

        .hover-title {
          display: block;
          max-height: 9rem;
          overflow: visible;
          color: $text-color-hover;
          font-family: $font-family-base;
          font-weight: bold;
          margin-bottom: .45rem;
        }

        .text {
          display: -webkit-box;
          color: $text-color-hover;
          line-height: 1.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
          font-size: .9rem;
          margin-bottom: .8rem;
          font-family: $font-family-base;
          max-height: 7rem;
        }

        .opacity-bg {
          width: 100%;
          height: 8rem;
          bottom: 2rem;
          position: absolute;
          left: 0;
          background: linear-gradient(to bottom,
            $carousel-post-hover-bg-gradient-0 0%,
            $carousel-post-hover-bg-gradient-80 70%,
            $carousel-post-hover-bg-gradient-100 80%,
            $carousel-post-hover-bg-gradient-100 100%);
        }

        .card-tags {
          font-size: 1rem;
          padding-right: .2rem;
          margin-bottom: .8rem;
          max-height: 1.5rem;
          overflow: hidden;

          span {
            color: $carousel-post-hover-tags-color;
            padding-right: .55rem;
          }
        }

        .read-more {
          bottom: 1.5rem;
          position: absolute;
          font-size: .9rem;

          .arrow {
            text-align: center;
            display: inline-block;
            vertical-align: middle;
            width: .9rem;
            height: .9rem;
            color: $color-secondary;
            background-color: $white;
            border-radius: 50%;
            margin-left: .5rem;
            margin-bottom: .1rem;
            padding-top: .1rem;
          }

          .ion-ios-arrow-forward:before {
            font-weight: bold;
            font-size: 100%;
            vertical-align: top;
          }

          a {
            color: $text-color-hover;
            text-decoration: none;
          }

          .circle {
            padding-left: .2rem;
          }
        }
      }
    }
  }

  .btn-view {
    margin: $margin-1-auto;
  }

  .btn-outline-primary:focus {
    box-shadow: none;
  }

  @media(max-width: $sm) {
    .btn-view {
      margin: $margin-1-5-auto;
    }

    .post {
      height: 15rem;

      a {
        border: 1px solid rgba(225, 225, 225, 0.6);

        &:hover {
          border: none;
          -webkit-box-shadow: 0px 4px 12px 2px rgba(206, 206, 206, 0.36);
          -moz-box-shadow: 0px 4px 12px 2px rgba(206, 206, 206, 0.36);
          box-shadow: 0px 4px 12px 2px rgba(206, 206, 206, 0.36);
        }
      }

      data {
        padding-top: .2rem;
      }

      .image {
        height: 8.12rem;
      }
    }

    .card-title {
      text-transform: uppercase;
    }

    .card {
      height: 100%;
      border: none;
      padding: .6rem 1rem .8rem;

      &:hover {

        .card-block p {
          color: $color-secondary;
        }
      }
    }

    .slick-list {
      margin-left: 1.2rem;
      margin-right: 1.2rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .section-subtitle {
      padding-left: 4rem;
      padding-right: 4rem;
      color: #154269;
      padding-bottom: 2.4rem;
      margin-top: -3.5rem;
    }

    .menu-wrapper {
      margin-bottom: 2rem;
      padding-left: .5rem;
      padding-right: .5rem;

      .menu {
        background-color: transparent;
        margin-bottom: 2rem;

        ul {
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: center;

          li {
            background-color: $blog-menu-bg;
            border-radius: 2.5rem;
            margin-bottom: 0.8rem;
            margin-right: 0.5rem;
            margin-left: 0.5rem;
            padding: 0 1rem;
            float: none;
            width: 26%;
          }
        }

        .active {
          background-color: $color-secondary;
        }
      }
    }
  }

  @keyframes show-post-hover {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
  #blog_carousel{
    height: 300px;
    margin-bottom: 6rem;

    .carousel-caption{
      position: unset;
      padding: 0;
    }
  }

  #blog_carousel___BV_indicators_{
    padding: 3rem 0 0 0;
    margin: 0;
    bottom: -5rem;
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

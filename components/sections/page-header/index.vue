<template>
  <section :class="'page-header '+params.cssClass">
    <div class="container">
      <h1 :class="params.titleClass">{{params.title}}</h1>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['params']
  }
</script>

<style scoped lang="scss">
  @import "~/assets/styles/index.scss";
  $margin-null: 0;

  .page-header {
    background: $color-primary url(/sections/page-header/page-header.jpg) no-repeat bottom center;
    background-size: cover;
    margin-bottom: 5rem;

    h1 {
      color: $white;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 8px;
      padding: 10.625rem 0;
      font-size: 2.8rem;

      &.contacts-text {
        font-size: 1.875rem;
        text-transform: none;
        letter-spacing: 1px;
        padding: 10.625rem 0;
      }

      @media(max-width: $sm) {
        font-size: 1.8rem;

        &.contacts-text {
          font-size: 1.3rem;
          padding: 7.4rem 1.5rem 5.1rem;
          line-height: 2.2rem;
          margin-bottom: 0;
        }
      }
    }

    &.career {
      background: url(/sections/page-header/page-header-career.jpg) center bottom;
    }

    &.contacts {
      background: url(/sections/page-header/page-header-contacts.jpg) bottom center;
      background-size: cover;
    }
    &.privacy-policy{
      margin: $margin-null;
      height: 90px;

      h1{
        margin: $margin-null;
      }
    }
    &.who-we-are {
       background-image: url(/sections/page-header/page-header-who-we-are.jpg);

      @media(max-width: $sm) {
        background-image: url(/sections/page-header/page-header-who-we-are-mob.jpg);
        margin-bottom: 3rem;
      }
    }
    &.expertise {
      background-image: url(/sections/page-header/page-header-expertise.jpg);
    }
    &.portfolio {
      background-image: url(/sections/page-header/page-header-portfolio.jpg);

      @media(max-width: $sm) {
        background-image: url(/sections/page-header/page-header-portfolio-mob.jpg);
      }
    }
  }

  .service-header.page-header {
    background-position-x: -1rem;
  }
</style>

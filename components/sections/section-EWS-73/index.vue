<template>
  <section class="section-ews73">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div id="expertise-accordion" class="accordion" role="tablist">

            <div class="card expertise" v-for="(expertise, index) in expertises" :key="expertise.title">
              <div class="card-header" role="tab">
                <a href="#" data-parent="#expertise-accordion" :class="expertise.expanded ? '' : 'collapsed'"
                   data-toggle="collapse" @click.prevent="toggleExpertiseExpanded(index)">
                  <span class="bg">
                    <span :class="'expertise-icon expertise-icon-' + index"></span>
                  </span>
                  <span class="experite-title">{{ expertise.title }}</span>

                  <span class="expand-icon"></span>
                </a>
              </div>
              <div :id="'expertise-content-' + index" :class="expertise.expanded ? 'collapse show' : 'collapse'">
                <div class="card-block expertise-text">
                  {{ expertise.text }}
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
        expertises: [
          {
            title: "Web applications",
            expanded: false,
            text: "ElifTech's engineers create and deploy mission-critical web apps for your business using structured frameworks and the best programming practices and coding guidelines and standards. We continually evaluate the latest trends in the development community and improve our methods to provide you the best possible development solutions. Our experts have deep expertise and a full range of technical skills to help you design, develop, test and maintain sophisticated cross-platform web applications."
          },
          {
            title: "Internet of Things",
            expanded: false,
            text: "Connected things are changing businesses, organizations and product development. For ElifTech's engineers, IoT is not just another expertise; it's our passion and our hobby.  We help companies and startups adopt IoT strategies and technologies;connect sensors, devices and machines; and benefit from the opportunities of the digital world. We continuously expand our experience and evolve our skills and knowledge in Industrial IoT, SmartHome Systems and Automating Human-Machine Interaction."
          },
          {
            title: "Mobile App development",
            expanded: false,
            text: "Here at ElifTech, we love to take your idea, put it through a full-cycle mobile application development process and turn it into business value. Having already helped develop cutting-edge mobile applications for the Android and iOS platforms, we are confident we can take on your mobile project and promptly deliver results of the utmost quality. From backend integration to Android, iOS or Hybrid apps, our full-stack mobile app development expertise covers every aspect of making a successful app."
          },
          {
            title: "Cloud Solutions / Cloud Computing",
            expanded: false,
            text: "Lost in options when considering Cloud Solutions for maximum access, efficiency and profitability? We offer expertise to build Cloud-based solutions that give you a competitive advantage.  ElifTech's engineers cooperate with you to develop solutions while keeping your timeline and budget at the forefront of our priorities, analyzing and selecting the most efficient technologies for your business growth. We have extensive experience developing Cloud services based on leading cloud platforms including AWS™ and Microsoft Azure."
          },
          {
            title: "Big Data & Data Science",
            expanded: false,
            text: "Nowadays, businesses are challenged with finding a way to leverage the mountains of available data to improve their procedures and the customer experience, gain competitive advantages and maximize their effectiveness. Here at ElifTech, we can help you solve your toughest data challenges with the best tools and the latest expertise."
          },
          {
            title: "UI/UX",
            expanded: false,
            text: "User Interface and User Experience are about efficient, engaging and purposeful experiences, so customers will be willing to use your product persistently. Our UI/UX designers will ensure that your product logically flows from one step to the next, selecting the best approach to solving a specific user problem, maintaining consistency in visual elements and defining behaviors and creating an ideal product layout."
          },
          {
            title: "High-Load Systems",
            expanded: false,
            text: "In today's world of intensive data flows, rapid decisions can be crucial. Large projects need elaborate design and architecture. ElifTech's engineers have broad expertise in high-load optimization, always considering performance, efficiency, scalability, reliability and fault tolerance, while building responsive and fast applications for you."
          }
        ]
      }
    },
    watch: {

    },
    methods: {
      toggleExpertiseExpanded (index) {
        this.expertises.forEach((item, i) => {
          item.expanded = i === index ? !item.expanded : false
        })
      }
    },
    mounted: function () {

    }
  }
</script>

<style scoped lang="scss">
  $expertise-icon-height: 52px;
  $expertise-icon-width: 57px;
  $expand-icon-size: 25px;
  $expertise-header-height: 4.9rem;
  $animation-time: 0.2s;

  .section-ews73{
    padding: 1.2rem 1.2rem 0 1.2rem;
    margin-bottom: 9.7rem;
  }

  .accordion .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 1px solid rgba($color-primary, 0.2);
  }

  .card.expertise {
    border: none;
    border-bottom: 1px solid rgba($color-primary, 0.2);
    border-radius: 0;

    .card-header {
      padding: 0;
      border: none;
      font-size: 1.25rem;
      font-weight: 700;
      height: 5rem;

      @media(max-width: $sm) {
        height: 3.6rem;
      }

      a {
        display: block;
        text-decoration: none;
        line-height: $expertise-header-height;
        padding: 0 1.1rem 0 0;
        height: $expertise-header-height;
        background-color: white;
        transition: box-shadow $animation-time;
        color: $color-secondary;
        position: relative;
        z-index: 1;
        box-shadow: 0 5px 10px rgba(0,0,0,0.05);
        outline: none;

        @media (max-width: $md) {
          white-space: nowrap;
          font-size: .95rem;
        }

        @media(max-width: $sm) {
          white-space: nowrap;
          font-size: .8rem;
          padding: 0;
          height: 3.6rem;
          line-height: 3.9rem;
          box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        }

        .bg {
          display: inline-block;
          height: $expertise-header-height;
          padding: 0 1rem;
          margin-right: 1.6rem;
          transition: all $animation-time;
          background-color: $color-secondary;
          @media(max-width: $sm) {
            margin-right: 0;
            padding: 0;
            height: 3.6rem;
          }
        }

        .expertise-icon {
          display: inline-block;
          height: $expertise-icon-height;
          width: $expertise-icon-width;
          vertical-align: middle;
          background-image: url('/sections/section-ews73/imgs/icons.png');
          background-repeat: no-repeat;
          background-position-y: -$expertise-icon-height;

          @media(max-width: $sm) {
            transform: scale(0.8);
          }
        }

        @for $i from 0 through 6 {
          .expertise-icon-#{$i} {
            background-position-x: -$expertise-icon-width * $i;
          }
        }

        .expand-icon {
          display: inline-block;
          background-position-x: -$expand-icon-size;
          vertical-align: middle;
          background-image: url('/sections/section-ews73/imgs/expand-icon.png');
          height: $expand-icon-size;
          width: $expand-icon-size;
          background-position-y: -$expand-icon-size;
          right: 0;
          position: absolute;
          margin: 1.7rem .5rem;

          @media(max-width: $sm) {
            transform: scale(0.8);
            margin: 1rem 0.3rem;
          }
        }

        .experite-title {
          @media(max-width: $sm) {
            padding-left: .5rem;
          }
        }

        &:hover, &.collapsed:hover {
          color: $color-secondary;
          position: relative;
          box-shadow: 0 5px 10px rgba(0,0,0,0.15);
          outline: none;

          .bg {
            background-color: $color-secondary;
          }
          .expertise-icon {
            background-position-y: -$expertise-icon-height;
          }

          .experite-title {
            @media(max-width: $sm) {
              padding-left: .5rem;
            }
          }
          .expand-icon {
            background-position-y: -$expand-icon-size;
          }
        }

        &.collapsed {
          color: $color-primary;
          box-shadow: none;
          outline: none;
          position: initial;

          .bg {
            background-color: transparent;
          }
          .expertise-icon {
            background-position-y: 0;
          }
          .expand-icon {
            background-position-x: 0;
            background-position-y: 0;
          }
        }
      }
    }

    .expertise-text {
      @media(max-width: $sm) {
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 0.9rem;
        line-height: 1.5rem;
      }

      padding-left: 7.5rem;
      padding-right: 3rem;
      line-height: 1.65rem;
      color: $color-font;
    }
  }
  .card-block {
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  @media(max-width: $sm) {
  }
  @media (min-width: 0) and (max-width: $xs) {
  }
  @media (min-width: $md) {
  }
</style>

<style lang="scss">

</style>

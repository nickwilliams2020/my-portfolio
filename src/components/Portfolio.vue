<template>
  <div class="main-wrapper">
    <body id="page-top">

      <div class="container-fluid p-0">

        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div class="my-auto">
            <h3 class="subheading">
              Hi I'm
            </h3>
            <h1 class="mb-0">{{name}}
              <span class="text-primary">{{surname}}</span>
            </h1>
            <div class="subheading mb-5"> {{address}}
              <a :href='mailto'>{{email}}</a>
            </div>
            <p class="mb-5">{{aboutMe}}</p>
            <ul class="list-inline list-social-icons mb-0">
              <li class="list-inline-item">
                <a href="//facebook.com/WckNillims" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="//twitter.com/Nickolodean_" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="//linkedin.com/in/nicholas-williams-1b0812131/" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="//github.com/nickwilliams2020" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div class="my-auto">
            <h2 class="mb-5">Experience</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">{{job.position}}</h3>
                <div class="subheading mb-3">{{job.company}} | {{job.division}}</div>
                <p>
                  <ul v-for="(bullet, index) in job.description" :key="index">
                    <li>{{bullet}}</li>
                  </ul>
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{job.startDate}} - {{job.endDate}}</span>
              </div>
            </div>

          </div>

        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div class="my-auto">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="(school, index) in education" :key="index">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">{{school.name}}</h3>
                <div class="subheading mb-3" v-if="school.degree">{{school.degree}}</div>
                <div v-if="school.field">{{school.field}}</div>
                <p v-if="school.gpa">GPA: {{school.gpa}}</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">{{school.startDate}} - {{school.endDate}}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="fa-ul mb-4 list-inline-item">
              <li class="mb-3" v-for="(language, index) in languages" :key="index">
                <i :class="language.icon" :title="language.description"></i>
                <h3>{{language.description}}</h3>
                Level: <span class="text-primary"> {{language.level}}</span><br>
              </li>
            </ul>
            <ul class="list-inline list-icons">
              <li class="list-inline-item" v-for="(tool, index) in tools" :key="index">
                <i :class="tool.icon" :title="tool.description" :href="tool.link" target="_blank"></i>
              </li>
            </ul>

            <div class="subheading mb-3">Environments</div>
            <ul class="list-inline list-icons">
              <li class="list-inline-item" v-for="(system, index) in systems" :key="index">
                <i :class="system.icon" :title="system.description"></i>
              </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>Apart from my development projects, I love making music! During the school year I travel and perform around the country as a part of the University of Maryland's premiere A Capella Group, <a href="//umdfauxpaz.com" target="_blank">Faux Paz</a>.
              You can find my personal music channel <a href="//soundcloud.com/nickmp3" target="_blank">here</a>.
            </p>
            <p>
              Here at the University of Maryland I am also Maryland Images Tour Guide. If you ever visit, request me!
            </p>
            <p class="mb-0">

            </p>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div class="my-auto">
            <h2 class="mb-5">Awards &amp; Certifications</h2>
            <ul class="fa-ul mb-0" v-for="(award, index) in awards" :key="index">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                {{award.name}}
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
          <div class="my-auto">
            <h2 class="mb-5">Contact me</h2>
            <div data-url="https://nicholaswilliams.typeform.com/to/HTlVOb" data-transparency="50" data-hide-headers="false" data-hide-footer="true" class="typeform-widget" style="width: 100%; height: 500px; margin-top: 50px;">
              <div class="css-1o3fej e12baen60" style="">
                <div class="css-h3d25g e12baen62">
                  <div>
                  </div>
                </div>
                <div class="css-w5pcnp e12baen61" style open="true">
                  <iframe width="100%" height="400px" src="https://nicholaswilliams.typeform.com/to/HTlVOb?typeform-embed=embed-widget&amp;embed-hide-footer=true&amp;embed-opacity=50" data-qa="iframe" style="border: 0px;" frameborder="0">
                  </iframe>
                </div>
              </div>
            </div>
            <div style="font-family: sans-serif; font-size: 12px; color: rgb(153, 153, 153); opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=Inl70L&amp;utm_source=typeform.com-11842598-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" target="_blank" style="color: rgb(153, 153, 153);">Typeform</a>
            </div>
          </div>
        </section>

      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      title: 'My portfolio',
      name: 'NICHOLAS',
      surname: 'WILLIAMS',
      address: '',
      email: '',
      mailto: '',
      aboutMe: 'Student. Developer. Leader.',
      experience: [
        {
          position: 'Software Engineering Intern',
          company: 'Leidos Biomedical Inc. / National Cancer Institute',
          division: 'Biomedical Applications Development Center',
          description: [
            'Followed an Agile Scrum development methodology with a team of four to develop a distributed, real-time patient genomics search and analytics engine for the NCI-MATCH Database',
            'Developed automated data retrieval, refactoring, and migration algorithm utilizing AWS Lambda, S3, and SNS written in python',
            'Implemented feature extraction algorithm for use in patient record visualization using principle component analysis'
          ],
          startDate: 'May 2018',
          endDate: 'August 2018'
        },
        {
          position: 'Lead Software Engineering Intern',
          company: 'Bio-Imaging & Machine Vision Laboratory',
          division: 'Fischell Department of Bioengineering',
          description: [
            'Designed an application in C++ and Matrox Imaging Library which performed camera calibration for an automated food processing machine',
            'Designed, 3D printed, and tested modular base to allow a mechanical system to bend around a conveyor belt using Autodesk Inventor'
          ],
          startDate: 'June 2017',
          endDate: 'Present'
        },
        {
          position: 'Lab Assistant',
          company: 'Bing Nano Research Laboratory',
          division: 'UMD Energy Research Center',
          description: [
            'Designed roller system for high temperature material treatment which supported research in nanomaterial manufacturing and flexible electronics',
            'Led and delivered presentation of roller system design to panel of university professors and graduate students',
            'Designed and fabricated a 3D Printed containment system for high energy ceramic battery packs'

          ],
          startDate: 'November 2016',
          endDate: 'Present'
        }
      ],
      education: [
        {
          name: 'University of Maryland, College Park',
          degree: 'Bachelor of Science',
          field: 'Computer Science - Data Science Track',
          gpa: '',
          startDate: 'August 2016',
          endDate: 'May 2020'
        },
        {
          name: 'Gonzaga College High School',
          gpa: '',
          startDate: 'August 2012',
          endDate: 'May 2016'
        }
      ],
      languages: [
        {
          icon: 'devicon-python-plain',
          description: 'Python',
          level: 'Proficient User'
        },
        {
          icon: 'devicon-c-plain',
          description: 'C',
          level: 'Upper Beginner'
        },
        {
          icon: 'devicon-javascript-plain',
          description: 'Javascript',
          level: 'Beginner'
        },
        {
          icon: 'devicon-java-plain',
          description: 'Java',
          level: 'Beginner'
        }
      ],
      tools: [
        {
          icon: 'devicon-amazonwebservices-plain-wordmark',
          description: 'Amazon Web Services',
          link: '//aws.amazon.com'
        },
        {
          icon: 'devicon-docker-plain',
          description: 'Docker',
          link: '//docker.com'
        },
        {
          icon: 'devicon-git-plain',
          description: 'Git',
          link: '//github.com/nickwilliams2020'
        },
        {
          icon: 'devicon-mongodb-plain',
          description: 'MongoDB',
          link: '//mongodb.com'
        },
        {
          icon: 'devicon-vuejs-plain',
          description: 'Vue JS',
          link: '//vusjs.org'
        },
        {
          icon: 'devicon-devicon-plain',
          description: 'Devicons',
          link: '//konpa.github.io/devicon/'
        }
      ],
      systems: [
        {
          icon: 'devicon-ubuntu-plain',
          description: 'Ubuntu',
          link: ''
        },
        {
          icon: 'devicon-windows8-plain',
          description: 'Windows',
          link: ''
        },
        {
          icon: 'devicon-apple-plain',
          description: 'Mac OS',
          link: ''
        }
      ],
      awards: [
        {
          name: 'Northrop Grumman - IoT Hackathon Finalist',
          description: 'Worked with a team of four to develop an easily deployable, low cost network of sensor bundles to repurpose any home with a Wi-Fi network into a smart home and an aid to emergency response personnel'
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}

</script>

<style>
body {
  font-family: 'Open Sans', serif;
  padding-top: 54px;
  color: #868e96;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', serif;
  font-size: 1.35rem;
}

.list-social-icons a {
  color: #495057;
}

.list-social-icons a:hover {
  color: #BD5D38;
}

.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}

.list-icons {
  font-size: 3rem;
}

.list-icons .list-inline-item i:hover {
  color: #BD5D38;
}

section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.bg-primary {
  background-color: rgb(65, 127, 207) !important;
}

.text-primary {
  color: rgb(65, 127, 207) !important;
}

a {
  color: rgb(65, 127, 207);
}

a:hover, a:focus, a:active {
  color: rgb(65, 127, 207);
}
</style>

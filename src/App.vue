<template>
  <div class="main-wrapper">
    <body id="page-top">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Home</span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/nicks-face.jpeg" alt="">
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid p-0">

        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div class="my-auto">
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
                    <li>{{job.description[index]}}</li>
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
                <p>GPA: {{school.gpa}}</p>
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
            <ul class="list-inline list-icons">
              <li class="list-inline-item" v-for="(language, index) in languages" :key="index">
                <i :class="language.icon" :title="language.description"></i>
              </li>
            </ul>
            <ul class="list-inline list-icons">
              <li class="list-inline-item" v-for="(tool, index) in tools" :key="index">
                <i :class="tool.icon" :title="tool.description"></i>
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
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div class="my-auto">
            <h2 class="mb-5">Awards &amp; Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Google Analytics Certified Developer</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Mobile Web Specialist - Google Certification</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
              <li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005</li>
            </ul>
          </div>
        </section>

      </div>
    </body>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My portfolio',
      name: 'NICHOLAS',
      surname: 'WILLIAMS',
      address: '9503 East Light Drive · Silver Spring, MD 20903 · (240) 678-5207 ·',
      email: 'Nick.A.Williams@outlook.com',
      mailto: 'mailto:Nick.A.Williams@outlook.com',
      aboutMe: "I'm a Software Engineering student with an insatiable appetite for learning, an aptitude for leadership, and experience in agile web development.",
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
        }
      ],
      education: [
        {
          name: 'University of Maryland, College Park',
          degree: 'Bachelor of Science',
          field: 'Computer Science - Data Science Track',
          gpa: '3.13',
          startDate: 'August 2016',
          endDate: 'May 2020'
        },
        {
          name: 'Gonzaga College High School',
          gpa: '4.23',
          startDate: 'August 2012',
          endDate: 'May 2016'
        }
      ],
      languages: [
        {
          icon: 'devicons devicons-python',
          description: 'Python',
          link: ''
        },
        {
          icon: 'devicon-c-plain',
          description: 'C',
          link: ''
        },
        {
          icon: 'devicon-javascript-plain',
          description: 'Docker',
          link: ''
        },
        {
          icon: 'devicons devicons-java',
          description: 'Java',
          link: ''
        }
      ],
      tools: [
        {
          icon: 'devicon-amazonwebservices-plain-wordmark',
          description: 'Amazon Web Services',
          link: ''
        },
        {
          icon: 'devicon-docker-plain',
          description: 'Docker',
          link: ''
        },
        {
          icon: 'devicon-git-plain',
          description: 'Git',
          link: ''
        },
        {
          icon: 'devicon-mongodb-plain',
          description: 'MongoDB',
          link: ''
        },
        {
          icon: 'devicon-vuejs-plain',
          description: 'Vue JS',
          link: ''
        },
        {
          icon: 'devicon-devicon-plain',
          description: 'Devicons',
          link: ''
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

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
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

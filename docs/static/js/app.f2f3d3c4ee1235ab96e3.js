webpackJsonp([0],{"1O9K":function(t,a){},"1uuo":function(t,a){},"5W1q":function(t,a){},ErQO:function(t,a,e){t.exports=e.p+"static/img/nicks-face.0f2a4ec.jpeg"},Jmt5:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("/5sW"),i={name:"Portfolio",data:function(){return{title:"My portfolio",name:"NICHOLAS",surname:"WILLIAMS",address:"",email:"",mailto:"",aboutMe:"Student. Developer. Leader.",experience:[{position:"Software Engineering Intern",company:"Leidos Biomedical Inc. / National Cancer Institute",division:"Biomedical Applications Development Center",description:["Followed an Agile Scrum development methodology with a team of four to develop a distributed, real-time patient genomics search and analytics engine for the NCI-MATCH Database","Developed automated data retrieval, refactoring, and migration algorithm utilizing AWS Lambda, S3, and SNS written in python","Implemented feature extraction algorithm for use in patient record visualization using principle component analysis"],startDate:"May 2018",endDate:"August 2018"},{position:"Lead Software Engineering Intern",company:"Bio-Imaging & Machine Vision Laboratory",division:"Fischell Department of Bioengineering",description:["Designed an application in C++ and Matrox Imaging Library which performed camera calibration for an automated food processing machine","Designed, 3D printed, and tested modular base to allow a mechanical system to bend around a conveyor belt using Autodesk Inventor"],startDate:"June 2017",endDate:"Present"},{position:"Lab Assistant",company:"Bing Nano Research Laboratory",division:"UMD Energy Research Center",description:["Designed roller system for high temperature material treatment which supported research in nanomaterial manufacturing and flexible electronics","Led and delivered presentation of roller system design to panel of university professors and graduate students","Designed and fabricated a 3D Printed containment system for high energy ceramic battery packs"],startDate:"November 2016",endDate:"Present"}],education:[{name:"University of Maryland, College Park",degree:"Bachelor of Science",field:"Computer Science - Data Science Track",gpa:"",startDate:"August 2016",endDate:"May 2020"},{name:"Gonzaga College High School",gpa:"",startDate:"August 2012",endDate:"May 2016"}],languages:[{icon:"devicon-python-plain",description:"Python",level:"Proficient User"},{icon:"devicon-c-plain",description:"C",level:"Upper Beginner"},{icon:"devicon-javascript-plain",description:"Javascript",level:"Beginner"},{icon:"devicon-java-plain",description:"Java",level:"Beginner"}],tools:[{icon:"devicon-amazonwebservices-plain-wordmark",description:"Amazon Web Services",link:"//aws.amazon.com"},{icon:"devicon-docker-plain",description:"Docker",link:"//docker.com"},{icon:"devicon-git-plain",description:"Git",link:"//github.com/nickwilliams2020"},{icon:"devicon-mongodb-plain",description:"MongoDB",link:"//mongodb.com"},{icon:"devicon-vuejs-plain",description:"Vue JS",link:"//vusjs.org"},{icon:"devicon-devicon-plain",description:"Devicons",link:"//konpa.github.io/devicon/"}],systems:[{icon:"devicon-ubuntu-plain",description:"Ubuntu",link:""},{icon:"devicon-windows8-plain",description:"Windows",link:""},{icon:"devicon-apple-plain",description:"Mac OS",link:""}],awards:[{name:"Northrop Grumman - IoT Hackathon Finalist",description:"Worked with a team of four to develop an easily deployable, low cost network of sensor bundles to repurpose any home with a Wi-Fi network into a smart home and an aid to emergency response personnel"}]}},mounted:function(){var t=this.jquery;this.$nextTick(function(){t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=t(this.hash);if((a=a.length?a:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:a.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})})}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-wrapper"},[e("body",{attrs:{id:"page-top"}},[e("div",{staticClass:"container-fluid p-0"},[e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[e("div",{staticClass:"my-auto"},[e("h3",{staticClass:"subheading"},[t._v("\n            Hi I'm\n          ")]),t._v(" "),e("h1",{staticClass:"mb-0"},[t._v(t._s(t.name)+"\n            "),e("span",{staticClass:"text-primary"},[t._v(t._s(t.surname))])]),t._v(" "),e("div",{staticClass:"subheading mb-5"},[t._v(" "+t._s(t.address)+"\n            "),e("a",{attrs:{href:t.mailto}},[t._v(t._s(t.email))])]),t._v(" "),e("p",{staticClass:"mb-5"},[t._v(t._s(t.aboutMe))]),t._v(" "),t._m(0)])]),t._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"experience"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Experience")]),t._v(" "),t._l(t.experience,function(a){return e("div",{key:a.description,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[e("div",{staticClass:"resume-content mr-auto"},[e("h3",{staticClass:"mb-0"},[t._v(t._s(a.position))]),t._v(" "),e("div",{staticClass:"subheading mb-3"},[t._v(t._s(a.company)+" | "+t._s(a.division))]),t._v(" "),e("p",t._l(a.description,function(a,s){return e("ul",{key:s},[e("li",[t._v(t._s(a))])])}))]),t._v(" "),e("div",{staticClass:"resume-date text-md-right"},[e("span",{staticClass:"text-primary"},[t._v(t._s(a.startDate)+" - "+t._s(a.endDate))])])])})],2)]),t._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"education"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Education")]),t._v(" "),t._l(t.education,function(a,s){return e("div",{key:s,staticClass:"resume-item d-flex flex-column flex-md-row mb-5"},[e("div",{staticClass:"resume-content mr-auto"},[e("h3",{staticClass:"mb-0"},[t._v(t._s(a.name))]),t._v(" "),a.degree?e("div",{staticClass:"subheading mb-3"},[t._v(t._s(a.degree))]):t._e(),t._v(" "),a.field?e("div",[t._v(t._s(a.field))]):t._e(),t._v(" "),a.gpa?e("p",[t._v("GPA: "+t._s(a.gpa))]):t._e()]),t._v(" "),e("div",{staticClass:"resume-date text-md-right"},[e("span",{staticClass:"text-primary"},[t._v(t._s(a.startDate)+" - "+t._s(a.endDate))])])])})],2)]),t._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"skills"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Skills")]),t._v(" "),e("div",{staticClass:"subheading mb-3"},[t._v("Programming Languages & Tools")]),t._v(" "),e("ul",{staticClass:"fa-ul mb-4 list-inline-item"},t._l(t.languages,function(a,s){return e("li",{key:s,staticClass:"mb-3"},[e("i",{class:a.icon,attrs:{title:a.description}}),t._v(" "),e("h3",[t._v(t._s(a.description))]),t._v("\n              Level: "),e("span",{staticClass:"text-primary"},[t._v(" "+t._s(a.level))]),e("br")])})),t._v(" "),e("ul",{staticClass:"list-inline list-icons"},t._l(t.tools,function(t,a){return e("li",{key:a,staticClass:"list-inline-item"},[e("i",{class:t.icon,attrs:{title:t.description,href:t.link,target:"_blank"}})])})),t._v(" "),e("div",{staticClass:"subheading mb-3"},[t._v("Environments")]),t._v(" "),e("ul",{staticClass:"list-inline list-icons"},t._l(t.systems,function(t,a){return e("li",{key:a,staticClass:"list-inline-item"},[e("i",{class:t.icon,attrs:{title:t.description}})])})),t._v(" "),e("div",{staticClass:"subheading mb-3"},[t._v("Workflow")]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"awards"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Awards & Certifications")]),t._v(" "),t._l(t.awards,function(a,s){return e("ul",{key:s,staticClass:"fa-ul mb-0"},[e("li",[e("i",{staticClass:"fa-li fa fa-trophy text-warning"}),t._v("\n              "+t._s(a.name)+"\n            ")])])})],2)]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"list-inline list-social-icons mb-0"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"//facebook.com/WckNillims",target:"_blank"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),a("i",{staticClass:"fa fa-facebook fa-stack-1x fa-inverse"})])])]),this._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"//twitter.com/Nickolodean_",target:"_blank"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),a("i",{staticClass:"fa fa-twitter fa-stack-1x fa-inverse"})])])]),this._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"//linkedin.com/in/nicholas-williams-1b0812131/",target:"_blank"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),a("i",{staticClass:"fa fa-linkedin fa-stack-1x fa-inverse"})])])]),this._v(" "),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"//github.com/nickwilliams2020",target:"_blank"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fa fa-circle fa-stack-2x"}),this._v(" "),a("i",{staticClass:"fa fa-github fa-stack-1x fa-inverse"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"fa-ul mb-0"},[a("li",[a("i",{staticClass:"fa-li fa fa-check"}),this._v("\n              Agile Development & Scrum")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"interests"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Interests")]),t._v(" "),e("p",[t._v("Apart from my development projects, I love making music! During the school year I travel and perform around the country as a part of the University of Maryland's premiere A Capella Group, "),e("a",{attrs:{href:"//umdfauxpaz.com",target:"_blank"}},[t._v("Faux Paz")]),t._v(".\n            You can find my personal music channel "),e("a",{attrs:{href:"//soundcloud.com/nickmp3",target:"_blank"}},[t._v("here")]),t._v(".\n          ")]),t._v(" "),e("p",[t._v("\n            Here at the University of Maryland I am also Maryland Images Tour Guide. If you ever visit, request me!\n          ")]),t._v(" "),e("p",{staticClass:"mb-0"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"contact"}},[a("div",{staticClass:"my-auto"},[a("h2",{staticClass:"mb-5"},[this._v("Contact me")]),this._v(" "),a("div",{staticClass:"typeform-widget",staticStyle:{width:"100%",height:"500px","margin-top":"50px"},attrs:{"data-url":"https://nicholaswilliams.typeform.com/to/HTlVOb","data-transparency":"50","data-hide-headers":"false","data-hide-footer":"true"}},[a("div",{staticClass:"css-1o3fej e12baen60"},[a("div",{staticClass:"css-h3d25g e12baen62"},[a("div")]),this._v(" "),a("div",{staticClass:"css-w5pcnp e12baen61",attrs:{open:"true"}},[a("iframe",{staticStyle:{border:"0px"},attrs:{width:"100%",height:"400px",src:"https://nicholaswilliams.typeform.com/to/HTlVOb?typeform-embed=embed-widget&embed-hide-footer=true&embed-opacity=50","data-qa":"iframe",frameborder:"0"}})])])]),this._v(" "),a("div",{staticStyle:{"font-family":"sans-serif","font-size":"12px",color:"rgb(153, 153, 153)",opacity:"0.5","padding-top":"5px"}},[this._v(" powered by "),a("a",{staticStyle:{color:"rgb(153, 153, 153)"},attrs:{href:"https://admin.typeform.com/signup?utm_campaign=Inl70L&utm_source=typeform.com-11842598-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN",target:"_blank"}},[this._v("Typeform")])])])])}]};var r=e("VU/8")(i,n,!1,function(t){e("nwsH")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[s("span",{staticClass:"d-block d-lg-none"},[t._v("Home")]),t._v(" "),s("span",{staticClass:"d-none d-lg-block"},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:e("ErQO"),alt:""}})])]),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[t._v("Experience")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#education"}},[t._v("Education")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#skills"}},[t._v("Skills")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#interests"}},[t._v("Interests")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#awards"}},[t._v("Awards")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contact")])])])])])}]};var o={components:{Portfolio:r,NavBar:e("VU/8")({name:"nav-bar"},l,!1,function(t){e("1O9K")},"data-v-43958107",null).exports}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("nav-bar"),this._v(" "),a("portfolio")],1)},staticRenderFns:[]};var d=e("VU/8")(o,c,!1,function(t){e("hAd0")},null,null).exports,v=e("7t+N"),m=e.n(v),u=e("/ocq"),p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},p,!1,function(t){e("1uuo")},"data-v-d8ec41bc",null).exports;s.a.use(u.a);var _=new u.a({routes:[{path:"/",name:"HelloWorld",component:f}]});e("K3J8"),e("Eg1c"),e("Jmt5"),e("qQ9k"),e("5W1q"),s.a.prototype.jquery=m.a,s.a.config.productionTip=!1,s.a.component(r),new s.a({el:"#app",router:_,render:function(t){return t(d)}})},hAd0:function(t,a){},nwsH:function(t,a){},qQ9k:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.f2f3d3c4ee1235ab96e3.js.map
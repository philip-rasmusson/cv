(this["webpackJsonpphilip-rasmusson-cv"]=this["webpackJsonpphilip-rasmusson-cv"]||[]).push([[0],{19:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(21),r=c.n(s),a=c(3),j=(c(19),{homeView:"/home",aboutMeView:"/cv",notFound:"/404",portfoliView:"/portfolio",competenceView:"/competence",educationView:"/education",worklifeView:"/worklife"}),o=j,l="about me",d="projekt",b="projects",x="education & worklife",h="om mig",O="utbildning och arbetsliv",p=c(4),u=c(0),m=function(e){var t=Object(p.f)();return Object(u.jsx)("li",{onClick:function(){return c=e.link,void t.push(c);var c},children:e.title})},g=Object(n.createContext)(""),w=function(e){var t=Object(n.useState)(g),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(u.jsx)(g.Provider,{value:[i,s],children:e.children})},f=function(){var e=Object(n.useContext)(g),t=Object(a.a)(e,1)[0],c=Object(n.useState)(h),i=Object(a.a)(c,2),s=i[0],r=i[1],j=Object(n.useState)(O),p=Object(a.a)(j,2),w=p[0],f=p[1],k=Object(n.useState)(d),v=Object(a.a)(k,2),S=v[0],N=v[1];return Object(n.useEffect)((function(){"english"===t?(r(l),f(x),N(b)):(r(h),f(O),N(d))}),[t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("ul",{className:"menu-items",children:[Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{link:o.aboutMeView,title:s})}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{link:o.portfoliView,title:S})}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{link:o.educationView,title:w})})]})})},k=(c(33),function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"desktop-navbar",children:f()})})}),v=(c(34),function(e){var t=Object(n.useContext)(g);return"english"===Object(a.a)(t,1)[0]?Object(u.jsx)(u.Fragment,{children:e.textEng}):Object(u.jsx)(u.Fragment,{children:e.textSwe})}),S=(c(35),{infoMail:"mailto:rasmussonphilip@gmail.com"}),N=S,E=c(12),C=c(18),y=c(23),F="Check out my Github",A="Connect on Linkedin",M="Send email",B="Spana in min Github",R="Bes\xf6k min Linkedin",D="Skicka email",P=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useContext)(g),r=Object(a.a)(s,1)[0],j=function(e,t){i("english"===r?e:t)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{href:"https://github.com/philip-rasmusson",target:"blank",className:"social-media-icon-mobile",onMouseOver:function(){return j(F,B)},onMouseLeave:function(){return i("")},children:Object(u.jsx)(E.a,{icon:C.a,className:"social-media-icon icon1"})}),Object(u.jsx)("a",{href:"http://www.linkedin.com/in/philip-rasmusson/",className:"social-media-icon-mobile",target:"blank",onMouseOver:function(){return j(A,R)},onMouseLeave:function(){return i("")},children:Object(u.jsx)(E.a,{icon:C.b,className:"social-media-icon icon2"})}),Object(u.jsx)("a",{href:N.infoMail,className:"social-media-icon-mobile",onMouseOver:function(){return j(M,D)},onMouseLeave:function(){return i("")},children:Object(u.jsx)(E.a,{icon:y.a,className:"social-media-icon icon3"})}),Object(u.jsx)("div",{className:"social-media-info",children:c})]})},T=function(){var e=Object(p.f)(),t=Object(n.useState)("navbar-mobile-menu-wrapper"),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)("burger"),j=Object(a.a)(r,2),m=j[0],g=j[1],w=function(){g("navbar-mobile-menu-wrapper"===i?"burger-active":"burger")},f=function(t){e.push(t),s("navbar-mobile-menu-wrapper"),g("burger")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:m,onClick:function(){return s("navbar-mobile-menu-wrapper"===i?"navbar-mobile-menu-wrapper-active":"navbar-mobile-menu-wrapper"),void w()},children:[Object(u.jsx)("div",{className:"line1"}),Object(u.jsx)("div",{className:"line2"}),Object(u.jsx)("div",{className:"line3"})]}),Object(u.jsxs)("div",{className:i,children:[Object(u.jsx)("div",{className:"navbar-mobile-social-media-wrapper",children:P()}),Object(u.jsxs)("ul",{className:"menu-items",children:[Object(u.jsx)("li",{onClick:function(){return f(o.aboutMeView)},children:Object(u.jsx)(v,{textEng:l,textSwe:h})}),Object(u.jsx)("li",{onClick:function(){return f(o.portfoliView)},children:Object(u.jsx)(v,{textEng:b,textSwe:d})}),Object(u.jsx)("li",{onClick:function(){return f(o.educationView)},children:Object(u.jsx)(v,{textEng:x,textSwe:O})})]})]})]})},V=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},G=function(){var e=Object(n.useState)(V()),t=Object(a.a)(e,2),c=t[0],i=t[1],s=function(){i(V())};return Object(n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),c},L=760,H=function(){var e=G().width;return Object(u.jsx)(u.Fragment,{children:e<=L?Object(u.jsx)(T,{}):Object(u.jsx)(k,{})})},J=c(15),_=(c(39),c.p+"static/media/IMG_0085.3b5ec713.png"),I="Hi!",W="Hej!",Q="Nyfiken, social och ansvarsfull, van att bem\xf6ta m\xe4nniskor p\xe5 ett professionellt och genuint s\xe4tt oavsett sammanhang. Har beskrivits som konsultm\xe4ssig och p\xe5litlig, drivs av probleml\xf6sning och kreativt skapande. En \xf6dmjuk lagspelare som ser det som en sj\xe4lvklarhet att b\xe5de dela med mig av mina kunskaper och ta till mig nya.",z="Tror att ett agilt samarbete \xe4r det b\xe4sta s\xe4ttet att n\xe5 nya, oanade h\xf6jder!",K="I'm a 37 year old tech interested, professional photographer and artist, shifting gear to focus on a new career in frontend development and digital design. My dreams are big and I see only possibilities, driven by a passion for creativity and by problem solving in digital development and design.",U="Belivies that working together in an agile envoriment is the best way to reach greater hights!",q="huvudsakliga kompetenser",X="main competence",Y="HTML/CSS",Z="JavaScript",$="ReactJS",ee="NodeJS",te="C# / .NET",ce="Entity",ne="SQL",ie="MongoDB",se="Git",re="Scrum",ae="WordPress",je="Adobe CC",oe="Klicka h\xe4r f\xf6r mer information",le="Click here for more information",de="HTML5",be="CSS3",xe="https://sv.wikipedia.org/wiki/HTML5",he="#E96C4A",Oe="#D6BA32",pe="#4CAF50",ue="#8CC84B",me="#00BCD4",ge="#000000",we="#424242",fe="#21759B",ke="https://en.wikipedia.org/wiki/WordPress",ve="#039BE5",Se="#9A6CD6",Ne="#146DB2",Ee="#F05133",Ce="#CD0818",ye="#007ACC",Fe="TypeScript",Ae="https://sv.wikipedia.org/wiki/CSS3",Me="https://sv.wikipedia.org/wiki/Javascript",Be="https://en.wikipedia.org/wiki/React_(JavaScript_library)",Re="https://en.wikipedia.org/wiki/TypeScript",De="https://en.wikipedia.org/wiki/Node.js",Pe="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",Te="https://en.wikipedia.org/wiki/Entity_Framework",Ve="https://en.wikipedia.org/wiki/SQL",Ge="https://en.wikipedia.org/wiki/MongoDB",Le="https://en.wikipedia.org/wiki/Git",He="https://sv.wikipedia.org/wiki/Scrum",Je="https://en.wikipedia.org/wiki/Adobe_Creative_Cloud",_e=c.p+"static/media/javascript.f49f4098.svg",Ie=c.p+"static/media/css.da53b054.svg",We=c.p+"static/media/html.d9e2cbde.svg",Qe=c.p+"static/media/react.51a9793c.svg",ze=c.p+"static/media/typescript.64108945.svg",Ke=c.p+"static/media/nodejs.e0e67641.svg",Ue=c.p+"static/media/csharp.b90a3b7f.svg",qe=c.p+"static/media/entity.7dc614ea.svg",Xe=c.p+"static/media/sql.59009131.svg",Ye=c.p+"static/media/mongodb.ee0c00f6.svg",Ze=c.p+"static/media/git.464c88fe.svg",$e=c.p+"static/media/scrum.3137c0cb.svg",et=c.p+"static/media/adobe.a87b1dc2.svg",tt=c.p+"static/media/wordpress.5ec656ea.svg",ct=function(){var e=Object(n.useState)(We),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(xe),r=Object(a.a)(s,2),j=r[0],o=r[1],l=Object(n.useState)(he),d=Object(a.a)(l,2),b=d[0],x=d[1],h=function(e,t,c){i(e),o(t),x(c)};return Object(u.jsx)("div",{className:"page-wrapper",children:Object(u.jsx)("div",{className:"desktop-wrapper",children:Object(u.jsxs)("div",{className:"aboutme-desktop-wrapper",children:[Object(u.jsxs)("h2",{children:[Object(u.jsx)("span",{className:"aboutme-desktop-title",children:Object(u.jsx)(v,{textEng:I,textSwe:W})})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{textEng:K,textSwe:Q}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{textEng:U,textSwe:z})]}),Object(u.jsx)("img",{src:_,alt:"Profile",className:"about-me-desktop-img"}),Object(u.jsxs)("div",{className:"about-me-desktop-competence-wrapper",style:{backgroundColor:b,color:"#ffffff"},children:[Object(u.jsx)("h3",{children:Object(u.jsx)(v,{textEng:X,textSwe:q})}),Object(u.jsxs)("div",{className:"about-me-desktop-competence-wrapper-items",children:[Object(u.jsx)("p",{onClick:function(){return h(We,xe,he)},children:de}),Object(u.jsx)("p",{onClick:function(){return h(Ie,Ae,ve)},children:be}),Object(u.jsx)("p",{onClick:function(){return h(_e,Me,Oe)},children:Z}),Object(u.jsx)("p",{onClick:function(){return h(Qe,Be,me)},children:$}),Object(u.jsx)("p",{onClick:function(){return h(ze,Re,ye)},children:Fe}),Object(u.jsx)("p",{onClick:function(){return h(Ke,De,ue)},children:ee}),Object(u.jsx)("p",{onClick:function(){return h(Ue,Pe,Se)},children:te}),Object(u.jsx)("p",{onClick:function(){return h(qe,Te,Ne)},children:ce}),Object(u.jsx)("p",{onClick:function(){return h(Xe,Ve,ge)},children:ne}),Object(u.jsx)("p",{onClick:function(){return h(Ye,Ge,pe)},children:ie}),Object(u.jsx)("p",{onClick:function(){return h(Ze,Le,Ee)},children:se}),Object(u.jsx)("p",{onClick:function(){return h($e,He,we)},children:re}),Object(u.jsx)("p",{onClick:function(){return h(et,Je,Ce)},children:je}),Object(u.jsx)("p",{onClick:function(){return h(tt,ke,fe)},children:ae})]})]}),Object(u.jsxs)("div",{className:"about-me-desktop-icon-wrapper",children:[Object(u.jsx)("img",{src:c,alt:"",className:"about-me-desktop-icon"}),Object(u.jsx)("p",{onClick:function(){return window.open(j)},children:Object(u.jsx)(v,{textEng:le,textSwe:oe})})]})]})})})},nt=(c(40),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"mobile-wrapper",children:Object(u.jsxs)("div",{className:"aboutme-mobile-wrapper",children:[Object(u.jsx)("h1",{children:Object(u.jsx)(v,{textEng:I,textSwe:W})}),Object(u.jsxs)("h3",{children:[Object(u.jsx)(v,{textEng:K,textSwe:Q}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{textEng:U,textSwe:z})]}),Object(u.jsx)("img",{src:_,alt:"Profile"}),Object(u.jsxs)("div",{className:"about-me-mobile-competence-wrapper",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(v,{textEng:X,textSwe:q})}),Object(u.jsxs)("div",{className:"about-me-mobile-competence-wrapper-items",children:[Object(u.jsx)("p",{children:Y}),Object(u.jsx)("p",{children:Z}),Object(u.jsx)("p",{children:$}),Object(u.jsx)("p",{children:ee}),Object(u.jsx)("p",{children:te}),Object(u.jsx)("p",{children:ce}),Object(u.jsx)("p",{children:ne}),Object(u.jsx)("p",{children:ie}),Object(u.jsx)("p",{children:se}),Object(u.jsx)("p",{children:re}),Object(u.jsx)("p",{children:ae}),Object(u.jsx)("p",{children:je})]})]})]})})})}),it=function(){var e=G().width;return Object(u.jsx)(u.Fragment,{children:e<=L?Object(u.jsx)(nt,{}):Object(u.jsx)(ct,{})})},st=(c(41),"Musikproduktion och ljudteknik"),rt="Studio Blue, Stockholm",at="2004 -2006",jt=".NET / webbutveckling",ot="Campus M\xf6lndal",lt=" Augusti 2020 - juni 2022",dt="BARTENDER",bt=" H\xf6ga krav p\xe5 ansvarstagande och service",xt="Fokus p\xe5 stesst\xe5lighet och kundbem\xf6tande",ht="Casino Cosmopol, G\xf6teborg",Ot="Casino Cosmopol",pt="2007 - 2012",ut="FOTOGRAF/UTBILDARE",mt="Ansvar f\xf6r utbildning av nya fotografer",gt="H\xf6ga krav p\xe5 sj\xe4lvst\xe4ndigt arbete och punktlighet, f\xf6retagets ansikte ut\xe5t gentemot b\xe5de m\xe4klare och hus\xe4gare",wt="Starkt fokus p\xe5 kundkontakt och krav p\xe5 ett konstant professionellt bem\xf6tande",ft="Esoft Systems AB, G\xf6teborg",kt="Esoft Systems AB",vt="2007 - 2021",St="Objektorienterad programmering med C#",Nt="Objektorienterad arkitektur med C#",Et="Kvalitetss\xe4kring och testdriven utveckling i C#",Ct="Personlig- och professionell utveckling",yt="Webbramverk ReactJS",Ft="Agil mjukvaruutveckling/Scrum",At="Object Oriented Programming with C#",Mt="Object Oriented Architecture with C#",Bt="Quality Assurance And Test Driven Development with C#",Rt="Personal And Professional Development",Dt="Web Framework ReactJS",Pt="Agile Software Development/Scrum",Tt=" | VG",Vt="utbildning",Gt="arbetsliv",Lt="VG",Ht="education",Jt="Strong focus on customer relations and a constant demand for a professional appearance",_t="High demans on independence and showing up on time, company's face towards realtors and house sellers",It="Responsible for educating new photographers",Wt="PHOTOGRAPHER/EDUCATOR",Qt="Focus on ability to handle stress and customer relations",zt=" High demand on responsibility and service",Kt="worklife",Ut=".NET / Web Development",qt=" August 2020 - June 2022",Xt="Music Production & Sound Engineering",Yt="Visa/d\xf6lj kurser och betyg",Zt="Show/hide courses and grades",$t="N\xf6sn\xe4sgymnasiet, Stenungsund",ec=" 1999 - 2002",tc="Handels- och administrationsprogrammet",cc="Business and administration",nc="Eget f\xf6retag, G\xf6teborg",ic="Eget f\xf6retag",sc="2007 - 2021",rc="FOTOGRAF",ac="PHOTOGRAPHER",jc="Fotografering och efterf\xf6ljande bildredigering av br\xf6llop, sportevenemang, mingel, personportr\xe4tt, mm",oc="Producing and editing photos of weddings, sport events, mingle, portraits, etc",lc="Ansvar f\xf6r enskid firma",dc="Responsible for own company",bc="Own company",xc="Own company |  2007 - 2021",hc="Mattknuten, Stenungsund",Oc="Mattknuten",pc="2007 - 2021",uc="F\xd6RS\xc4LJNING",mc="SALES",gc="Vanligt f\xf6rekommande uppgifter som butiksbitr\xe4de inom detaljhandeln",wc="Common work as a shop assistant",fc=function(){var e=Object(n.useState)("none"),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useContext)(g),r=Object(a.a)(s,1)[0];return Object(n.useEffect)((function(){}),[r]),Object(u.jsx)("div",{className:"page-wrapper",children:Object(u.jsx)("div",{className:"mobile-wrapper",children:Object(u.jsxs)("div",{className:"education-worklife-desktop-wrapper",children:[Object(u.jsxs)("div",{className:"education-worklife-desktop-education-wrapper",children:[Object(u.jsx)("h2",{className:"education-worklife-desktop-education-title font-upper",children:Object(u.jsx)(v,{textEng:Ht,textSwe:Vt})}),Object(u.jsxs)("div",{className:"education-worklife-desktop-category-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:ot}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:qt,textSwe:lt})}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:Ut,textSwe:jt})}),Object(u.jsx)("p",{className:"education-worklife-desktop-category-grades-link",onClick:function(){i("none"===c?"grid":"none")},children:Object(u.jsx)(v,{textEng:Zt,textSwe:Yt})}),Object(u.jsxs)("div",{className:"education-worklife-desktop-category-grades-wrapper",style:{display:c},children:[Object(u.jsx)("p",{className:"course1-desktop",children:Object(u.jsx)(v,{textEng:At,textSwe:St})}),Object(u.jsx)("p",{className:"grade1-desktop",children:Tt}),Object(u.jsx)("p",{className:"course2-desktop",children:Object(u.jsx)(v,{textEng:Mt,textSwe:Nt})}),Object(u.jsx)("p",{className:"grade2-desktop",children:Tt}),Object(u.jsx)("p",{className:"course3-desktop",children:Object(u.jsx)(v,{textEng:Bt,textSwe:Et})}),Object(u.jsx)("p",{className:"grade3-desktop",children:Tt}),Object(u.jsxs)("p",{className:"course4-desktop",children:["P",Object(u.jsx)(v,{textEng:Rt,textSwe:Ct})]}),Object(u.jsx)("p",{className:"grade4-desktop",children:Tt}),Object(u.jsx)("p",{className:"course5-desktop",children:Object(u.jsx)(v,{textEng:Dt,textSwe:yt})}),Object(u.jsx)("p",{className:"grade5-desktop",children:Tt}),Object(u.jsx)("p",{className:"course6-desktop",children:Object(u.jsx)(v,{textEng:Pt,textSwe:Ft})}),Object(u.jsx)("p",{className:"grade6-desktop",children:Tt})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:rt}),Object(u.jsx)("h4",{children:at}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:Xt,textSwe:st})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:$t}),Object(u.jsx)("h4",{children:ec}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:cc,textSwe:tc})})]})]})]}),Object(u.jsxs)("div",{className:"education-worklife-desktop-worklife-wrapper",children:[Object(u.jsx)("h2",{className:"education-worklife-desktop-worklife-title font-upper",children:Object(u.jsx)(v,{textEng:Kt,textSwe:Gt})}),Object(u.jsxs)("div",{className:"education-worklife-desktop-category-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:ft}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:Wt,textSwe:ut})}),Object(u.jsx)("h4",{children:vt}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:It,textSwe:mt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:_t,textSwe:gt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:Jt,textSwe:wt})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Object(u.jsx)(v,{textEng:xc,textSwe:nc})}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:ac,textSwe:rc})}),Object(u.jsx)("h4",{children:sc}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:oc,textSwe:jc})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:dc,textSwe:lc})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:ht}),Object(u.jsx)("h4",{children:dt}),Object(u.jsx)("h4",{children:pt}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:zt,textSwe:bt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:Qt,textSwe:xt})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:hc}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:mc,textSwe:uc})}),Object(u.jsx)("h4",{children:pc}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:wc,textSwe:gc})})})]})]})]})]})})})},kc=(c(42),function(){var e=Object(n.useState)("none"),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useContext)(g),r=Object(a.a)(s,1)[0];return Object(n.useEffect)((function(){}),[r]),Object(u.jsx)("div",{className:"page-wrapper",children:Object(u.jsx)("div",{className:"mobile-wrapper",children:Object(u.jsxs)("div",{className:"education-worklife-mobile-wrapper",children:[Object(u.jsxs)("div",{className:"education-worklife-mobile-worklife-wrapper",children:[Object(u.jsxs)("h2",{className:"education-worklife-mobile-worklife-title font-upper",children:[" ",Object(u.jsx)(v,{textEng:Kt,textSwe:Gt})]}),Object(u.jsxs)("div",{className:"education-worklife-mobile-category-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:kt}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:Wt,textSwe:ut})}),Object(u.jsx)("h4",{children:vt}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:It,textSwe:mt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:_t,textSwe:gt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:Jt,textSwe:wt})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Object(u.jsx)(v,{textEng:bc,textSwe:ic})}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:ac,textSwe:rc})}),Object(u.jsx)("h4",{children:sc}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:oc,textSwe:jc})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:dc,textSwe:lc})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Ot}),Object(u.jsx)("h4",{children:dt}),Object(u.jsx)("h4",{children:pt}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:zt,textSwe:bt})}),Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:Qt,textSwe:xt})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Oc}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:mc,textSwe:uc})}),Object(u.jsx)("h4",{children:pc}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(v,{textEng:wc,textSwe:gc})})})]})]})]}),Object(u.jsxs)("div",{className:"education-worklife-mobile-education-wrapper",children:[Object(u.jsx)("h2",{className:"education-worklife-mobile-education-title font-upper",children:Object(u.jsx)(v,{textEng:Ht,textSwe:Vt})}),Object(u.jsxs)("div",{className:"education-worklife-mobile-category-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:ot}),Object(u.jsx)("h4",{children:Object(u.jsx)(v,{textEng:qt,textSwe:lt})}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:Ut,textSwe:jt})}),Object(u.jsx)("p",{className:"education-worklife-mobile-category-grades-link",onClick:function(){i("none"===c?"grid":"none")},children:Object(u.jsx)(v,{textEng:Zt,textSwe:Yt})}),Object(u.jsxs)("div",{className:"education-worklife-mobile-category-grades-wrapper",style:{display:c},children:[Object(u.jsx)("p",{className:"course1-desktop",children:Object(u.jsx)(v,{textEng:At,textSwe:St})}),Object(u.jsx)("p",{className:"grade1-desktop",children:Lt}),Object(u.jsx)("p",{className:"course2-desktop",children:Object(u.jsx)(v,{textEng:Mt,textSwe:Nt})}),Object(u.jsx)("p",{className:"grade2-desktop",children:Lt}),Object(u.jsx)("p",{className:"course3-desktop",children:Object(u.jsx)(v,{textEng:Bt,textSwe:Et})}),Object(u.jsx)("p",{className:"grade3-desktop",children:Lt}),Object(u.jsx)("p",{className:"course4-desktop",children:Object(u.jsx)(v,{textEng:Rt,textSwe:Ct})}),Object(u.jsx)("p",{className:"grade4-desktop",children:Lt}),Object(u.jsx)("p",{className:"course5-desktop",children:Object(u.jsx)(v,{textEng:Dt,textSwe:yt})}),Object(u.jsx)("p",{className:"grade5-desktop",children:Lt}),Object(u.jsx)("p",{className:"course6-desktop",children:Object(u.jsx)(v,{textEng:Pt,textSwe:Ft})}),Object(u.jsx)("p",{className:"grade6-desktop",children:Lt})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:rt}),Object(u.jsx)("h4",{children:at}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:Xt,textSwe:st})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:$t}),Object(u.jsx)("h4",{children:ec}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:cc,textSwe:tc})})]})]})]})]})})})}),vc=function(){var e=G().width;return Object(u.jsx)(u.Fragment,{children:e<=L?Object(u.jsx)(kc,{}):Object(u.jsx)(fc,{})})},Sc=(c(43),"projekt"),Nc="projects",Ec="ETOLOG.SE",Cc="Designade och byggde p\xe5 egen hand en webbapplikation i ReactJS, MongoDB och NodeJS, med versionhantering via Github. Backend styrs av en adminpanel med inlogg d\xe4r man kan l\xe4gga till, ta bort och redigera etologer.",yc="Designed and created this webapplication on my own in ReactJS, MongoDB and NodeJS, with version management in Github. Back end is controlled by an adminpanel with sign a in-function where the user can add, remove and edit etologs.",Fc="Bes\xf6k sidan",Ac="Visit page",Mc=function(){return Object(u.jsx)("div",{className:"page-wrapper",children:Object(u.jsx)("div",{className:"desktop-wrapper",children:Object(u.jsxs)("div",{className:"portfolio-desktop-wrapper",children:[Object(u.jsx)("h1",{className:"portfolio-desktop-title",children:Object(u.jsx)(v,{textEng:Nc,textSwe:Sc})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Ec}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:yc,textSwe:Cc})}),Object(u.jsx)("p",{onClick:function(){return window.open("https://etolog.se/")},className:"portfolio-link",children:Object(u.jsx)(v,{textEng:Ac,textSwe:Fc})})]})]})})})},Bc=(c(44),function(){return Object(u.jsx)("div",{className:"page-wrapper",children:Object(u.jsx)("div",{className:"mobile-wrapper",children:Object(u.jsxs)("div",{className:"portfolio-mobile-wrapper",children:[Object(u.jsx)("h1",{className:"portfolio-mobile-title",children:Object(u.jsx)(v,{textEng:Nc,textSwe:Sc})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:Ec}),Object(u.jsx)("p",{children:Object(u.jsx)(v,{textEng:yc,textSwe:Cc})}),Object(u.jsx)("p",{onClick:function(){return window.open("https://etolog.se/")},className:"portfolio-link",children:Object(u.jsx)(v,{textEng:Ac,textSwe:Fc})})]})]})})})}),Rc=function(){var e=G().width;return Object(u.jsx)(u.Fragment,{children:e<=L?Object(u.jsx)(Bc,{}):Object(u.jsx)(Mc,{})})},Dc=(c(45),"Philip Rasmusson"),Pc="frontendutvecklare",Tc="frontend developer",Vc=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"main-line"}),Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)("h1",{className:"title-name font-upper",children:Dc}),Object(u.jsx)("h3",{className:"title-desc font-upper",children:Object(u.jsx)(v,{textEng:Tc,textSwe:Pc})})]}),Object(u.jsx)("div",{className:"social-media-wrapper",children:P()})]})},Gc=(c(46),function(){return Object(u.jsxs)("div",{className:"header-mobile",children:[Object(u.jsx)("div",{className:"main-line-mobile"}),Object(u.jsxs)("div",{className:"title-wrapper-mobile",children:[Object(u.jsx)("h1",{className:"title-name-mobile font-upper",children:Dc}),Object(u.jsx)("h3",{className:"title-desc-mobile font-upper",children:Object(u.jsx)(v,{textEng:Tc,textSwe:Pc})})]}),Object(u.jsx)("div",{className:"social-media-mobile-wrapper",children:P()})]})}),Lc=function(){var e=G().width;return Object(u.jsx)(u.Fragment,{children:e<=L?Object(u.jsx)(Gc,{}):Object(u.jsx)(Vc,{})})},Hc=(c(47),function(){var e=Object(n.useContext)(g),t=Object(a.a)(e,2),c=t[0],i=t[1],s=function(){i("english"===c?"":"english")};return Object(u.jsxs)("div",{className:"footer-wrapper",children:[Object(u.jsx)("div",{children:"english"===c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{onClick:function(){return s()},className:"footer-icon-inactive",children:"\ud83c\uddf8\ud83c\uddea"}),"  ",Object(u.jsx)("span",{className:"footer-icon-active",children:"\ud83c\uddec\ud83c\udde7"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"footer-icon-active",children:"\ud83c\uddf8\ud83c\uddea"}),"   ",Object(u.jsx)("span",{onClick:function(){return s()},className:"footer-icon-inactive",children:"\ud83c\uddec\ud83c\udde7"})]})}),Object(u.jsx)("p",{className:"footer-copyright",children:"Design Philip Rasmusson | 2021 All Rights Reserved"})]})}),Jc=function(e){return Object(u.jsxs)(J.a,{children:[e.children,Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(Lc,{}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:o.aboutMeView,component:it}),Object(u.jsx)(p.a,{exact:!0,path:o.educationView,component:vc}),Object(u.jsx)(p.a,{exact:!0,path:o.portfoliView,component:Rc})]}),Object(u.jsx)(Hc,{})]})]})},_c=function(){return Object(u.jsx)(w,{children:Object(u.jsx)(Jc,{children:Object(u.jsx)(H,{})})})},Ic=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_c,{})}),document.getElementById("root")),Ic()}},[[48,1,2]]]);
//# sourceMappingURL=main.c939bf47.chunk.js.map
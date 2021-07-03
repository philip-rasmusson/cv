'use strict'


let english = true

const selectLanguage = () => {
  english ? english = false : english = true
  setLanguage()
}

const contactInfo = (show, text) => {
  show ? document.getElementById('contact-info').innerHTML = `${text}` : document.getElementById('contact-info').innerHTML = `${text}`
}

const setLanguage = () => {
  if (english) {
    document.getElementById('title-desc').innerHTML = 'frontend developer'
    document.getElementById('education-title').innerHTML = 'education'
    document.getElementById('education-item-one-title').innerHTML = '.NET / WEB DEVELOPMENT'
    document.getElementById('education-item-one-date').innerHTML = 'Aug 2020 - July 2022'
    document.getElementById('education-item-two-title').innerHTML = 'MUSIC PRODUCTION / SOUND ENGENEERING'
    document.getElementById('competence-title').innerHTML = 'competence'
    document.getElementById('profile-title').innerHTML = 'profile'
    document.getElementById('profile-desc').innerHTML = `Curious, tech interested, professional photographer and artist, shifting gear to focus on a new career in frontend development and digital design. Dreams big and sees only possibilities, driven by a passion for creativity and by problem solving in digital development and design. \n\nBelivies that working together in an agile envoriment is the best way to reach greater hights!`

  } else {
    document.getElementById('title-desc').innerHTML = 'frontend-utvecklare'
    document.getElementById('education-title').innerHTML = 'utbildning'
    document.getElementById('education-item-one-title').innerHTML = '.NET- / WEBUTVECKLING'
    document.getElementById('education-item-one-date').innerHTML = 'Aug 2020 - juli 2022'
    document.getElementById('education-item-two-title').innerHTML = 'MUSIKPRODUKTION/LJUDTEKNIK'
    document.getElementById('competence-title').innerHTML = 'kompetens'
    document.getElementById('profile-title').innerHTML = 'profil'
    document.getElementById('profile-desc').innerHTML = `Nyfiken, teknikintresserad, fotograferande bildkonstnär sadlar om för raketkarriär inom webbutveckling och
    digital design . Drömmer stort och ser bara möjligheter, drivs av skapandepassion och problemlösning inom
    digital utveckling och design, med stort behov av kreativt utlopp.`
  }
}

setLanguage()
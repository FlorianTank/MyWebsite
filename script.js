const headlineProjects = document.querySelector('#headline-projects');
const projectArea = document.querySelector('#projects');

const headlineSkills = document.querySelector('#headline-skills');
const skillsArea = document.querySelector('#skills');

const headlineResume = document.querySelector('#headline-resume');
const resumeArea = document.querySelector('#resume');

const headlineContact = document.querySelector('#headline-contact');
const contactArea = document.querySelector('#contact');

headlineProjects.addEventListener('click', function() {
  window.scrollTo({ top: projectArea.offsetTop, behavior: 'smooth' });
});

headlineSkills.addEventListener('click', function() {
  window.scrollTo({ top: skillsArea.offsetTop, behavior: 'smooth' });
});

headlineResume.addEventListener('click', function() {
  window.scrollTo({ top: resumeArea.offsetTop, behavior: 'smooth' });
});

headlineContact.addEventListener('click', function() {
  window.scrollTo({ top: contactArea.offsetTop, behavior: 'smooth' });
});
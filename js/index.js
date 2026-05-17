document.body.appendChild(document.createElement('footer'));

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `${thisYear} Samantha Shannon`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.className = 'list-item';
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
    }


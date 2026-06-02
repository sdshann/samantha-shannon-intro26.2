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

for (let i = 0; i < skills.length; i++) { //creating a list item for each skill in the array and adding it to the Skills section. 
    const skill = document.createElement('li');
    skill.className = 'list-item';
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
    }

const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span> wrote: ${usersMessage}</span>`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

fetch("https://api.github.com/users/sdshann/repos") //accessing the GitHub API for my repositories
    .then(response => {
        return response.json();
    })
    .then(response => {
        const repositories = response;
        console.log(repositories);

        const projectSection = document.querySelector('#Projects');
        const projectList = projectSection.querySelector('ul');
        for(let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(error => console.error('Error fetching repositories:', error));





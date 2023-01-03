/* navigation bar  */

const myNav = document.getElementById('nav-bar'),
     myNavLinks = document.querySelectorAll('.nav-link'),
     openBtn = document.getElementById('open'),
     closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function () {
  myNav.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  myNav.classList.remove('show');
});
myNavLinks.forEach((link) => {
  link.addEventListener('click', function () {
    myNav.classList.remove('show');
    myNavLinks.forEach(link => {
      link.classList.remove('indicator')
      link.classList.remove('active')
    })
    link.classList.add('active')
  });
});

document.addEventListener('click', function (e) {
  if (e.target.id !== 'open') {
    myNav.classList.remove('show');
  }
})


//elements of project tabs

const btns = document.getElementsByClassName('btn'),
      btnsContainer = document.querySelector('.btn-container'),
      content = document.getElementsByClassName('content');

btnsContainer.addEventListener('click', function (e) {
  const currBtn = e.target.dataset.id,
        contentToDisplay = document.querySelector(`#${currBtn}`);
  if (currBtn) {
    for (const btn of btns) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    }
    for (const elem of content) {
      elem.style.display = 'none';
      contentToDisplay.style.display = 'grid';
    }
  }
});


// text typing
const descContainer = document.querySelector("#descriptionContainer")
let i = 0;
const desc = `I am Aissa, and I'm a junior frontend developer based in Algeria, I've learnt and still learning front end technologies such as Javascript & css. I like to develope UI using React and other frameworks, I like to stay active. If you fancy a chat
feel free to drop me a line 😊.`;
const speed = 400;

/* type when element is in view */
function typeWriter() {
  const elementTop = descContainer.getBoundingClientRect().top;
  if (elementTop <= (window.innerHeight || document.documentElement.clientHeight)) {
    if (i < desc.length) {
      document.getElementById('description').innerHTML += desc.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
} 


window.addEventListener('scroll', typeWriter)

/* animate the first letter in home section and the line in contact section  */

const line = document.querySelector('.line'),
      firstLetter = document.querySelector('.first-letter');
      
const observer = new IntersectionObserver(function(arr) {
  arr.forEach(elem => {
    if (elem.isIntersecting) {
      const animationClass = elem.target.dataset.animation
      elem.target.classList.add(animationClass);
    } else {
      elem.target.classList.remove(elem.target.dataset.animation);
    }
  });
});

observer.observe(line);
observer.observe(firstLetter);


/* Rotate the firstletter onScroll */
window.addEventListener('scroll', function () {
  firstLetter.style.transform = `rotate(${scrollY / 10}deg)`
})



/* Set section indicators to indicate the current section we are in  */

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  // Update the section indicator to reflect the current scroll position
  sections.forEach(section => {
    const link = document.querySelector(`#${section.id}Link`);
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
});








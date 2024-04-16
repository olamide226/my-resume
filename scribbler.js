// utilities
let get = function (selector, scope) {
  scope = scope || document;
  return scope.querySelector(selector);
};

let getAll = function (selector, scope) {
  scope = scope || document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `Hey there, I am Olamide Adebayo.
            A team-oriented and self-motivated engineer with personal integrity who seeks to drive excellence in implementation of applications to achieve strategic goals. Seeking the opportunity to leverage expertise across various IT platforms to develop and integrate cutting-edge solutions.

            ## my hobbies include ##

            - Playing and watching football
            - Playing video games
            - Exploring
            `;
  var speed = 60;

  function typeItOut() {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function () {
  // get all tab_containers in the document
  let tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (const element of tabContainers) {
    get('.tab__menu', element).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick(event) {
    let scope = event.currentTarget.parentNode;
    let clickedTab = event.target;
    let tabs = getAll('.tab', scope);
    let panes = getAll('.tab__pane', scope);
    let activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (const tab of tabs) {
      tab.classList.remove('active');
    }

    // remove all active pane classes
    for (const pane of panes) {
      pane.classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
let btns = getAll('.js-btn');
let sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (const btn of btns) {
    btn.classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(element, event) {
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
      smoothScrollTo(sections[i], event);
    });
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  let docNav = get('.doc__nav > ul');

  if (docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
let topNav = get('.menu');
let icon = get('.toggle');

window.addEventListener('load', function () {
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

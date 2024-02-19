//Changes the active class of the nav items when the user scrolls

// Get all the nav items
var navItems = document.querySelectorAll('.nav-item');

// Function to remove the active class from all nav items
function removeActiveClass() {
    navItems.forEach(function(navItem) {
        navItem.classList.remove('active');
    });
}

// Function to add the active class to a nav item
function addActiveClass(navItem) {
    navItem.classList.add('active');
}

// Function to check if an element is in viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to update the active nav item
function updateActiveNavItem() {
    for (var i = 0; i < navItems.length; i++) {
        var navItem = navItems[i];
        var sectionId = navItem.getAttribute('href').slice(1);  // Remove the # from the href
        var section = document.getElementById(sectionId);
        if (isInViewport(section)) {
            removeActiveClass();
            addActiveClass(navItem);
            break;
        }
    }
}

// Update the active nav item when the page loads and whenever the user scrolls
window.addEventListener('load', updateActiveNavItem);
window.addEventListener('scroll', updateActiveNavItem);



//Background Mouse Move Effect

const blob = document.getElementById('blob');

document.body.onpointermove = event => {
    const { pageX, pageY } = event;

    blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, {duration: 3000, fill: 'forwards'});
};

//Skill Tree

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function drawLines() {
    var svg = document.getElementById('skill-lines');
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    var centerSkill = document.getElementById('skill-1').getBoundingClientRect();
    var centerX = centerSkill.left + centerSkill.width / 2;
    var centerY = centerSkill.top + centerSkill.height / 2;

    var skills = document.getElementsByClassName('skill');
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].id !== 'skill-1') {
            var skill = skills[i].getBoundingClientRect();
            var skillX = skill.left + skill.width / 2;
            var skillY = skill.top + skill.height / 2;

            var line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', centerY);
            line.setAttribute('x2', skillX);
            line.setAttribute('y2', skillY);
            line.setAttribute('stroke', 'white');
            line.id = 'line-' + skills[i].id;
            svg.appendChild(line);
        }  
    }

    for (var i = 0; i < skills.length; i++) {
        skills[i].addEventListener('mouseover', function() {
            if (this.id !== 'skill-1') { 
                var lines = document.getElementsByTagName('line');
                for (var j = 0; j < lines.length; j++) {
                    lines[j].classList.add('dimmed');
                }

                var line = document.getElementById('line-' + this.id);
                line.classList.remove('dimmed');
            }
        });

        skills[i].addEventListener('mouseout', function() {
            if (this.id !== 'skill-1') {
                var lines = document.getElementsByTagName('line');
                for (var j = 0; j < lines.length; j++) {
                    lines[j].classList.remove('dimmed');
                }
            }
        });
    }
}



window.onload = function() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = 'skill-lines';
    svg.style.width = '100vw';
    svg.style.height = '100vh';
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.zIndex = '-1';
    document.body.appendChild(svg);

    drawLines();
}

window.onresize = drawLines;
window.onscroll = drawLines;
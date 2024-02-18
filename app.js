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
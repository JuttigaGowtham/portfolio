function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a.navLink');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            smoothScroll(targetId);
        });
    });
});

function openWindow(url) {
    var newWindow = window.open(url)
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove("show");

        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function(elements) {
    observer.observe(elements);
})
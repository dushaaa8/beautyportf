document.addEventListener("DOMContentLoaded", function () {
    const text = "I'm a Software Engineering Student.";
    const target = document.querySelector(".hero-about-title");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    window.addEventListener("load", typeWriter);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.example-item, .work-card').forEach(el => {
        observer.observe(el);
    });
})


const accordionTitle = document.querySelectorAll('.accordion-title');

accordionTitle.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', () => {
        console.log(accordionTitle.children[1]);
        accordionTitle.children[1].classList.toggle('rotate-180');
        accordionTitle.classList.toggle('active-header');

        const height = accordionTitle.nextElementSibling.scrollHeight;

        if(accordionTitle.classList.contains('active-header')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = "0px";
        }

    });
})

const mobileMenuButton = document.querySelector('#mobileMenuButton');

mobileMenuButton.addEventListener('click', () => {
   mobileMenuButton.classList.toggle('rotate-180');
    document.querySelector('.mobile-menu').classList.toggle('overflow-hidden');
    if(document.querySelector('.mobile-menu').classList.contains('overflow-hidden')) {
        document.querySelector('.mobile-menu').style.height = '0px';
    } else {
        document.querySelector('.mobile-menu').style.height = '100%';
    }


    document.body.classList.toggle('overflow-hidden');
});
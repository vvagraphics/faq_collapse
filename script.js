// const toggles = document.querySelectorAll('.faq-toggle')


// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })})


    const toggler = document.querySelectorAll('.faq')

toggler.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
    })})
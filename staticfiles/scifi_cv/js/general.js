











function process_contactBtn_click(e){
    console.log('########## process contactBtn click ##############')
    contact_click = e.target.dataset.contactBtnClick
    contactForm = document.querySelector('.contact-form')
    if (contact_click){
        contactForm.classList.toggle('show-contact-form')
    }else{
        // set hide contact form
        contactForm.classList.remove('show-contact-form')
    }
}

function close_contact_form(e){
    console.log('########## close_contact_form ##############')
    contactForm = document.querySelector('.contact-form')
    contactForm.classList.remove('show-contact-form')
}














function watch_grabscroller(scroller){
    const box = document.querySelector(scroller);
    if(box != null){
        let isDown = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;
    
        box.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - box.offsetLeft;
        startY = e.pageY - box.offsetTop;
        scrollLeft = box.scrollLeft;
        scrollTop = box.scrollTop;
        box.style.cursor = 'grabbing';
        });
    
        box.addEventListener('mouseleave', () => {
        isDown = false;
        box.style.cursor = 'grab';
        });
    
        box.addEventListener('mouseup', () => {
        isDown = false;
        box.style.cursor = 'grab';
        });
    
        document.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - box.offsetLeft;
        const y = e.pageY - box.offsetTop;
        const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
        const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
        box.scrollLeft = scrollLeft - walkX;
        box.scrollTop = scrollTop - walkY;
        })

    }else{
        return
    }

};
























function process_django_portfolio_lazyclick(){
    console.log('############ process_django_lazyclick')

    /****************************************************************
     * 
     *  First Method Of Loading the Floating Sidepanel (Portfolio Page)
     * 
     *  When the Folio Item is Clicked, it calls a Django URL.
     *  This then processes the request and sets a flag 'panel-active'
     *  on the 'folio-scroller' element. A dummy click event is triggered
     *  onLoad -setting the click() function on the element. It then renders
     *  the page with the requested folio html to populate the sidepanel
     * 
     *  When the page is rendered the click() event triggers the 
     *  process_pageclick() function as tho it were a normal javascript
     *  click event
     * 
     *  This method enables the contents to be stored in files on the server 
     *  that are dynamicall laoaded when requested. Also allows the possibility
     *  of allowing users to Creat/Update/Delete from the UI. 
     *   
     *****************************************************************/
    //let folio_scroller = document.querySelector('.folio_scroller')
    //let overlay = document.querySelector('.overlay')


    // click flag enabled found. Open slidepanel
    slidepanel = document.querySelector('.folio-slidepanel')
    slidepanel.classList.add('open-folio-slidepanel') // activate sidepanel
    // overlay.classList.add('overlay-enable') // enable overlay
    return

}

/*********************************************************************
 * 
 *  On Click from Event Listener
 *  Close sidepanel
 *  Clear Django foliopanel-active-flag class
 *  remove background overlay
 * 
 ***********************************************************************/
function close_folioSlidepanel(e){
    console.log('############ folio-slidepanel clicked ################')
    console.log('############ close_folioSlidepanel() ################')

    folioSlidepanel = document.querySelector('.folio-slidepanel')
    console.log('folioSlidepanel => ', folioSlidepanel)
    folioSlidepanel.classList.remove('open-folio-slidepanel')
   

    panel_active = document.querySelector('.foliopanel-active-flag') // .foliopanel-active-flag is added by Django to the folio-scroller elenebt
    console.log('panel_active', panel_active)
    panel_active.classList.remove('foliopanel-active-flag') // clear click flag

    // overlay.classList.remove('overlay-enable') // disable overlay

}














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





function process_user_pageclick(e){
    console.log('########## process_pageclick ##############')
    console.log('click on => ', e.target)

    process_django_portfolio_lazyclick()
    process_contactBtn_click(e)

}


function submit_form(formName){
    document.forms[formName].submit();
}









window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed')
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        // document has at least been loaded
        console.log('readystate = ',document.readyState)

         /***********************************************************************
         * 
         *  This adds an automatic 'lazyclick' to the folio-scroller element
         * 
         *  When a click is made on a portfolio item it loads a URL for that item
         *  Django adds the class 'foliopanel-active' on the element class='folio-scroller'
         *  This automatic click is created when this class is detected 
         *  This will then call the javascript to load the corrosponding
         *  side panel with a summary of the portfolio item when the page loads
         * 
         **************************************************************************/
        window.addEventListener('load', function() {
          var folio_lazyclick = document.querySelector('.foliopanel-active-flag'); // .foliopanel-active-flag is set by Django on the folio-scroller when an item is clicked
          console.log('folio_lazyclick => ', folio_lazyclick)
          if(folio_lazyclick!=null){
              folio_lazyclick.click()
              process_django_portfolio_lazyclick()
          }
        });
      
        folioSlidepanel = document.querySelector('.folio-slidepanel')
        console.log('############ main #############')
        console.log('folioSlidePanel => ', folioSlidepanel)
        folioSlidepanel.addEventListener('click', close_folioSlidepanel)

        contactBtn = document.querySelector('.contactBtn')
        contactBtn.addEventListener('click',process_contactBtn_click )

        contactForm_closeBtn = document.getElementById('contactForm-closeBtn')
        console.log('close btn => ', contactForm_closeBtn)
        contactForm_closeBtn.addEventListener('click', close_contact_form)

        

  
        watch_grabscroller('.folio-scroller')
      }

});

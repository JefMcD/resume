

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

watch_grabscroller('.folio-scroller')


function process_pageclick(e){
    console.log('########## process_pageclick ##############')
    console.log('click on => ', e.target)

    function close_job_sidepanels(){
        active_panel = document.querySelector('.show-webdev-panel')
        if(active_panel){
            active_panel.classList.toggle('show-webdev-panel')
        }else{
            active_panel = document.querySelector('.show-artist-panel')
            if(active_panel){
                active_panel.classList.toggle('show-artist-panel')
            }else{
                active_panel = document.querySelector('.show-softeng-panel')
                if(active_panel){
                    active_panel.classList.toggle('show-softeng-panel')
                }
            }
        }
    }

    function close_course_sidepanels(){
        active_panel = document.querySelector('.show-course1-panel')
        if(active_panel){
            active_panel.classList.toggle('show-course1-panel')
        }else{
            active_panel = document.querySelector('.show-artist-panel')
            if(active_panel){
                active_panel.classList.toggle('show-artist-panel')
            }else{
                active_panel = document.querySelector('.show-softeng-panel')
                if(active_panel){
                    active_panel.classList.toggle('show-softeng-panel')
                }
            }
        }
    }

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
    let folio_scroller = document.querySelector('.folio_scroller')
    let panel_active = document.querySelector('.panel_active')
    let overlay = document.querySelector('.overlay')

    if (panel_active != null){
        // click flag enabled found. Open slidepanel
        slidepanel = document.querySelector('.folio-slidepanel')
        slidepanel.classList.toggle('open-folio-slidepanel') // activate transition class
        panel_active.classList.toggle('panel_active') // clear click flag
        // overlay.classList.toggle('overlay-enable') // enable overlay
    }else{
        // No forward Click. Toggle off Slidepanel if On
        slidepanel = document.querySelector('.open-folio-slidepanel')
        if(slidepanel != null){
            slidepanel.classList.toggle('open-folio-slidepanel')
            // overlay.classList.toggle('overlay-enable') // enable overlay
        }
    }

    /********************************************************************
     * 
     *  Second Method Of Loading Floating Sidepanel (Employment Page)
     * 
     *  This method is the standard Javascript Method
     * 
     *  Each employmemt history panel is a hard-coded element which
     *  is hidden off page.
     *  When its corrosponding link is clicked, javascript toggles on the
     *  'show-employment-slidepanel;' class.
     *  When another click is received anywhere else, the class is toggled
     *  off and the sidepanel is hidden again 
     * 
     ********************************************************************/
    //job_click = e.target.classList.contains('job-flag');
    //console.log('job_click => ', job_click)
    job_click = e.target.dataset.jobFlag
    art_tabclick = e.target.dataset.tablinks;
    console.log('art_tabclick => ', art_tabclick)

    if(job_click){ // check if one of the main job boxes is clicked
        target_panel = e.target.dataset.jobType
        console.log('Open =>',target_panel)

        // Close all job panels
        close_job_sidepanels()

        switch(target_panel){
            case 'web-dev':
                console.log('Opening web-dev panel')
                slidepanel = document.querySelector('.webdev-panel')
                slidepanel.classList.toggle('show-webdev-panel')
                return
            case 'artist':
                console.log('opening artist panel')
                slidepanel = document.querySelector('.artist-panel')
                slidepanel.classList.toggle('show-artist-panel')
                return
            case 'soft-eng':
                console.log('opening softeng panel')
                slidepanel = document.querySelector('.softeng-panel')
                slidepanel.classList.toggle('show-softeng-panel')
                return
        }
    }else if (art_tabclick){ // Check art-tab clicked in panel
        console.log('arttab clicked')
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        tab = e.target.dataset.arttab
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tab).style.display = "block";
        e.target.classList.toggle('active');
    }else{
        // Click in empty space away from links.
        // Hide Any active panel
        close_job_sidepanels()
    }

    
    /********************************************************************
     * 
     *  Third Method Of Loading Floating Sidepanel (Education Page)
     * 
     *  This method is the standard Javascript Method
     * 
     *  Each education panel is a hard-coded element which
     *  is hidden off page.
     *  When its corrosponding link is clicked, javascript toggles on the
     *  'show-course-panel;' class.
     *  When another click is received anywhere else, the class is toggled
     *  off and the sidepanel is hidden again 
     * 
     ********************************************************************/
    //course_click = e.target.classList.contains('course-flag');
    
    course_click = e.target.dataset.courseFlag
    console.log('course_click => ', course_click)

    if(course_click){ // check if one of the main job boxes is clicked
        target_panel = e.target.dataset.courseName
        console.log('Open =>',target_panel)

        // Close all job panels
        close_course_sidepanels()

        switch(target_panel){
            case 'course1':
                console.log('Opening course1 panel')
                slidepanel = document.querySelector('.course1-panel')
                slidepanel.classList.toggle('show-course1-panel')
                return
            case 'artist':
                console.log('opening artist panel')
                slidepanel = document.querySelector('.artist-panel')
                slidepanel.classList.toggle('show-artist-panel')
                return
            case 'soft-eng':
                console.log('opening softeng panel')
                slidepanel = document.querySelector('.softeng-panel')
                slidepanel.classList.toggle('show-softeng-panel')
                return
        }
    }else{
        // Click in empty space away from links.
        // Hide Any active panel
        close_job_sidepanels()
    }

}
/***********************************************************************
 * 
 *  This adds an automatic click to the folio-scroller element
 *  It will only trigger the sidepanel when Django has also supplied 
 *  the 'panel-active' flag
 * 
 **************************************************************************/
window.addEventListener('load', function() {
    var element = document.querySelector('.folio-scroller');
    if(element!=null){
        element.click();
    }
    
  });

document.addEventListener('click', process_pageclick)




/***********************************************************************
 * 
 *  Employment Page Tabs Sidepanel
 * 
 *  Each Tab selector is a button that are all contained in a flex box
 * 
 *  Each tab is a div that contains the Content
 *  Display of each is set to none
 * 
 *  When its corrosponding button is clicked the tabcontents
 *  display property is set to block and the display of the others set to none 
 * 
 **************************************************************************/
function open_tab(e, tab_id){
    console.log('####### open_tab ##########')

}
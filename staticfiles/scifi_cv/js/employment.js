











function process_job_click(e){
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
    console.log('######### process_job_click() ##################')

    close_job_sidepanels()
    
    job_click = e.target.dataset.jobFlag
    target_panel = e.target.dataset.jobType

    switch(target_panel){
        case 'web-dev':
            slidepanel = document.querySelector('.webdev-panel')
            slidepanel.classList.add('show-webdev-panel')
            break
        case 'lockdown':
                slidepanel = document.querySelector('.lockdown-panel')
                slidepanel.classList.add('show-lockdown-panel')
                break   
        case 'artist':
            slidepanel = document.querySelector('.artist-panel')
            slidepanel.classList.add('show-artist-panel')
            break
        case 'soft-eng':
            slidepanel = document.querySelector('.softeng-panel')
            slidepanel.classList.add('show-softeng-panel')
            break
    }
    slidepanel.classList.add('active-panel')

}

function process_tab_click(e){
    console.log('############# process_tab_click #############')
    click = e.target
    console.log('click => ', click)
    console.log('click parent => ', click.parentElement)
    console.log('click parent2=> ', e.target.parentElement.parentElement)
    console.log('click parent3=> ', e.target.parentElement.parentElement.parentElement)

    active_panel = e.target.parentElement.parentElement.parentElement
    console.log('active_panel', active_panel)
    job_tabclick = e.target.dataset.tablinks;
    console.log('job_tabclick', job_tabclick)

    // Get all elements in this panel with class="tabcontent" and hide them
    tabcontent = active_panel.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
   
    // FInd the active-tab and remove the class "active-tab"
    active_tab = active_panel.querySelector('.active-tab')
    if (active_tab!=null){
        active_tab.classList.remove('active-tab')
    }

    // AT this point All the Tabs are Inactive
    // and all the tabcontent divs have display: none

    // Add "active-tab" class to the selected tab
    tab = e.target
    tab.classList.add('active-tab');
    console.log('tab => ', tab)

    tabname = e.target.dataset.jobtab
    console.log('tabname => ', tabname)
    // Display the selected tab

    target_tab_content =  document.getElementById(tabname)
    console.log('target tag => ', target_tab_content)
    target_tab_content.style.display = 'block'
}


function close_job_sidepanels(){
    console.log('########## close_job_sidepanels ############')

    job_panels = document.getElementsByClassName('job-panel')
    console.log('job_panels =>', job_panels)
    for (let i = 0; i < job_panels.length; i++) {
        
        job_panels[i].classList.remove('show-webdev-panel')
        job_panels[i].classList.remove('show-artist-panel')
        job_panels[i].classList.remove('show-softeng-panel')
        job_panels[i].classList.remove('show-lockdown-panel')
      }
}






function check_click(e){
    console.log('click on => ', e.target)
}


window.addEventListener('DOMContentLoaded', (e) => {
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        // document has at least been loaded

        contactBtn = document.querySelector('.contactBtn')
        contactBtn.addEventListener('click',process_contactBtn_click )

        contactForm_closeBtn = document.getElementById('contactForm-closeBtn')
        console.log('close btn => ', contactForm_closeBtn)
        contactForm_closeBtn.addEventListener('click', close_contact_form)

        // Add close button event to panel close buttons
        job_panel_closebtns = document.getElementsByClassName('job-panel-closebtn')
        for(i=0; i<job_panel_closebtns.length; i++){
            job_panel_closebtns[i].addEventListener('click', close_job_sidepanels)
        }

        jobs = document.getElementsByClassName('job')
        for(i=0; i<jobs.length; i++){
            jobs[i].addEventListener('click', process_job_click)
        }

        panel_tabs = document.getElementsByClassName('tablinks')
        for(i=0; i<panel_tabs.length; i++){
            panel_tabs[i].addEventListener('click', process_tab_click)
        }

        //document.addEventListener('click',check_click)
      }

});
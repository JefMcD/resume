const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
   },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
   },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED"
  }
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")
    const tableIcon = document.createElement("td")
    tableIcon.textContent = "✈"
    tableRow.append(tableIcon)

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div")
        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)


      }
      tableRow.append(tableCell)
    }
    tableBody.append(tableRow)
  }
}
populateTable() 



function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789"
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
}

function generateTime() {
  let displayHour = hour
  if (hour < 24) {
    hour++
  }
  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = "0" + hour
  }
  return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = ""
  populateTable()
}

















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
    art_tabclick = e.target.dataset.tablinks;

    if(job_click){ // check if one of the main job boxes is clicked
        target_panel = e.target.dataset.jobType

        switch(target_panel){
            case 'web-dev':
                slidepanel = document.querySelector('.webdev-panel')
                slidepanel.classList.toggle('show-webdev-panel')
                return
            case 'artist':
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
    }
}

function close_job_sidepanels(){
    console.log('########## close_job_sidepanels ############')

    job_panels = document.getElementsByClassName('job-panel')
    console.log('job_panels =>', job_panels)
    for (let i = 0; i < job_panels.length; i++) {
        
        console.log('closing job panel =>', job_panels[i])
        job_panels[i].classList.remove('show-webdev-panel')
        job_panels[i].classList.remove('show-artist-panel')
        job_panels[i].classList.remove('show-softeng-panel')
      }
}










window.addEventListener('DOMContentLoaded', (e) => {
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        // document has at least been loaded

        job_panel_closebtns = document.getElementsByClassName('job-panel-closebtn')
        for(i=0; i<job_panel_closebtns.length; i++){
            job_panel_closebtns[i].addEventListener('click', close_job_sidepanels)
        }

        contactBtn = document.querySelector('.contactBtn')
        contactBtn.addEventListener('click',process_contactBtn_click )

        contactForm_closeBtn = document.getElementById('contactForm-closeBtn')
        console.log('close btn => ', contactForm_closeBtn)
        contactForm_closeBtn.addEventListener('click', close_contact_form)

        document.addEventListener('click', process_job_click)
      }

});
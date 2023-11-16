
/********************************************************************************
 * 
 *  Education Cube
 * 
 * 
 * 
 *  
 * 
 *********************************************************************************/

function spinX(e){
    console.log('######### Spin X ##########')
    cube =  document.querySelector('.cube');
    cube.classList.add('spinX')
  }
  function spinY(e){
    console.log('######### Spin Y ##########')
    cube =  document.querySelector('.cube')
    cube.classList.add('spinY')
  }
  function spinZ(e){
    console.log('######### Spin Z ##########')
    cube =  document.querySelector('.cube')
    cube.classList.add('spinZ')
  }

  function end_spin(e){
    console.log('########### end_spin ###########')
    cube.classList.remove('spinX')
    cube.classList.remove('spinY')
    cube.classList.remove('spinZ')

  }


  /******************************************
   * 
   *    Each time you invoke a transform: rotation
   *    it is carried on on the initial state of the cube not the transfomed state
   * 
   *    We therefore have  to record every transformation and store them in the x,y,z data 
   *    then read them back and reapply all the transfomations 
   * 
   * 
   */

  function rotate_X(e){
    console.log('######### rotate_X ############')
    // determine current x,y,z position
    cube =  document.querySelector('.cube')
    console.log('cube => ', cube)

    x = parseInt(cube.dataset.xpos)
    y = parseInt(cube.dataset.ypos)
    z = parseInt(cube.dataset.zpos)
    direction = e.target.dataset.direction

    if (direction == 'up'){

        turnX = x + 90
    }else{
        turnX = x - 90
    }
    cube.dataset.xpos = turnX
    turnX = turnX+'deg'
    turnY = y+'deg'
    turnZ = z+'deg'

    cube.style.transform =  "rotateX(" + turnX+ ")" + 
                            "rotateY(" + turnY+ ")"  +
                            "rotateZ(" + turnZ+ ")"  ;

  }

  function rotate_Y(e){
    console.log('######### rotate_Y ############')
    // determine current x,y,z position
    cube =  document.querySelector('.cube')
    console.log('cube => ', cube)

    x = parseInt(cube.dataset.xpos)
    y = parseInt(cube.dataset.ypos)
    z = parseInt(cube.dataset.zpos)
    direction = e.target.dataset.direction


    if (direction == 'right'){
        turnY = y + 90
    }else{
        turnY = y - 90
    }
    cube.dataset.ypos = turnY
    turnX = x+'deg'
    turnY = turnY+'deg'
    turnZ = z+'deg'

    cube.style.transform =   "rotateX(" + turnX+ ")" + 
                             "rotateY(" + turnY+ ")"  +
                             "rotateZ(" + turnZ+ ")"  ;
 
  }

  function rotate_Z(e){
    console.log('######### rotate_Z ############')
    // determine current x,y,z position
    cube =  document.querySelector('.cube')
    console.log('cube => ', cube)

    x = parseInt(cube.dataset.xpos)
    y = parseInt(cube.dataset.ypos)
    z = parseInt(cube.dataset.zpos)
    direction = e.target.dataset.direction



    if (direction == 'right'){
        turnZ = z + 90
    }else{
        turnZ = z - 90
    }
    cube.dataset.zpos = turnZ
    turnX = x+'deg'
    turnY = y+'deg'
    turnZ = turnZ+'deg'

    cube.style.transform =   "rotateX(" + turnX+ ")" + 
                             "rotateY(" + turnY+ ")"  +
                             "rotateZ(" + turnZ+ ")"  ;
 
  }


  function reset(e){
    console.log('######### reset ############')
    // determine current x,y,z position
    cube =  document.querySelector('.cube')

    x = 0
    y = 0
    z = 0

    cube.dataset.xpos = x
    cube.dataset.ypos = y
    cube.dataset.zpos = z
    turnX = x+'deg'
    turnY = y+'deg'
    turnZ = z+'deg'

    cube.style.transform =   "rotateX(" + turnX+ ")" + 
                             "rotateY(" + turnY+ ")"  +
                             "rotateZ(" + turnZ+ ")"  ;
  }    
    


  function rotate_preset1(e){
    cube =  document.querySelector('.cube')
    turnX = 200 + 'deg'
    turnY = 250 + 'deg'
    turnZ = -180 + 'deg'
    cube.style.transform =    "rotateX(" + turnX+ ")" + 
                              "rotateY(" + turnY+ ")"  +
                              "rotateZ(" + turnZ+ ")"  ;
  }

  function rotate_preset2(e){
    cube =  document.querySelector('.cube')
    cube.style.transform = "rotate3d(1,1,1,90deg)"
  }

/*

this was used for removing classes that performed transitioned but it no longer done lilke that
  cube = document.querySelector('.cube')
  cube.addEventListener('transitionend', end_spin)
  */

  //// Top Buttons ///////
  /*
  rx_btn = document.querySelector('#rotate-x');
  console.log('rx-btn => ', rx_btn)
  rx_btn.addEventListener('click', spinX)
  
  ry_btn = document.querySelector('#rotate-y');
  console.log('ry-btn => ', ry_btn)
  ry_btn.addEventListener('click', spinY)

  rz_btn = document.querySelector('#rotate-z');
  console.log('rz-btn => ', rz_btn)
  rz_btn.addEventListener('click', spinZ)
  /// end Top Buttons ///
*/



  /// Bottom Buttons ///
  /*
  rxup_btn = document.querySelector('#rotate-xup');
  rxup_btn.addEventListener('click', rotate_X)

  rxdwn_btn = document.querySelector('#rotate-xdwn');
  rxdwn_btn.addEventListener('click', rotate_X)


  ryr_btn = document.querySelector('#rotate-yr');
  ryr_btn.addEventListener('click', rotate_Y)

  ryl_btn = document.querySelector('#rotate-yl');
  ryl_btn.addEventListener('click', rotate_Y)


  rzl_btn = document.querySelector('#rotate-zl');
  rzl_btn.addEventListener('click', rotate_Z)

  rzr_btn = document.querySelector('#rotate-zr');
  rzr_btn.addEventListener('click', rotate_Z)

*/
  /// End Bottom Buttons ///


  /// Preset Buttons ///
  /*
  pre1_btn = document.querySelector('#preset-1');
  pre1_btn.addEventListener('click', rotate_preset1)

  pre2_btn = document.querySelector('#preset-2');
  pre2_btn.addEventListener('click', rotate_preset2)

  reset_btn = document.querySelector('#reset');
  reset_btn.addEventListener('click', reset)
*/
  /// End Preset Btns
  
  
  /*
  const element = document.querySelector('.cube');

  element.addEventListener('mouseout', () => {
    element.classList.add('reverse-animation');
  });

  element.addEventListener('transitionend', () => {
    element.classList.remove('reverse-animation');
  });

  */

















function process_course_click(e){
    /********************************************************************
 * 
 *  Third Method Of Loading Floating Sidepanel (Education Page)
 * 
 *  This method is the standard Javascript Method
 * 
 *  Each education panel is a hard-coded element which
 *  is hidden off page.
 *  When its corrosponding link is clicked, javascript toggles on the
 *  'show-panel;' class.
 *  When another click is received anywhere else, the class is toggled
 *  off and the sidepanel is hidden again 
 * 
 ********************************************************************/
    console.log('########## process_course_click ##############')

    course_click = e.target.dataset.courseclickFlag
    console.log('course_click => ', course_click)

    target_panel = e.target.dataset.coursePanel
    console.log('Open =>',target_panel)

    // Close all course panels
    close_course_sidepanels()

    slidepanel = document.querySelector('.'+target_panel)
    console.log('slidepanel =>',slidepanel)
    slidepanel.classList.toggle('show-course-panel')


}


function close_course_sidepanels(){
  console.log('########## close_course_sidepanels ############')

  course_panels= document.getElementsByClassName('course-panel')
  for (let i = 0; i < course_panels.length; i++) {
      console.log('closing course panel =>', course_panels[i])
      course_panels[i].classList.remove('show-course-panel')
    }
}







function get_spin_coordinates(target_face){
    console.log('######### get_spin_coordinates #############')
    console.log('target_face => ', target_face)
    coords = []
    switch(target_face){
        case 'cube-front':
            coords = [0,0,0]
            return(coords);
        case 'cube-back':
            coords = [0,180,0]
            return(coords);
        case 'cube-left':
            coords = [0,90,0]
            return(coords);
        case 'cube-right':
            coords = [0,-90,0]
            console.log('coords => ', coords)
            return(coords);
        case 'cube-top':
            coords = [-90,0,0]
            return(coords);
        case 'cube-bottom':
            coords = [90,0,0]
            return(coords);
    }
}

function spin_course_cube(e){
    console.log('######### spin_course_cube ##########')
    target_face = e.target.dataset.cubeface
    console.log('target_face => ', target_face)
    cube =  document.querySelector('.cube')

    // determing current position of cube
    x = cube.dataset.xpos
    y = cube.dataset.ypos
    z = cube.dataset.zpos

    // Appliying a transform will overwrite any previous transform 
    // and it will be applied to the default state ie The Front Face
    
    // Determine the transition needed to reach the target_face
    spin_coordinates = get_spin_coordinates(target_face)

    // Apply the transform
    turnX = spin_coordinates[0]+'deg'
    turnY = spin_coordinates[1]+'deg'
    turnZ = spin_coordinates[2]+'deg'
    cube.style.transform =   "rotateX(" + turnX+ ")" + 
                             "rotateY(" + turnY+ ")"  +
                             "rotateZ(" + turnZ+ ")"  ;


    // Update the cube co-ordinates in case you need them
    cube.dataset.xpos = spin_coordinates[0]
    cube.dataset.ypos = spin_coordinates[1]
    cube.dataset.zpos = spin_coordinates[2]

}

function popup_slidepanel(e){
  console.log('########## popup_slidepanel ##############')


  target_panel = e.target.dataset.coursepanel
  console.log('Open =>',target_panel)

  // Close all course panels
  close_course_sidepanels()

  slidepanel = document.querySelector('.'+target_panel)
  console.log('slidepanel =>',slidepanel)
  slidepanel.classList.toggle('show-course-panel')

}

function forward_click(e){
  console.log('####### forward_click ########')
  if(window.innerWidth < 850){
    // pop up slidepanel
    popup_slidepanel(e)
  }else{
    // rotate cube
    spin_course_cube(e)
  }
}





  window.addEventListener('DOMContentLoaded', (e) => {
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        // document has at least been loaded

        contactBtn = document.querySelector('.contactBtn')
        contactBtn.addEventListener('click',process_contactBtn_click )

        contactForm_closeBtn = document.getElementById('contactForm-closeBtn')
        contactForm_closeBtn.addEventListener('click', close_contact_form)


        course_panel_closebtns = document.getElementsByClassName('course-panel-closebtn')
        for(i=0; i<course_panel_closebtns.length; i++){
            course_panel_closebtns[i].addEventListener('click', close_course_sidepanels)
        }


        courses = document.getElementsByClassName('right-container')
        n = courses.length
        for(i=0; i<n; i++){
            //courses[i].addEventListener('click', process_course_click)
            courses[i].addEventListener('click', forward_click)
        }
        //document.addEventListener('click', process_course_click)
      }

});
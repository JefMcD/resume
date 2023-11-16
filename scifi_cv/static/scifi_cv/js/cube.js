
  
  
  
  

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


  cube = document.querySelector('.cube')
  cube.addEventListener('transitionend', end_spin)
  

  //// Top Buttons ///////
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




  /// Bottom Buttons ///
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


  /// End Bottom Buttons ///


  /// Preset Buttons ///
  pre1_btn = document.querySelector('#preset-1');
  pre1_btn.addEventListener('click', rotate_preset1)

  pre2_btn = document.querySelector('#preset-2');
  pre2_btn.addEventListener('click', rotate_preset2)

  reset_btn = document.querySelector('#reset');
  reset_btn.addEventListener('click', reset)

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

var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' ),
    btnNo = btn.querySelector( '.btn-back .no' );

var titleArr = ["1","2","3","4","5"]


var currentIndex = 0
var isShow = false


window.onload = function(){

};

function aClick(){
  if (isShow){return}
  show()
  isShow = true
}


function show(){
  setTitle()
  var mx = 1039 - 390,
      my = 411 - 977;
  var w = 200,
      h = 80;
  var directions = [
    { id: 'top', x: w/2, y: 0 },
    { id: 'right', x: w, y: h/2 },
    { id: 'bottom', x: w/2, y: h },
    { id: 'left', x: 0, y: h/2 }
  ];

  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  btn.setAttribute( 'data-direction', directions.shift().id );
  btn.classList.add( 'is-open' );
}



function setTitle(){
  var obj = document.getElementById("title-t");
  obj.innerHTML= titleArr[currentIndex];
}


btnYes.addEventListener( 'click', function( event ) {	
  btn.classList.remove( 'is-open' );
  setTimeout("cycleShow()",1000)
} );


btnNo.addEventListener( 'click', function( event ) {
    btn.classList.remove( 'is-open' );
    setTimeout("hideBtn()",1000)
  currentIndex = 0
  isShow = false
} );


function hideBtn(){
  var obj = document.getElementById("bg-btn");
  var bg =  document.getElementById("content");
  obj.style.display = 'none'
  bg.style.display = 'block'
  var content =  document.getElementById("content-p");
  content.innerHTML = '的深V <br/> 送到公司盾构法看反馈给 <br/>阿莉芙拉嘎客服'
}


function cycleShow(){
  currentIndex++
  if (titleArr[currentIndex]=='2'){
    var obj = document.getElementById("title-t")
    var obj1 = document.getElementById("title-p")
    obj.style.display = 'none'
    obj1.style.display = 'block'

  }else {
    var obj = document.getElementById("title-t")
    var obj1 = document.getElementById("title-p")
    obj.style.display = 'block'
    obj1.style.display = 'none'
  }

  if (titleArr[currentIndex] == '3'){
    window.location.href="http://www.baidu.com"
    return
  }
    setTitle()
    show()
}

function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}
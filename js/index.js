var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' ),
    btnNo = btn.querySelector( '.btn-back .no' );

var titleArr = ["请输入性别,例:'男'或'女'","请输入你的姓名","你的微信号是什么","我以前说你长得像谁"]
var answerArr = ["女","666","ggg","佐佐木希"]
var currentIndex = 0
var isShow = false
//
var urlArr = [
    "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E7%94%B7%E5%A3%AB%E6%AD%A2%E6%AD%A5&rsv_pq=9da2cf2300024ae6&rsv_t=29f5C0VMXxDHKtfBO%2B9jQG2BBBPzzKGl2x9v9hMSnQAYBrGGk26wcFWpUAk&rqlang=cn&rsv_enter=1&rsv_sug3=18&rsv_sug1=16&rsv_sug7=100",
    "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=Not%20You&rsv_pq=fe70ec2700043e2d&rsv_t=39f6UWu0R42EgccNkY2LRZ%2BwmhWYJw089xkU%2BacLQy8LF%2FXsS4AJxbxJn1E&rqlang=cn&rsv_enter=1&rsv_sug3=8&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&inputT=2782&rsv_sug4=3445",
    "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%88%AB%E9%97%B9&oq=%25E4%25B8%2580%25E8%25BE%25B9%25E5%258E%25BB%25E5%2590%25A7&rsv_pq=b9d851a300045506&rsv_t=b9b9cPbBP38cdNufR4d34odYDyi0QnAhV7Ey56XP8Nc67D6cLNZAnzHniNo&rqlang=cn&rsv_enter=0&inputT=8210&rsv_sug3=36&rsv_sug1=30&rsv_sug7=100&rsv_sug4=55734",
    "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E4%BB%94%E7%BB%86%E6%83%B3%E6%83%B3%20%E6%8F%90%E7%A4%BA%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%98%9F&rsv_pq=aca1155d000270a5&rsv_t=3b3cbxWQBFeoIgB1CCEsgF%2FKKTQoxr3zxU75PbdWSZnY%2Fzp5HI5lwi%2B9Mn0&rqlang=cn&rsv_enter=1&rsv_sug3=37&rsv_sug1=18&rsv_sug7=100&rsv_sug2=0&inputT=17601&rsv_sug4=36742",
]

window.onload = function(){
  console.log("界面刷新")
  reStar()
};

function aClick(){
  if (isShow){return}
  show()
  isShow = true
}



function show(){
  clearInputContent()
  setPlaceholder();
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

function reStar(){
  currentIndex = 0
  isShow = false
}


function setPlaceholder(){
  var obj = document.getElementById("content-input");
  obj.setAttribute("placeholder",titleArr[currentIndex])
}

function clearInputContent(){
  var obj = document.getElementById("content-input")
  obj.value = ''
}


btnYes.addEventListener( 'click', function( event ) {	
  btn.classList.remove( 'is-open' );
  var cStr = document.getElementById("content-input").value
  var aStr = answerArr[currentIndex]
  if (cStr !== aStr){
    window.location.href = urlArr[currentIndex]
    return
  }

  if(currentIndex == (titleArr.length - 1)){
    hideBtn()
    return
  }
  currentIndex++
  setTimeout("show()",1000)
} );


btnNo.addEventListener( 'click', function( event ) {
    btn.classList.remove( 'is-open' );
    window.location.href = ''
} );


function hideBtn(){
  var obj = document.getElementById("bg-btn");
  var bg =  document.getElementById("content");
  obj.style.display = 'none'
  bg.style.display = 'block'
  var content =  document.getElementById("content-p");
  content.innerHTML = '的深V <br/> 送到公司盾构法看反馈给 <br/>阿莉芙拉嘎客服'
}


function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}
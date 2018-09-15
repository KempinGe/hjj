var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' ),
    btnNo = btn.querySelector( '.btn-back .no' );

var titleArr = ["请输入性别,例:'男'或'女'","请输入你的姓名","你的微信号是什么","我以前说你长得像谁"]
var answerArr = ["女","何静","jjjsyds","佐佐木希"]
//var answerArr = ["1","2","3","4"]
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
  currentIndex = getCookie()
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
    currentIndex = 0
    setCookie()
    hideBtn()
    return
  }
  currentIndex++
  setCookie()
  setTimeout("show()",1000)
} );


btnNo.addEventListener( 'click', function( event ) {
    btn.classList.remove( 'is-open' );
    window.location.href = ''
} );

function setCookie(){
  var date=new Date();
//将date设置为过去的时间

  date.setTime(date.getTime()-10000);
//将userId这个cookie删除

  document.cookie="cur=" + currentIndex + "; expire="+date.toGMTString();
}

function getCookie(){
  var strCookie=document.cookie;
  var arrCookie=strCookie.split("; ");
  for(var i=0;i<arrCookie.length;i++){
    var arr=arrCookie[i].split("=");
    if(arr[0] === 'cur') return parseInt(arr[1]);
  }
  return 0;
}

function hideBtn(){
  var obj = document.getElementById("bg-btn");
  var bg =  document.getElementById("content");
  obj.style.display = 'none'
  bg.style.display = 'block'
  var content =  document.getElementById("content");
  content.innerHTML = "<p>你好: </p> <p> &nbsp;&nbsp;&nbsp;&nbsp;我很奇怪你为什么主动该给我发张好人卡,我又没有跟你表白或者要求什么,我只是需要一个符号或者象征什么的.我认识你的时候刚跟前女友分手不久,可能是找到了宣泄口吧.<br/> </p> <p> &nbsp;&nbsp;&nbsp;&nbsp;我跟你聊了挺长时间了,算是大概有个了解吧,有时候挺替你担心的,(此处应有说教),但是并没有,道理不是真理,所以不能套用在每个人身上.&nbsp; 最后,并不想问你是正爱慕谁/等待谁/或者干脆单身主义,只希望你能幸福吧. </p> <p> &nbsp;&nbsp;&nbsp;&nbsp;一个小小建议,有人让我明白了一个刻骨铭心的道理那就是:要现实,so我觉得单身主义不适合你的,去试着主动接触你喜欢的人吧,记住啊 最是人间留不住,美人辞镜花辞树,要珍惜时光.<br/> </p> <p> &nbsp;&nbsp;<br/> </p>"
}


function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}
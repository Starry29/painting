var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');
var lineWidth = 2.5

autoSetCanvasSize(yyy)

listenToUser(yyy)


var eraserEnabled = false
pen.onclick = function(){
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
  clear.classList.remove('active')
}
eraser.onclick = function(){
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
  clear.classList.remove('active')
}
clear.onclick = function(){
  eraserEnabled = true
  context.clearRect(0, 0, yyy.width, yyy.height);
  clear.classList.add('active')
  eraser.classList.remove('active')
  pen.classList.remove('active')
}
download.onclick = function(){
  var url = yyy.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'canvas'
  a.target = '_blank'
  a.click()
}

black.onclick = function(){
  context.fillStyle = 'black'
  context.strokeStyle = 'black'
  black.classList.add('active')
  red.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
red.onclick = function(){
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  red.classList.add('active')
  black.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
green.onclick = function(){
  context.fillStyle = 'green'
  context.strokeStyle = 'green'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.add('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
blue.onclick = function(){
  context.fillStyle = 'blue'
  context.strokeStyle = 'blue'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  blue.classList.add('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
pink.onclick = function(){
  context.fillStyle = 'pink'
  context.strokeStyle = 'pink'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  pink.classList.add('active')
  blue.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
purple.onclick = function(){
  context.fillStyle = 'purple'
  context.strokeStyle = 'purple'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  purple.classList.add('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
yellow.onclick = function(){
  context.fillStyle = 'yellow'
  context.strokeStyle = 'yellow'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  yellow.classList.add('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  aqua.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
aqua.onclick = function(){
  context.fillStyle = 'aqua'
  context.strokeStyle = 'aqua'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  aqua.classList.add('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  lightcyan.classList.remove('active')
  lightcoral.classList.remove('active')
}
lightcyan.onclick = function(){
  context.fillStyle = 'lightcyan'
  context.strokeStyle = 'lightcyan'
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  lightcyan.classList.add('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
  lightcoral.classList.remove('active')
}
lightcoral.onclick = function(){
  context.fillStyle = 'lightcoral'
  context.strokeStyle = 'lightcoral'
  lightcoral.classList.add('active')
  black.classList.remove('active')
  red.classList.remove('active')
  green.classList.remove('active')
  lightcyan.classList.remove('active')
  blue.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  yellow.classList.remove('active')
  aqua.classList.remove('active')
}

fine.onclick = function(){
  lineWidth = 2.5
  fine.classList.add('active')
  thin.classList.remove('active')
  coarse.classList.remove('active')
  thick.classList.remove('active')

}
thin.onclick = function(){
  lineWidth = 5
  thin.classList.add('active')
  fine.classList.remove('active')
  coarse.classList.remove('active')
  thick.classList.remove('active')
}
coarse.onclick = function(){
  lineWidth = 7.5
  coarse.classList.add('active')
  fine.classList.remove('active')
  thin.classList.remove('active')
  thick.classList.remove('active')
}
thick.onclick = function(){
  lineWidth = 10
  thick.classList.add('active')
  fine.classList.remove('active')
  thin.classList.remove('active')
  coarse.classList.remove('active')
}


/******/

function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

function drawCircle(x, y, radius) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) // 起点
  context.lineWidth = lineWidth
  context.lineTo(x2, y2) // 终点
  context.stroke()
  context.closePath()
}

function listenToUser(canvas) {


  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  // 特性检测
  if(document.body.ontouchstart !== undefined){
    // 触屏设备 苏菲就是个触屏设备啊哥
    canvas.ontouchstart = function(aaa){
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY
      console.log(x,y)
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 20, 20)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.ontouchmove = function(aaa){
      var x = aaa.touches[0].clientX
      var y = aaa.touches[0].clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(){
      using = false
    }
  }else{
    // 非触屏设备
    canvas.onmousedown = function(aaa) {
      var x = aaa.clientX
      var y = aaa.clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.onmousemove = function(aaa) {
      var x = aaa.clientX
      var y = aaa.clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }

    }
    canvas.onmouseup = function(aaa) {
      using = false
    }
  }

}

c = document.createElement('canvas')
c.width = 800
c.height = 600
document.body.appendChild(c)
ctx = c.getContext('2d')
ctx.beginPath()
ctx.fillRect(0,0,800,600)
ctx.fillStyle = 'green'
ctx.fillRect(0,0,700,700)
ctx.fillRect(0,0,400,400)
ctx.fillStyle = 'blue'
ctx.fillRect(0,0,200,200)
ctx.fillStyle = 'pink'
ctx.fillRect(0,0,180,180)
ctx.fillStyle = 'orange'
ctx.fillRect(20,20,110,110)
ctx.fillStyle = 'red'
ctx.fillStyle = 'purple’
ctx.fillRect(40,40,70,70)
ctx.font = "30px Arial";
ctx.strokeText("DANK JAVASCRIPT", 10, 10)
ctx.strokeText("DANK JAVASCRIPT", 10, 100)
ctx.strokeText("DANK JAVASCRIPT", 10, 300)
ctx.strokeText("DANK JAVASCRIPT", 10, 200)

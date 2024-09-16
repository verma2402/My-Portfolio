// var cnv,
//   ctx,
//   r,
//   dots = [],
//   coord;
// function resz() {
//   cnv.height = window.innerHeight;
//   cnv.width = window.innerWidth;
// }
// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// function init() {
//   cnv = document.getElementById("c");
//   ctx = cnv.getContext("2d");
//   resz();
//   /*cnv.addEventListener(
//     "mousemove",
//     function(evt) {
//       var rect = cnv.getBoundingClientRect();
//       coord = {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//       };
//     },
//     false
//   );
//   cnv.addEventListener(
//     "mouseout",
//     function(evt) {
//       coord = null;
//     },
//     false
//   );*/

//   r = 2;
//   for (var i = 0; i < 200; i++) {
//     var d = {};
//     d.x = Math.floor(Math.random() * (cnv.width - 2 * r + 1)) + r;
//     d.y = Math.floor(Math.random() * (cnv.height - 2 * r + 1)) + r;
//     d.dX = Math.floor(Math.random() * 2);
//     if (d.dX == 0) d.dX = -1;
//     d.dY = Math.floor(Math.random() * 2);
//     if (d.dY == 0) d.dY = -1;
//     d.color = getRandomColor();
//     dots.push(d);
//     d = {};
//   }
//   loop();
// }
// function dot() {
//   for (var i = 0; i < dots.length; i++) {
//     ctx.beginPath();
//     ctx.arc(dots[i].x, dots[i].y, r, 0, 2 * Math.PI);
//     ctx.strokeStyle = dots[i].color;
//     ctx.fillStyle = dots[i].color;
//     ctx.stroke();
//     ctx.fill();
//     ctx.closePath();
//   }
// }
// function line() {
//   var grad;
//   for (var i = 0; i < dots.length; i++) {
//     for (var j = 0; j < dots.length; j++) {
//       if (i == j) continue;
//       if (dist(dots[i], dots[j]) < 30) {
//         ctx.beginPath();
//         ctx.lineWidth = 0.7;
//         ctx.moveTo(dots[i].x, dots[i].y);
//         ctx.lineTo(dots[j].x, dots[j].y);
//         grad = ctx.createLinearGradient(
//           dots[i].x,
//           dots[i].y,
//           dots[j].x,
//           dots[j].y
//         );
//         grad.addColorStop(0, dots[i].color);
//         grad.addColorStop(1, dots[j].color);
//         ctx.strokeStyle = grad;
//         ctx.stroke();
//         ctx.closePath();
//       }
//     }
//   }
// }
// function dist(a, b) {
//   return (dd = Math.sqrt(
//     (b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
//   ));
// }
// function moveDots() {
//   if (coord) {
//     ctx.beginPath();
//     ctx.arc(coord.x, coord.y, 20, 0, 2 * Math.PI);
//     ctx.strokeStyle = "#fff";
//     ctx.stroke();
//   }
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].x += dots[i].dX * Math.random() * Math.floor(Math.random() * 3);
//     dots[i].y += dots[i].dY * Math.random() * Math.floor(Math.random() * 3);

//     if (dots[i].x + r > cnv.width || dots[i].x - r < 0) {
//       dots[i].dX *= -1;
//       dots[i].color = getRandomColor();
//     }
//     if (dots[i].y + r > cnv.height || dots[i].y - r < 0) {
//       dots[i].dY *= -1;
//       dots[i].color = getRandomColor();
//     }

//     for (var j = 0; j < dots.length; j++) {
//       if (i == j) continue;
//       if (dist(dots[i], dots[j]) < r + 1) {
//         dots[i].dX *= -1;
//         dots[i].dY *= -1;
//         dots[j].dX *= -1;
//         dots[j].dY *= -1;
//       }
//     }
//   }
// }
// function loop() {
//   ctx.clearRect(0, 0, cnv.width, cnv.height);
//   moveDots();
//   dot();
//   line();
//   requestAnimationFrame(loop);
// }
// var requestAnimationFrame =
//   window.requestAnimationFrame ||
//   window.webkitRequestAnimationFrame ||
//   window.mozRequestAnimationFrame ||
//   window.msRequestAnimationFrame ||
//   window.oRequestAnimationFrame ||
//   function (callback) {
//     return setTimeout(callback, 1000 / 60);
//   };
// init();
// задай ширину і висоту капчі
const width = 348;
const height = 348;

// створи капчу
const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

// контекст
const ctx = canvas.getContext('2d');

// рандомні лінії
for (let i = 0; i < 10; i++) {
  const x1 = Math.random() * width;
  const y1 = Math.random() * height;
  const x2 = Math.random() * width;
  const y2 = Math.random() * height;
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// якісь фігури
for (let i = 0; i < Math.floor(Math.random() * 6+1); i++) {
  // Choose a random shape
  const shapes = ['circle', 'square', 'hexagon', 'triangle'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  // колір
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

  // намалюй фігури
  if (shape === 'circle') {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 40 + 10;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    
    ctx.fill();
  } else if (shape === 'square') {
    const x1 = Math.random() * width;
    const y1 = Math.random() * height;
    const x2 = Math.random() * width;
    const y2 = Math.random() * height;
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
  } else if (shape === 'hexagon') {
    ctx.beginPath();
    for (let j = 0; j < 6; j++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.lineTo(x, y);
    }
    ctx.fill();
  } else if (shape === 'triangle') {
    ctx.beginPath();
    for (let j = 0; j < 3; j++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.lineTo(x, y);
    }
    ctx.fill();
  }
  
}

// текст
const chars = 'ґҐїЇіІ';
let text = '';
for (let i = 0; i < 5; i++) {
  text += chars.charAt(Math.floor(Math.random() * chars.length));
}

// напиши текст
ctx.font = `${Math.floor(Math.random() * 32 + 16)}px Arial`;
ctx.fillStyle = `black`;
const textBbox = ctx.measureText(text);
const x = 100
const y = 100
ctx.fillText(text, x, y);

// Save the canvas as an image
const dataUrl = canvas.toDataURL();
const image = new Image();
image.src = dataUrl;
document.querySelector(".img").appendChild(image);
document.querySelector(".submit").addEventListener("click", function(e){
  e.preventDefault()
  if(document.querySelector(".captchaInput").value == text) {
    document.write("Ви пройшли капчу");
}
else {
    
}
})
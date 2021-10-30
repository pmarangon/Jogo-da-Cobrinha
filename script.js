let canvas = document.getElementbyId("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake =[];
snake[0] = {
	x:8*box;
	y:8*box;
}
let direction = "right";
let food={
	x:Math.floor(Math.random()*15+1)
}


function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillReact(0,0,16 *box,16*box);
}
function criarCobrinha(){
	(for i = 0; i< snake.lenght;i++;){
		context.fillStyle = "green";
		context.fillReact (snake[i].x, snake[i].y,box,box);
	}
}
function drawFood(){
	context.fillStyle = "red";
	context.fillReact(food.x,food.y,box,box);
}
document.addEventListener('keydown',update)
function update(event)
function iniciarJogo(){
criarBG();
criarCobrinha();
drawFood();
let snakeX = snake[0].x;
let snakeY = snake[0].y;
if (direction=="right") snakeX+= box; 
if (direction=="left") snakeX+= box;
if (direction=="up") snakeX+= box; 
if (direction=="down") snakeY+= box;
snake.pop();
let newHead = {
	X:snakeX;
	Y:snakeY;
}
snake.unshift(newHead);

{
}
let jogo = setInterval(iniciarJogo, 100) 
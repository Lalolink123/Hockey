const UP = -1;
const DOWN = 1;
const LEFT = 1;
const RIGHT = -1;
let ball;
let p1;
let p2;
function setup(){
	createCanvas(windowWidth, windowHeight)
	//frameRate(20);
	ball = new Ball();
	background("white");

	p1 = new Paddle(1, "#4286f4");
	p2 = new Paddle(2, "#e81721");
}


function draw() {

	background("black")

	ball.draw();
	if (ball.collision(p1))
		ball.move();
	let checkScore = ball.checkScore();
	if (checkScore === 2) 
		p2.updateScore();
		else if (checkScore === 1)
			p1.updateScore();
	p1.draw();
	p2.draw();

	if (keyIsPressed) {
		//Jugador 1
		if (keyIsDown(87)) 
			p1.move(UP)
		if (keyIsDown(83))
			p1.move(DOWN)
		if (keyIsDown(65))
			p1.move(LEFT)

		if (keyIsDown(68))
			p1.move(RIGHT)

		//Jugador 2
		if (keyIsDown(UP_ARROW))
			p2.move(UP)
		if (keyIsDown(DOWN_ARROW))
			p2.move(DOWN)
		if (keyIsDown(LEFT_ARROW))
			p2.move(LEFT)

		if (keyIsDown(RIGHT_ARROW))
			p2.move(RIGHT)


	}


	ellipse(685, 300, 150, 150);



	const showScore = function () {
		fill ("#fff");
		textSize(50);
		text(p1.getScore(), width * 0.75, 70)
		text(p2.getScore(), width * 0.75, 70)


		showScore();
	}



	fill ('white')
	rect(675, 25, 15, 600);

	//Cancha Jugador 1
	fill("#e81721");
	rect(0, 100, 50, 30);

	fill("#e81721");
	rect(0, 500, 50, 30);

	//Cancha Jugador 2
	fill("#4286f4");
	rect(1320, 100, 50, 30);

	fill("#4286f4");
	rect(1320, 500, 50, 30);

}
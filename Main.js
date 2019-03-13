var pelotas = [];

function setup() {
	createCanvas(400, 400);
	for (var i = 0; i < 100; i++) {
		pelotas[i] = new Pelota();
	}
}

function draw() {
	background(200);
	for (var i = 0; i < 100; i++) {
	pelotas[i].mostrar();
	pelotas[i].mover();
	if (pelotas[i].salir()) {
		pelotas[i].rebotar();
	}
	}

}

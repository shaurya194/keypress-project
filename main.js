canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadeBackground;
    background_imgTag.src = "mars.jpg";

    rover_imgTag = new Image();
    rover_imgTag.onload = uploaderover;
    rover_imgTag.src = "rover.png";
}

function uploadeBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploaderover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
var canvas = new fabric.Canvas("myCanvas")

var player_x = 30;
var player_y = 50;

block_height = 50;
block_width = 50;

player_img = ""
block_img = ""

function player(){
    fabric.Image.fromURL("player.png",function(Img) {
        player_img = Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_img);
    }) 
}
function block(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_img = Img;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_img);
    }) 
}

window.addEventListener("keydown", my_keypress)
function my_keypress(e){
    keypress = e.keyCode

if(keypress == '37'){
    left()
}
if(keypress== '38'){
    up()
}
if(keypress== '39'){
    right()
}
if(keypress== '40'){
    down()
}

if(keypress == '67'){
    block("cloud.jpg")
}
if(keypress == '68'){
    block("dark_green.png")
}
if(keypress == '71'){
    block("ground.png")
}
if(keypress == '76'){
    block("light_green.png")
}
if(keypress == '82'){
    block("roof.jpg")
}
if(keypress == '84'){
    block("trunk.jpg")
}
if(keypress == '85'){
    block("unique.png")
}
if(keypress == '87'){
    block("wall.jpg")
}
if(keypress == '89'){
    block("yellow_wall.png")
}

if(e.shiftKey == true && keypress == '80'){
    block_width = block_width + 10
    block_height = block_height + 10
    document.getElementById("Cwidth").innerHTML = block_width;
    document.getElementById("Cheight").innerHTML = block_height;
}
if(e.shiftKey == true && keypress == '77'){
    block_width = block_width - 10
    block_height = block_height - 10
    document.getElementById("Cwidth").innerHTML = block_width;
    document.getElementById("Cheight").innerHTML = block_height;
}
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height
        canvas.remove(player_img)
        player();
    }
}
function down(){
    if(player_y <= 500){
        player_y = player_y + block_height
        canvas.remove(player_img)
        player();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - block_width
        canvas.remove(player_img)
        player();
    }
}
function right(){
    if(player_x <= 800){
        player_x = player_x + block_width
        canvas.remove(player_img)
        player();
    }
}



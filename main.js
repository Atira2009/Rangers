var canvas = new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=1;

biw = 350;
bih = 430;

var bio= " ";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		bio = Img;
	
		bio.scaleToWidth(biw);
		bio.scaleToHeight(bih);
		bio.set({
			top:block_y,
			left:block_x
		});
		canvas.add(bio)
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image('rr1.png')
       console.log("r")
	}
	if(keyPressed == '71')
	{
		new_image('gr.png')
        console.log("g")
		block_x = 200;
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png')
       console.log("y")
		block_x =350;
	}
	if(keyPressed == '80')
	{
		new_image('pr.png')
       console.log("p")
		block_x = 600;
	}
	if(keyPressed == '66')
	{
		new_image('br.png')
       console.log("b")
		block_x = 700;
	}
	
}


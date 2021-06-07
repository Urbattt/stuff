var image=["grandma.png","lois.jpg","peter.jpg","uncle.jpg"] ;
var names=["grandma","mom","dad","uncle"];
var i=0;
function update() {

i++; 
var numberofppl=3
if(i> numberofppl)
{i=0;}
var upimage= image[i];
var upnames= names[i];
document.getElementById("image1").src=upimage;
document.getElementById("names").innerHTML=upnames;


}
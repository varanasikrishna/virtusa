
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    document.getElementById('block1').style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize = "xx-large";
}

function changeFontColor() {
    document.getElementById("block3").style.color = "red";
}
function changeFontColor1() {
    document.getElementById("block3").style.color = "black";
}
function revertColor() {

}

function hide() {
    document.getElementById("block4").style.visibility = "hidden";
}

function changeBackColorForAllBox() {
    var box1=document.getElementsByClassName('box1')
    for(var i=0;i<box1.length;i++){
        box1[i].style.backgroundColor="green";
    }
}

function changeBackColor(color,box2){
    var box2=document.getElementsByClassName('box2')
    for(var i=0;i<box2.length;i++){
        box2[i].style.backgroundColor=color;
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function addAdjacent() {
   document.getElementById("newpara").innerHTML="I got generated on the fly...";
 }

function removePara() {
    document.getElementById("para4").style.visibility= "hidden";
}

function animatePara() {
    var myBox = document.getElementById("box5");
    myBox.style.position = "relative";
    myBox.style.animationDirection = "alternate";
    myBox.style.animationDuration = 5000;
    myBox.style.left = 0;
    myBox.style.left = parseInt(myBox.style.left) + 200 + "px";
}

function changeToUpper(){
    var firstvalue=document.getElementById("inputBox1").value;
    document.getElementById("inputBox2").value=firstvalue.toUpperCase();
}


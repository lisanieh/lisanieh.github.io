function changeImg(src){
    document.querySelector("img").src = "../image/" + src + ".png";
}

let count = 0;

document.body.onmousedown = function(){
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImg("img2");
}
document.body.onmouseup = function(){
    changeImg("img1");
}
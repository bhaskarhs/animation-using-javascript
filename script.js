const banner = document.getElementsByClassName("banner")[0];
const block = document.getElementsByClassName("block");
const blocks = document.getElementById("blocks")
    
for (var i = 1 ; i < 400 ; i++){
    banner.innerHTML += '<div class="block"></div>';
    block[i].style.animationDelay = `${ i * 0.05}s`;
}
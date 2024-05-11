function roll(){
    let image = document.getElementById('img');
    let random = Math.floor(Math.random()*6)+1;
    image.innerHTML="<img src=' "+random+".png' />";

}
var games = [];
window.addEventListener("load", function(){
    var tomb = document.querySelectorAll("#tarolo2 .game");
    tomb.forEach(element => {
        element.addEventListener("mouseover",megjelen);
        element.addEventListener("mouseout",megjelen2);
    });

})

function megjelen(event){
    let item = event.currentTarget;
    item.className="b1";
    let a =document.querySelectorAll(".b1 .gomb")[0]
    a.style.display="block";
    a.style.
    console.log(a);
}
function megjelen2(event){
    let item = event.currentTarget;
    item.className="game";
}
var start = true;
var colors = ["green","red","yellow","blue"];
var store = [];
var score = 0;
document.addEventListener("keypress",function(event){
    if(event.key=="Enter" && start==true){
        document.getElementsByTagName("h1")[0].innerHTML = "Let's  Begin !!";
        start = false;
        to_store();
    }
})

function to_store(){
    var choose = Math.floor(Math.random()*4);
    document.getElementById(colors[choose]).classList.add("add");
    store.push(colors[choose]);
    setTimeout(() => {
        document.getElementById(colors[choose]).classList.remove("add");
    }, 200);
}

var i = 0;
function game(){
    if(document.activeElement.id == store[i]){
        if(i==store.length-1){
            alert("CORRECT !!");
            score = score+1;
            to_store();
            i=0;
            document.getElementById("score").innerHTML = score;
        }
        else{
            i++;
        }
    }
    else{
        alert("WRONG !!");
        location.reload();
    }
    return;
}
function myFunction(){
 var x = document.getElementById("dom")
 if ( x.style.display === "none") {
     x.style.display = "block";
 } else {
     x.style.display = "none";
 }
}


function myNews(){
    document.getElementById("txtnew").innerHTML = "hfk fdhkjdsfobhbg osjfgjojsgj s fhf s kjfh k afoofjskbvjhzflfskjfk vxbmbfhhj hkfljkbvmn sjh gshkjfa     kfhfkhkjf kja  hfkahkfkha lhjahflh ajkha hfhjah kjafh f ahfkja kfkjhkah kjfh ha hfh ajhhaf fjh f haj ahkjhkj hkagf jgq anbmv jauyri yweiryweiy  ";
}

function myNews2(){
    document.getElementById("txtnew").innerHTML = " ";
}


var i = 0;
var txt = "Skontaktuj sie z nami telefonicznie lub napisz maila!!";
var speed = 50;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("txtcon").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

}
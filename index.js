function addquote() {

var randomInt = Math.floor(Math.random() * 12+1) ;
console.log(randomInt); // Outputs a random integer from 1 to 10
// let uniqueNumbers = new Set();

// while (uniqueNumbers.size < 10) {
//   var randomInt = Math.floor(Math.random() * 10) + 1;
//   uniqueNumbers.add(randomInt);
// }

if (randomInt == 1) {
 document.getElementById("demo").innerHTML=`Be yourself; everyone else is already taken.<br>
 <h5 class="text-primary fs-6 mt-3">Mitchell</h5>
`
}
else if(randomInt==2){
    document.getElementById("demo").innerHTML=`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.<br>
<h5 class="text-primary fs-6 mt-3">Manny</h5>`
}

else if(randomInt==3){
    document.getElementById("demo").innerHTML=`So many books, so little time <br>.
 <h5 class="text-primary fs-6 mt-3">Cam</h5>`
}
else if(randomInt==4){
    document.getElementById("demo").innerHTML=`A room without books is like a body without a soul.<br> <h5 class="text-primary fs-6 mt-3">Marcus</h5>`
}
else if(randomInt==5){
        document.getElementById("demo").innerHTML=`Be the change that you wish to see in the world.<br> <h5 class="text-primary fs-6 mt-3">Johna</h5>`
}

else if(randomInt==6){
    document.getElementById("demo").innerHTML=`In three words I can sum up everything I've learned about life: it goes on.<br> <h5 class="text-primary fs-6 mt-3">phill</h5>`
}

else if(randomInt==7){
    document.getElementById("demo").innerHTML=`In three words I can sum up everything I've learned about life: it goes on.<br> <h5 class="text-primary fs-6 mt-3">Haley</h5>`
}

else if(randomInt==8){
    document.getElementById("demo").innerHTML=`A friend is someone who knows all about you and still loves you<br> <h5 class="text-primary fs-6 mt-3">Alex</h5>`
}
else if(randomInt==9){
    document.getElementById("demo").innerHTML=`We accept the love we think we deserve.<br> <h5 class="text-primary fs-6 mt-3">Luke</h5>`
}
else if(randomInt==10){
    document.getElementById("demo").innerHTML=`I am so clever that sometimes I don't understand a single word of what I am saying.<br> <h5 class="text-primary fs-6 mt-3">claire</h5>`
}
else if(randomInt==11){
    document.getElementById("demo").innerHTML=`Insanity is doing the same thing, over and over again, but expecting different results.<br> <h5 class="text-primary fs-6 mt-3">Jay</h5>`
}
else if(randomInt==12){
    document.getElementById("demo").innerHTML=`It is better to be hated for what you are than to be loved for what you are not<br> <h5 class="text-primary fs-6 mt-3">Gloria</h5>`
}




}
let iteration;
let n = 1;
let phrase1 = " <br> Well done! Let's go to the next slide and try something different.";
let phrase2 = "This is the basic idea behind XSS. Now let's look as some different versions of XSS.";
function incrementN() {
    n++;
}
function input() {
    document.getElementById(`inputDisplay${n}`).innerHTML=document.getElementById(`input${n}`).value.concat(phrase1);
}
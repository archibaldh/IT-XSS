let iteration;
let n = 1;
function incrementN() {
    n++;
}
function input() {
    document.getElementById(`inputDisplay${n}`).innerHTML=document.getElementById(`input${n}`).value;
}
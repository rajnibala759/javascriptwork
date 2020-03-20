function shiftLeft(){
let left_shift=document.getElementById('cards');
left_shift.appendChild(left_shift.childNodes[0]);

}
function shiftRight(){
    
    let right_shift=document.getElementById('cards');
    
    right_shift.insertBefore(right_shift.lastChild,right_shift.childNodes[0]);

}

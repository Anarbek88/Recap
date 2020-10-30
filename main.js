var count = document.querySelector('#counter');
var up = document.querySelector('#one');
var down = document.querySelector('#two');
var counter = 0;
// console.log(typeof counter);

up.addEventListener('mouseover', function(){
    if(counter < 0){
    count.style.color = 'red';
    } else {
    count.style.color = 'green';
    }
    counter ++;
    console.log(counter);
    count.innerHTML = counter;
})
down.addEventListener('mouseout', function(){
    if(counter < 0){
    count.style.color = 'red';
    } else {
    count.style.color = 'green';
    }
    counter --;
    count.innerHTML = counter;
})
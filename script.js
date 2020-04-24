{function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}
var buttons = document.getElementsByClassName('dropbtn');
var contents = document.getElementsByClassName('dropdown-content');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var id = this.value;
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }
        myFunction(id);
    });
}
window.addEventListener("click", function(){
     if (!event.target.matches('.dropbtn')){
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }
     }
});}



let ssBtS = document.getElementById("ssBtS");
let ssStB = document.getElementById("ssStB");
let isBtS = document.getElementById("isBtS");
let isStB = document.getElementById("isStB");
let bBtS = document.getElementById("bBtS");
let bStB = document.getElementById("bStB");
let resetBt = document.getElementById("reset");
let resultField = document.getElementById("result");
let input = document.getElementById("inputfield");


function printResult(arr) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(arr));
    resultField.appendChild(p);

}
///////////////////THUẬT TOÁN////////////////////
function selectionSort(array, condition) {
    let min, temp;
    for(i = 0; i < array.length; i++) {
      min = i;
      for(j = i + 1; j < array.length; j++) {
        if(condition(array[j], array[min])) {
          min = j;
        }
        if(min != i) {
          temp = array[min];
          array[min] = array[i];
          array[i] = temp;
          min = i;
          printResult(array);
        }
      }        
    }
}
function insertionSort(array, condition) {
    let pos, x;
    for(i = 1; i < array.length; i++) {
        x = array[i];
        pos = i - 1;
        while((pos >= 0) && (condition(array[pos], x))) {
            array[pos + 1] = array[pos];
            pos--;
        }
        array[pos + 1] = x;
        printResult(array);
    }
}
function bubbleSort(array, condition) {
    let temp;
    for(i = 0; i < array.length - 1; i++) {
        for(j = array.length - 1; j > i; j--) {
            if(condition(array[j], array[j - 1])) {
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
            printResult(array);
        }
    }
}
///////////////////THUẬT TOÁN////////////////////

function smaller(first, second) {
    if(first < second) {
        return true;
    }
    return false;
}
function greater(first, second) {
    if(first > second) {
        return true;
    }
    return false;
}

function sort(type, condition) {
    let arr = input.value.replace(/\s+/g, '').split(',').map(str => Number(str));
    type(arr, condition);
}

ssBtS.addEventListener("click", () => sort(selectionSort, greater))
ssStB.addEventListener("click", () => sort(selectionSort, smaller))
isBtS.addEventListener("click", () => sort(insertionSort, smaller))
isStB.addEventListener("click", () => sort(insertionSort, greater))
bBtS.addEventListener("click", () => sort(bubbleSort, greater))
bStB.addEventListener("click", () => sort(bubbleSort, smaller))
resetBt.addEventListener("click", function() {
    resultField.innerHTML = "";
})




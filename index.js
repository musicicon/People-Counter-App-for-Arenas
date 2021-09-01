let entries = document.getElementById("entries")
let count = 0
function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function save(){
    let countersave = count + " - ";
    entries.textContent += countersave;
    count = 0;
    document.getElementById("count-el").textContent = count;
}



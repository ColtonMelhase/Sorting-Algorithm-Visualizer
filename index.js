

arr = [];
size = 500;

function swap(arr, idx1, idx2) {
    // console.log(`Swapping index ${idx1} and ${idx2}`)
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function gen_random_array(arr) {
    arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(i+1);
        arr.push(i+1);
    }

    for(let i = 0; i < size*5; i++) {
        swap(arr, Math.floor(Math.random() * size*2), Math.floor(Math.random() * size*2))
    }
    console.log(arr);
    render(arr);
}

function render(arr) {

    let stage = document.getElementById("stage");

    stage.innerHTML = '';

    for(let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${arr[i]}px`
        bar.style.width = `${2}px`

        stage.appendChild(bar);
    }
}

    


arr = [];
size = 500;

function gen_random_array(arr) {
    arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(i+1);
        arr.push(i+1);
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

    
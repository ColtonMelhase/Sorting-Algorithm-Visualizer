

arr = [];
size = 500;

function swap(idx1, idx2, e1, e2) {
    // console.log(`Swapping index ${idx1} and ${idx2}`)
    let temp = mainArr[idx1];
    mainArr[idx1] = mainArr[idx2];
    mainArr[idx2] = temp;

    let style1 = window.getComputedStyle(e1);
    let style2 = window.getComputedStyle(e2);
    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");
    e1.style.height = height2;
    e2.style.height = height1;
}

async function gen_random_array() {
    let stage = document.getElementById("stage");
    mainArr = [];
    stage.innerHTML = '';

    //create numbers
    for(let i = 0; i < size; i++) {
        mainArr.push(i+1);
    }
    // console.log(`Numbers: ${mainArr}`);

    
    //create elements

    let element = document.createElement("div");
    element.classList.add("bar");
    element.style.width = "10px";
    element.style.backgroundColor = "white"

    for(let i = 0; i < size; i++) {
        element.style.height = `${mainArr[i] * 3}px`
        stage.appendChild(element.cloneNode(true));
    }


    //randomize numbers/elements
    let bars = stage.children;
    for(let i = 0; i < size*5; i++) {
        idx1 = Math.floor(Math.random() * size);
        idx2 = Math.floor(Math.random() * size);
        swap(idx1, idx2, bars[idx1], bars[idx2])
    }

    // console.log(`Numbers: ${mainArr}`);
    // console.log(stage.children)
    
}


async function bubble_sort() {
    let stage = document.getElementById("stage");
    let bars = stage.children;

    for(let i = 0; i < mainArr.length; i++) {
        for(let j = 0; j < (mainArr.length-i-1); j++) {

            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
            if(mainArr[j] > mainArr[j + 1]) {
                swap(j, j + 1, bars[j], bars[j + 1]);
                await sleep(1);
            }
            bars[j].style.backgroundColor = "white";
            bars[j + 1].style.backgroundColor = "white";
        }
        
        // bars[size-i].style.backgroundColor = "green";
    }

    check();
}

async function check() {
    let stage = document.getElementById("stage");
    let bars = stage.children;

    for(let i = 0; i < mainArr.length; i++) {
        if(mainArr[i] > mainArr[i + 1]) {
            bars[i].style.backgroundColor = "red";
            bars[i + 1].style.backgroundColor = "red";
            console.log("BAD SORT!");
        }
        else {
            bars[i].style.backgroundColor = "green";
        }
        await sleep(1);
    }
}
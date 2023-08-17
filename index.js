

arr = [];
size = 500;

function gen_random_array(arr) {
    arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(i+1);
        arr.push(i+1);
    }

    console.log(arr);
}

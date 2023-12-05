var counter = 0;

function main(){
    console.log("Ready");
    document.querySelector("#dec").onclick = (event) =>{
        counter = counter - 1;
        updateView();

    }
    document.querySelector("#inc").onclick = (event) =>{
        counter = counter + 1;
        updateView();

    }
    document.querySelector("#res").onclick = (event) =>{
        counter = 0;
        updateView();

    }

}

function updateView(){
    document.querySelector("#count").innerHTML = `Count = ${counter}`;
}
main();
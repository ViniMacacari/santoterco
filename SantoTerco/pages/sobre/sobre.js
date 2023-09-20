let copyText = document.getElementById("btn");
let modal = document.querySelector("dialog")

copyText.addEventListener("click", function(){
    let input = copyText.querySelector("cont")
    input.select();
    document.execCommand("copy");
    modal.showModal();
})
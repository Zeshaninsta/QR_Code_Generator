let button  = document.getElementById("generate")
let image  = document.getElementById("image")
let input = document.getElementById("input")
let clear  = document.getElementById("clear")

button.addEventListener("click", () => {
    if (input.value == '') return;
    QrLInk = "https://api.qrserver.com/v1/create-qr-code/"
    image.src = QrLInk + "?size=500x500&data=" + input.value
    // console.log("button is clicked")
})

clear.addEventListener("click", () =>{
    input.value = ''
})

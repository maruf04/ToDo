function gorevEkle() {
    var input = document.getElementById("addtext").value;
    if(input!=null && input!=""){
        const tagA = document.createElement("p");
        tagA.innerText = input;
        tagA.classList.add("text");
        document.querySelector("#group").appendChild(tagA);
        document.getElementById("addtext").value = "";
    }
}
function deleteAll(){
    for( i in document.querySelector("#group p")){
        document.querySelector("p").remove();
    }
}
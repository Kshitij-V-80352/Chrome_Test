divRef = document.getElementById("div1");

page2data = () => {
    let str = "";
    for(i = 0; i < 2; i++)
        str += "1   ";
    divRef.innerHTML = str;
}
divRef = document.getElementById("div1");

page1data = () => {
    let str = "";
    for(i = 0; i < 10; i++)
        str += "1   ";
    divRef.innerHTML = str;
}
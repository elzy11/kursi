window.onload = function(){
    console.log("window loaded!");
    alert("jusu lapa ir gatava");
}


var btn = document.querySelector("button");

btn.onclick = function(){
    console.log("clicked");
    alert("you clicked button!");
}

var http = new XMLHttpRequest();
var url = "http://jsonplaceholder.typicode.com/post";
var method = "GET";

http.open(method,url);
http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(JSON.parse(http.responseText));
        (property) XMLHttpRequest.readyState: number;
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200){
        console.log("error");
    }
};

http.send();

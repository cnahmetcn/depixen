document.getElementById("ftitle").onclick = function() {titleFunction()};
function titleFunction() {
  document.getElementById("ftitle").innerHTML = "Hello World";
  t=true;
}


document.getElementById("fdescription").onclick = function() {descriptionFunction()};
function descriptionFunction() {
  document.getElementById("fdescription").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni ab eos corporis, ex excepturi expedita dignissimos dolorem quos accusamus aspernatur. Quaerat deleniti incidunt consequuntur vel id. Eum, voluptates ut?";
  d=true;
}


document.getElementById("fimage").onclick = function() {imageFunction()};
function imageFunction() {
  document.getElementById("fimage").innerHTML = `<img class="card-img-top" src="lorem.jpg" alt="Card image" style="width:100%">`;
  i=true;
}






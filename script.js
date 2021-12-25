function run(){
  let html = document.querySelector(".editor-type #html-code").value;
  let css = "<style>" + document.querySelector(".editor-type #css-code").value + "</style>";
  let js = document.querySelector(".editor-type #js-code").value;
  let output = document.querySelector(".result #output");

  output.contentDocument.body.innerHTML  = html + css;
  output.contentWindow.eval(js); 
}
document.querySelector(".editor-type #html-code").addEventListener('keyup', run);
document.querySelector(".editor-type #css-code").addEventListener('keyup', run);
document.querySelector(".editor-type #js-code").addEventListener('keyup', run);

function first(){
  let output = document.querySelector(".result #output");
  output.contentDocument.body.style.backgroundColor = "white";
}
document.querySelector(".editor-type #html-code").addEventListener('keydown', first);
document.querySelector(".editor-type #css-code").addEventListener('keydown', first);
document.querySelector(".editor-type #js-code").addEventListener('keydown', first);
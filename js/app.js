document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

function saveLocal() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;
    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);
  }
  
  function loadCode() {
    const savedHtmlCode = localStorage.getItem("htmlCode");
    const savedCssCode = localStorage.getItem("cssCode");
    const savedJsCode = localStorage.getItem("jsCode");
    if (savedHtmlCode !== null) {
      document.getElementById("htmlCode").value = savedHtmlCode;
    }
    if (savedCssCode !== null) {
      document.getElementById("cssCode").value = savedCssCode;
    }
    if (savedJsCode !== null) {
      document.getElementById("jsCode").value = savedJsCode;
    }
  }
  
  const htmlEditor = document.getElementById("htmlCode");
  htmlEditor.addEventListener("input", saveLocal);
  
  const cssEditor = document.getElementById("cssCode");
  cssEditor.addEventListener("input", saveLocal);
  
  const jsEditor = document.getElementById("jsCode");
  jsEditor.addEventListener("input", saveLocal);
  
  window.addEventListener("load", function () {
    loadCode();
    showPreview();
  });
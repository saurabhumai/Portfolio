/* small menu toggle */
document.addEventListener("DOMContentLoaded",function(){
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if(btn && nav){
    btn.addEventListener("click", ()=> {
      if(nav.style.display === "block") nav.style.display = "";
      else nav.style.display = "block";
    });
    // close when click outside on mobile
    document.addEventListener("click", (e)=>{
      if(window.innerWidth < 860 && nav && btn && !nav.contains(e.target) && !btn.contains(e.target)){
        nav.style.display = "";
      }
    });
  }
});

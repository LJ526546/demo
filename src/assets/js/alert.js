(function(){
  window.alert = function(word){
    var alert = this.document.getElementById('demo-alert');
    if(alert){
      alert.remove();
    }
    var box = document.createElement('div');
    box.id = 'demo-alert';
    box.innerHTML = word;
    box.style.display = "block";
    box.style.position = "fixed";
    box.style.top = "50%";
    box.style.left = "50%";
    box.style.padding = "12px 25px";
    box.style.fontSize = "14px";
    box.style.color = "#fff";
    box.style.zIndex = "4";
    box.style.opacity = '1';
    box.style.backgroundColor = "rgba(0,0,0,.6)";
    document.body.appendChild(box);
    var left = box.getBoundingClientRect().width/2;
    var top = box.getBoundingClientRect().height/2;
    box.style.marginTop = '-' + top + 'px';
    box.style.marginLeft = '-' + left + 'px';
    box.style.transition = "all .2s"
    this.setTimeout(function(){
      box.style.padding = "0";
      box.style.opacity = "0";
    },1000)
    this.setTimeout(function(){
      box.remove();
    },1300)
  }
})()

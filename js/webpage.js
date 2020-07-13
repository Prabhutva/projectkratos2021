var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("sidenavbar").style.width = "350px";
    //document.getElementById("main").style.marginLeft = "300px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("sidenavbar").style.width = "89px";
    //document.getElementById("main").style.marginLeft = "89px";
    this.mini = true;
  }
}
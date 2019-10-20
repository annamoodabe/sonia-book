
var lines = $(".text-line");
var i = 0;

$(document).on("click", function(){
  lines[i].classList.add("show");
  i += 1;
});

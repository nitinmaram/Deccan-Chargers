$('.ui.sidebar').toggle(); 
$('#toggle').click(function(){
  $('.ui.sidebar').sidebar('toggle');
});
$('#toggle1').click(function(){
  $('.ui.sidebar').sidebar('hide');
});
setInterval(function() {
  $('.ui.shape').shape('flip over');
},4000);
$('#flip3').click(function(){
  $('.ui.shape.s3').shape('flip right');
});
$('#flip2').click(function(){
  $('.ui.shape.s2').shape('flip down');
});
$('#flip1').click(function(){
  $('.ui.shape.s1').shape('flip left');
});
setInterval(function() {
  $('.ui.shape.s1').shape('flip left');
},10000);

setInterval(function() {
  $('.ui.shape.s2').shape('flip down');
},10000);
setInterval(function() {
  $('.ui.shape.s3').shape('flip right');
},10000);
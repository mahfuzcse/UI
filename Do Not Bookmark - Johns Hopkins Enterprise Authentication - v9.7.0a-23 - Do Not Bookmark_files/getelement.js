function e()
{
 var elements = new Array();
 for (var i = 0; i < arguments.length; i++) {
  var element = arguments[i];
  if (typeof element == 'string') {
   if (document.getElementById) {
    element = document.getElementById(element);
   }
   else if (document.all) {
    element = document.all[element];
   }
  }
  if (arguments.length == 1) {
   return element;
  }
  elements.push(element);
 }
 return elements;
}

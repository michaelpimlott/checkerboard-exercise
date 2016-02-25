(function() {
  'use strict';
  var target = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 63; i++) {
    var div = document.createElement('div');
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    div.style.float = 'left';
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.backgroundColor = color;

    target.appendChild(div);
  }
})();

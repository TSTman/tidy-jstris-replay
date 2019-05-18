// ==UserScript==
// @name         Tidy Jstris Replay
// @namespace    Tidy Jstris Replay
// @version      0.0.0
// @description  This makes Jstris replays look tidier.
// @author       TSTman
// @match        https://jstris.jezevec10.com/replay/*
// @grant        none
// ==/UserScript==

document
  .querySelector('nav.navbar')
  .style
  .display = 'none';

var mainElement = document.querySelector('#main');
var statsElement = document.querySelector('#stats');
statsElement.querySelectorAll(':scope td.sval span').forEach(
  function (element) {
    element.textContent = '';
  }
);

mainElement.style.position = 'relative';
mainElement.style.left = '-400px';
statsElement.style.position = 'relative';
statsElement.style.left = '360px';
statsElement.style.top = '-515px';
statsElement.style.fontSize = '35pt';
var controls = document.querySelector('table.moreStats + div');
setTimeout(
  function () {
    controls.querySelector(':scope button#load').click();
  },
  3000
);
controls.style.display = 'none';
var speedChart = document
  .querySelector('#speedChart')
  .parentNode
  .parentNode;
speedChart
  .querySelector(':scope div.showMore')
  .style
  .display = 'none';
speedChart.style.position = 'relative';
speedChart.style.top = '-630px';
speedChart.style.left = '-160px';

var moreStats = document.querySelector('table.moreStats');
moreStats.querySelector(':scope tr:nth-child(2)').style.display = 'none';
moreStats.querySelector(':scope tr:nth-child(1)');

var kppElement = moreStats.querySelector(':scope tr:nth-child(1)');
kppElement.style.position = 'relative';
kppElement.style.left = '39px';
var transformedSpeedChart = document.querySelector('#speedChart').parentNode;
transformedSpeedChart.style.transformOrigin = 'top left';
transformedSpeedChart.style.transform = 'scale(.68, 1.4)';

document.querySelectorAll('canvas').forEach(
  function (canvas) {
    if (canvas.getAttribute('id') === 'bgLayer') {
      return;
    }
    canvas
      .getContext('2d')
      .clearRect(0, 0, canvas.width, canvas.height);
  }
);

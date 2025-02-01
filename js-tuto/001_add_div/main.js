var div
  container = document.getElementById('container');

for (let i = 0; i < 10; i++) {
  div = document.createElement('div');
  div.innerHTML = 'div ' + i;
}
container.appendChild(div);
let color = [
  ['#fdeb71', '#f8d800'],
  ['#adbcff', '#0396ff'],
  ['#feb692', '#ea5455'],
  ['#ce9ffc', '#7367f0'],
  ['#90f7ec', '#32ccbc'],
  ['#fff6b7', '#f6416c'],
  ['#81fbb8', '#28c76f'],
  ['#e2b0ff', '#9f44d3'],
  ['#f97794', '#623aa2'],
  ['#fccf31', '#f55555'],
  ['#f761a1', '#8c1bab'],
  ['#43cbff', '#9708cc'],
  ['#5efce8', '#736efe'],
  ['#a0fe65', '#fa016d'],
  ['#ffdb01', '#0e197d'],
  ['#fec163', '#de4313'],
  ['#fad7a1', '#e96d71'],
  ['#ffd26f', '#3677ff'],
  ['#92ffc0', '#002661'],
  ['#eead92', '#6018dc'],
  ['#f6ceec', '#d939cd'],
  ['#52e5e7', '#130cb7'],
  ['#71ca74', '#a64db6'],
  ['#79f1a4', '#0e5cad'],
  ['#fdd819', '#e80505'],
  ['#fff3b0', '#ca26ff'],
  ['#e8d071', '#5312d6'],
  ['#eece13', '#b210ff'],
  ['#fff5c3', '#9452a5'],
  ['#f05f57', '#360940'],
  ['#2afadf', '#4c83ff'],
  ['#fff886', '#f072b6'],
  ['#97abff', '#123597'],
  ['#ff6fd8', '#3813c2'],
  ['#ee9ae5', '#5961f9'],
  ['#ffd3a5', '#fd6585'],
  ['#f5cbff', '#c346c2'],
  ['#fff720', '#3cd500'],
  ['#c2ffd8', '#465efb'],
  ['#fd6585', '#0d25b9'],
  ['#fd6e6a', '#ffc600'],
  ['#65fdf0', '#1d6fa3'],
  ['#6b73ff', '#000dff'],
  ['#ffe985', '#fa742b'],
  ['#ffa6b7', '#1e2ad2'],
  ['#ffaa85', '#b3315f'],
  ['#ff7af5', '#513162'],
  ['#f0ff00', '#58cffb'],
  ['#72edf2', '#5151e5'],
  ['#ff9d6c', '#bb4e75'],
  ['#fab2ff', '#1904e5'],
  ['#f6d242', '#ff52e5'],
  ['#69ff67', '#00e4ff'],
  ['#3b2667', '#bc78ec'],
  ['#81ffef', '#f067b4'],
  ['#ffa8a8', '#fcffcf'],
  ['#70f570', '#49c628'],
  ['#3c8ce7', '#00eaff'],
  ['#ffcf71', '#2376dd'],
  ['#ff96f9', '#c32bac'],
  ['#ffcf50', '#c32bac'],
];

let container = document.querySelector('.color-all');
let copy_done = document.querySelector('.copy-done');
color.forEach((one) => {
  let card = document.createElement('div');
  card.className = 'card';
  let text = document.createElement('div');
  text.className = 'text';
  card.appendChild(text);
  text.innerText = `${one}`;
  card.style.background = `linear-gradient(135deg,${one})`;
  container.appendChild(card);
});
let copy = document.querySelectorAll('.text');
copy.forEach((e) => {
  e.addEventListener('click', (c) => {
    let clicked = c.target.closest('.text');
    let clicked_text = clicked.innerText;
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.value = clicked_text;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copy_done.classList.add('active');
    setTimeout(function () {
      copy_done.classList.remove('active');
    }, 2000);
    document.body.removeChild(textArea);
  });
});

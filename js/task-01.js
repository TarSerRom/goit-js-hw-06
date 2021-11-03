const els = document.querySelectorAll(`li.item`);
console.log(`Number of categories:`, els.length);


const list = document.querySelectorAll('.item');
console.log(list);
list.forEach(el => {

  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});

 
'use strict';
{
  let images = [
    {url: 'https://tshirt519.github.io/mulunch/img/slide1.png', text: 'むらんちメンバーによるランチプロジェクト始動！',},
    {url: 'https://tshirt519.github.io/mulunch/img/slide2.png', text: '[上野村視察] 大きな自然とおいしい食べ物！',},
    {url: 'https://tshirt519.github.io/mulunch/img/slide3.png', text: '[レセプション] 実際に出すメニューをご用意！',},
    {url: 'https://tshirt519.github.io/mulunch/img/slide4.png', text: 'いよいよ本日オープンです！',},
  ];
  
  let currentNum = 0;

  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum) {
      li.classList.add('current');
    }

    li.addEventListener("click", () => {
      const slide = document.querySelectorAll('#js-slides > li');
      slide[currentNum].classList.remove('current');
      currentNum = index;
      slide[currentNum].classList.add('current');
    });
  
    const img = document.createElement('img');
    img.src = image.url;
    const p = document.createElement('p');
    p.textContent = image.text;

    li.appendChild(img);
    li.appendChild(p);
    document.getElementById('js-slides').appendChild(li);
  });
  
  const next = document.getElementById('js-next');
  next.addEventListener('click', () => {
    let target = currentNum + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('#js-slides > li')[target].click();
  });

  const previous = document.getElementById('js-previous');
  previous.addEventListener('click', () => {
    let target = currentNum - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('#js-slides > li')[target].click();
  });

}

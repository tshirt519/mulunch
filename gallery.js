'use strict';
{
  let images = [
    {url: 'https://tshirt519.github.io/mulunch/gallery3.png', text: '# 友人からのフィードバック# みんなで楽しく試食会',},
    {url: 'https://tshirt519.github.io/mulunch/gallery1.png', text: '# 上野村で農業体験 #いっぱいカブが採れた！',},
    {url: 'https://tshirt519.github.io/mulunch/gallery2.png', text: '# むらんちのオニギリおいしい # 常連さんと一緒',},
  ];
  
  let currentNum = 0;

  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum) {
    }

    li.addEventListener("click", () => {
      const slide = document.querySelectorAll('#js-gallery > li');
      currentNum = index;
    });
  
    const img = document.createElement('img');
    img.src = image.url;
    const p = document.createElement('p');
    p.textContent = image.text;

    li.appendChild(img);
    li.appendChild(p);
    document.getElementById('js-gallery').appendChild(li);
  });
  
}

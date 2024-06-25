const images = [
  "https://plus.unsplash.com/premium_photo-1718204437243-a644894df78d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718204438772-84b287d1fc7d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718204436957-2255f37f2fff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718204436735-ffa2ec84e6ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718204436275-1a774149f1f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1718204436111-2a3750c76f5c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i = 0; i<n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);

    const dotDiv = document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click', (event) => {
        const index = [...carouselNav.children].indexOf(event.target);
        showImg(index);
    })
}



let curPosition = 0;
showImg(0);

leftButton.addEventListener('click', () => {
    if(curPosition > 0) {
        showImg(curPosition - 1)
    } else {
        showImg(n - 1)
    }
})

rightButton.addEventListener('click', () => {
    if(curPosition < n-1) {
        showImg(curPosition + 1)
    } else {
        showImg(0)
    }
})

function showImg(position) {

    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active');
    
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}
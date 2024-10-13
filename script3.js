// Cannables와 관련된 특수 효과

// 페이지가 로드되면 애니메이션 시작
window.onload = function() {
    const heroText = document.querySelector('.about-hero h2');
    const paragraphs = document.querySelectorAll('.about-content p');
    
    // 첫 로드 시 텍스트에 미친 듯한 애니메이션 효과 추가
    setTimeout(() => {
        heroText.classList.add('crazy-animation');
    }, 1000);

    // 스크롤할 때 각 문단에 차례로 애니메이션을 추가
    window.addEventListener('scroll', () => {
        paragraphs.forEach((para, index) => {
            const paraPosition = para.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (paraPosition < windowHeight - 100) {
                setTimeout(() => {
                    para.classList.add('crazy-paragraph-animation');
                }, index * 300); // 각 문단이 약간의 딜레이 후 애니메이션
            }
        });
    });
};

// Hero 텍스트 애니메이션
const heroTextEffect = document.querySelector('.about-hero h2');
setInterval(() => {
    heroTextEffect.classList.toggle('text-flicker-in-glow');
}, 2000);

// 문단의 텍스트가 스크롤 시 발광하는 효과
const paragraphs = document.querySelectorAll('.about-content p');
paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('glow-text');
    });

    paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('glow-text');
    });
});


let num12 = 0; // 초기값 0으로 설정

function addToCart(productName) {
    num12 = 1; // 카트에 상품이 담길 때 num12를 1로 업데이트
    alert(productName + "가 카트에 담겼습니다!");
}

function viewCart() {
    if (num12 === 0) {
        alert("카트가 비었습니다."); 
    } else if (num12 === 1) {
        alert("저런... 이건 제가 만든 테스트 웹사이트라 구매할 수 없어요 :<"); 
    }
}
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

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

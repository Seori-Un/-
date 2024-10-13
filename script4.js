// Contact form validation and submission

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "아앗... 저런... 실제로 메세지가 보내지지는 않아요. 헛수고하셨군요! :< ";
        formMessage.style.color = "green";

        // 폼 제출 후 초기화 (실제 서버로 보내지는 기능은 추가되지 않음)
        document.getElementById('contactForm').reset();
    }
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

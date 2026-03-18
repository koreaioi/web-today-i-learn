document.addEventListener('DOMContentLoaded', () => {
  const tilForm = document.getElementById('til-form');
  const tilList = document.getElementById('til-list');

  tilForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const date = document.getElementById('til-date').value;
    const title = document.getElementById('til-title').value;
    const content = document.getElementById('til-content').value;

    const newArticle = document.createElement('article');
    newArticle.classList.add('til-item');

    newArticle.innerHTML = `
      <time>${date}</time>
      <h3>${title}</h3>
      <p>${content.replace(/\n/g, '<br>')}</p> 
    `;

    tilList.prepend(newArticle);
    tilForm.reset();
    
    alert('새로운 TIL이 등록되었습니다! 👍');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const shyLink = document.getElementById('github-shy-link');

  if (shyLink) {
    // 클릭 이벤트 자체를 가로채서 아무 일도 일어나지 않게 합니다.
    shyLink.addEventListener('click', (event) => {
      // 1. 링크 이동 기본 동작 방지
      event.preventDefault(); 
      
      // 2. 이벤트가 부모 요소로 전달되는 것 방지 (혹시 모를 중복 실행 방지)
      event.stopPropagation();
      
      console.log("부끄러워서 링크를 숨겼어요! 클릭 불가 상태입니다.");
    });
  }
});
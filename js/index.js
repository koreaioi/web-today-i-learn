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

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const studyMessage = document.getElementById('study-message');

  // 1. NO 버튼 도망가기 로직
  const moveButton = () => {
    // 버튼이 "아잇, 잡을 수 없지!" 느낌으로 도망가게 만들기 위해 position을 fixed로 변경
    noBtn.style.position = 'fixed';

    // 브라우저 화면 크기에서 버튼 크기를 뺀 가용 범위 계산
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // 랜덤 좌표 생성
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // 좌표 적용
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  };

  // 마우스가 근처에만 가도(mouseover) 도망감
  noBtn.addEventListener('mouseover', moveButton);

  // 혹시나 터치 기기나 매우 빠른 클릭으로 클릭했을 경우 방어
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton(); // 클릭되는 순간에도 도망감
  });

  // 2. YES 버튼 클릭 시 문구 변경
  yesBtn.addEventListener('click', () => {
    studyMessage.textContent = '야호!! 🎉';
    studyMessage.style.color = 'var(--accent-color)';
    studyMessage.style.transform = 'scale(1.2)';
    studyMessage.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    // YES를 누르면 NO 버튼은 이제 사라지게 함 (승리!)
    noBtn.style.display = 'none';
  });
});
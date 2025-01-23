// 라디오 버튼 클릭 시 이미지 업데이트
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[name="hobby"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const selectedHobby = event.target.value;
            const imageElement = document.getElementById('hobby-image');

            // 취미별 이미지 업데이트
            switch (selectedHobby) {
                case 'game':
                    imageElement.src = 'lol.gif';
                    imageElement.alt = 'Gaming';
                    break;
                case 'music':
                    imageElement.src = 'piano.png';
                    imageElement.alt = 'Music';
                    break;
                case 'baseball':
                    imageElement.src = 'baseball.png';
                    imageElement.alt = 'Baseball';
                    break;
                case 'drink':
                    imageElement.src = 'drink.png';
                    imageElement.alt = 'Drink';
                    break;
            }
        });
    });
});

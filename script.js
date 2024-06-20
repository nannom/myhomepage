var chars = ["clara.html","ameliawatson.html","takanashihoshino.html","myoya.html","ichihime.html","lumine.html","gawrgura.html","miu.html","yoyo.html"]
var images = ["main_clara.png","main_ameliawatson.png","main_takanashihoshino.png","main_myoya.png","main_ichihime.png","main_lumine.png","main_gawrgura.png","main_miu.png","main_yoyo.png"]
var codes = ["helloworld.txt"]
var selected = 0;
var now_screen = 0;
function loadimage() {
    var j = selected;
    for(var i = 1;i<=chars.length;i++) {
        const element = document.getElementById('main' + i);
        if(i == 5) {
            element.innerHTML = '<img src="' + images[j] + '" alt="' + chars[j] + '" class="image" onclick="moveto(' + j +')"/>';
        }
        else {
            element.innerHTML = '<img src="' + images[j] + '" alt="' + chars[j] + '" class="image" />';
        }
        j++;
        if(j >= chars.length) {
            j = 0;
        }
    }
}
async function loadcode() {
    for(var i = 0;i<codes.length;i++) {
        try {
            // 서버로부터 HTML 코드를 가져오기
            const response = await fetch(codes[i]); // 서버의 URL을 실제 서버 URL로 대체하세요.
            
            // 요청이 성공적인지 확인
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
         
            // 텍스트 형식으로 응답을 받음
            const html = await response.text();
        
            // main 클래스를 가진 div를 찾아서 innerHTML을 설정
            const mainDiv = document.querySelector('#code' + i);
            if (mainDiv) {
                mainDiv.innerText = html;
                now_screen = n;
            }
            else {
                console.error('main 클래스를 가진 div를 찾을 수 없습니다.');
            }
        }
        catch (error) {
            console.error('HTML을 로드하는 중 오류가 발생했습니다:', error);
        }
    }
}
async function moveto(n) {
    try {
        // 서버로부터 HTML 코드를 가져오기
        const response = await fetch(chars[n]); // 서버의 URL을 실제 서버 URL로 대체하세요.
        
        // 요청이 성공적인지 확인
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 텍스트 형식으로 응답을 받음
        const html = await response.text();
        
        // main 클래스를 가진 div를 찾아서 innerHTML을 설정
        const mainDiv = document.querySelector('.main');
        if (mainDiv) {
            const newUrl = chars[n]; // 상대 경로로 URL 변경
            const newState = { additionalInformation: 'Updated URL with replaceState' };
            const title = 'New URL Page';

            try {
                history.pushState(newState, title, newUrl);
                console.log('URL successfully updated to: ', newUrl);
            } catch (error) {
                console.error('Error updating URL: ', error);
            }
            mainDiv.innerHTML = html;
            now_screen = n;
        } else {
            console.error('main 클래스를 가진 div를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('HTML을 로드하는 중 오류가 발생했습니다:', error);
    }
}
async function loadmain() {
    try {
        // 서버로부터 HTML 코드를 가져오기
        const response = await fetch('main.html'); // 서버의 URL을 실제 서버 URL로 대체하세요.
        
        // 요청이 성공적인지 확인
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 텍스트 형식으로 응답을 받음
        const html = await response.text();
        
        // main 클래스를 가진 div를 찾아서 innerHTML을 설정
        const mainDiv = document.querySelector('.main');
        if (mainDiv) {
            const newUrl = "/"; // 상대 경로로 URL 변경
            const newState = { additionalInformation: 'Updated URL with replaceState' };
            const title = 'New URL Page';

            try {
                history.pushState(newState, title, newUrl);
                console.log('URL successfully updated to: ', newUrl);
            } catch (error) {
                console.error('Error updating URL: ', error);
            }
            mainDiv.innerHTML = html;
            loadimage();
            loadcode();
            now_screen = 0;
        } else {
            console.error('main 클래스를 가진 div를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('HTML을 로드하는 중 오류가 발생했습니다:', error);
    }
}
window.addEventListener('popstate', async (event) => {
    if(window.location.pathname == "/") {
                try {
        // 서버로부터 HTML 코드를 가져오기
                    const response = await fetch('main.html'); // 서버의 URL을 실제 서버 URL로 대체하세요.
        
        // 요청이 성공적인지 확인
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
        
        // 텍스트 형식으로 응답을 받음
                    const html = await response.text();
        
        // main 클래스를 가진 div를 찾아서 innerHTML을 설정
                    const mainDiv = document.querySelector('.main');
                    if (mainDiv) {
                        mainDiv.innerHTML = html;
                    } else {
                        console.error('main 클래스를 가진 div를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('HTML을 로드하는 중 오류가 발생했습니다:', error);
                }
                loadimage();
        now_screen = 0;
    }
    else {
        for(var n = 0;n<chars.length;n++) {
            if(window.location.pathname == "/" + chars[n]) {
                try {
        // 서버로부터 HTML 코드를 가져오기
                    const response = await fetch(chars[n]); // 서버의 URL을 실제 서버 URL로 대체하세요.
        
        // 요청이 성공적인지 확인
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
        
        // 텍스트 형식으로 응답을 받음
                    const html = await response.text();
        
        // main 클래스를 가진 div를 찾아서 innerHTML을 설정
                    const mainDiv = document.querySelector('.main');
                    if (mainDiv) {
                        mainDiv.innerHTML = html;
                        now_screen = n;
                    } else {
                        console.error('main 클래스를 가진 div를 찾을 수 없습니다.');
                    }
                } catch (error) {
                    console.error('HTML을 로드하는 중 오류가 발생했습니다:', error);
                }
            }
        }
    }
});
function swap_left() {
    selected--;
    if(selected < 0) {
        selected = chars.length - 1;
    }
loadimage();
}
function swap_right() {
    selected++;
    if(selected >= chars.length) {
        selected = 0;
    }
    loadimage();
}
function mainloop() {
    if(now_screen != 0) {
        document.body.style.backgroundColor = `rgb(255,255,255)`;
    }
    else if(window.scrollY > window.innerWidth * 0.25) {
        document.body.style.backgroundColor = `rgb(30,30,30)`;
        document.getElementById("title").style.backgroundColor = `rgb(255,255,255)`;
    }
    else {
        document.body.style.backgroundColor = `rgb(255,255,255)`;
        document.getElementById("title").style.backgroundColor = `pink`;
    }
}
loadmain();
setInterval(mainloop, 20);

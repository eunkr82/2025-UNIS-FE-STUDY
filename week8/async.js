/*
async fuction init(){
    //메뉴 선언
    let menu;
    //메뉴 데이터 호출 할당
    menu = fetchMenu();
    //메뉴 데이터 콘솔 출력
    console.log(menu);
    //시간 관계없이 실행할 수 있게 해주는 async&await
}
*/

init();

//앞서 했던거 바꿔 써보기

async function init(){
    try{
        //1. 변수 선언
        let menu;
        //2. 데이터 받아오기
        menu = await fetchMenu();
        //3. 결과 출력
        console.log("출력 결과 : ", menu);
    }catch(error){
        //4. 에러 출력
        console.log("에러 처리");
    }
}

fetchMenu()
    .then(function(result){
        console.log("5초 뒤 실행", result);
        menu = result;
        console.log("출력 결과 : ", menu);
    })
    .then(function(result){})

//예외처리
//try catch
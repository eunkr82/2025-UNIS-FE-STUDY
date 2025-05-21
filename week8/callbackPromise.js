function fetchMenu(callbackFunction){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            let data = {firstMenu:"구독"};

            if(error){
                throw new Error;
                reject(error);
            }
            //callbackFunction(error, data);
            //return data;
            resolve(data);
        }, 5000);
    });

    /*
    setTimeout{()=>{
        // #2
        let data = {firstMenu:"구독"};
        
        callbackFunction(error, data);
        return data;
    }, 5000};
    //return {firstMenu:"구독"};
    */
}
//패치메뉴의 반환값이 프로미스가 됨

let menu;

//프로미스 문법으로 작성된 코드
fetchMenu()
.then(renderPageUI)
.then(function(result){
    //호출되면 실행할 코드를 넣어주세요
    console.log("5초 뒤 실행", result);
    menu = result;
})
.catch(function(error){
    console.log("에러 처리");
    return;
});

//콜백함수로 작성된 코드
fetchMenu(function(error, result){
    if(error){
        console.log("에러 처리");
        return;
    }
    //호출되면 실행할 코드를 넣어주세요
    console.log("5초 뒤 실행", result);
    menu = result;
    //#1
    console.log("출력 결과 : ", menu);

    renderPageUI(fuction(response){
        response;
        menu;
    });
})
//일급함수의 성질을 통해 호출
//콜백헬: 에러 처리가 어려워짐, 중첩되는 형태 -> 비용 증가
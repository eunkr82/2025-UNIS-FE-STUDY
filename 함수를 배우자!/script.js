function getCircleArea(radius){
    return radius * radius * 3.14;
  }
  const area = getCircleArea(10);
  console.log(`원의 넓이: ${area}`); // 10장 1번

  function getOrderDesc(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      const currentNumber = arr[i];
      if(result < currentNumber){
        result = currentNumber
      }
    }
    return result;
  }
  const result = getOrderDesc([10, 20, 100, 30, 40]);
  console.log(result) // 10장 2번

  function getBMI(height, weight){
    const h = height / 100; 
    const bmi = weight / (h * h);
    if(bmi > 25) return "비만"
    else if(bmi > 24 && bmi <=25) return "과체중"
    else if(bmi > 18.5 && bmi <=25) return "정상"
    else return "저체중";
  }
  const bmi = getBMI(180,70);
  console.log("bmi: " + bmi); // 10장 3번

  <body>
  <button onclick="popup()">팝업</button>
  <script>
    function popup(){
      const left = (screen.availWidth - 500) / 2 + window.screenX;
      const top = (screen.availHeight - 300) / 2;
      window.open('https://google.com', 'popup', 'width=500, height=300, left=' + left + ', top=' + top);
      console.log(window.screenX);
    }
  </script>
</body> // 11장 2번


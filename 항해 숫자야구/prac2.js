const baseballGame = () => {
  console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
  let randomNum;
  let strike = 0;
  let ball = 0;
  let feedBack;
  let randomNumArr = [];
  while (randomNumArr.length < 3) {
    randomNum = Math.floor(Math.random() * 10);
    if (randomNumArr.filter((num) => num === randomNum).length === 0) {
      randomNumArr.push(randomNum);
    }
  }

  for (let tryNum = 1; tryNum > 0; tryNum++) {
    let input = prompt(`${tryNum}번째 시도`);
    console.log(`${tryNum}번째 시도 : ${input}`);

    if (strike === 3) {
      break;
    } else {
      strike = 0;
    }

    let inputArr = input
      .toString()
      .split('')
      .map((val) => Number(val));
    preball = randomNumArr.filter((num) => inputArr.includes(num)).length;
    for (let i = 0; i < inputArr.length; i++) {
      randomNumArr[i] === inputArr[i] ? strike++ : null;
    }
    ball = preball - strike;
    if (ball === 3) {
      feedBack = '3B';
    } else if (strike === 3) {
      feedBack = '3S';
      console.log(`${tryNum}번만에 맞히셨습니다.`);
      console.log('게임을 종료합니다.');
      return;
    } else {
      feedBack = `${ball}B${strike}S`;
    }
    console.log(feedBack);
  }
};

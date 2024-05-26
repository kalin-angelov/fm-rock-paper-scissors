export  const houseChoice = (selected, points) => {
    let houseWeapon;
    let result;
    let score;

    const noPoint = points + 0;
    const wonPoint = points + 1;
    const losePoint = (points - 1 < 0) ? 0 : points - 1;

    const lose = "You Lose";
    const won = "You Won";
    const draw = "Draw";
    
    const houseChoice = Math.floor(Math.random() * 3) + 1;

    if (houseChoice === 1) {
        houseWeapon = "paper";
        switch (selected) {
          case "paper":
            result = draw;
            score = noPoint;
            break;
          case "rock":
            result = lose;
            score = losePoint;
            break;
          case "scissors":
            result = won;
            score = wonPoint;
            break;
        }
    } else if (houseChoice === 2){
        houseWeapon = "scissors";
        switch (selected) {
            case "scissors":
            result = draw;
            score = noPoint;
            break;
            case "paper":
            result = lose;
            score = losePoint;
            break;
            case "rock":
            result = won;
            score = wonPoint;
            break;
        }
    } else {
        houseWeapon = "rock";
        switch (selected) {
            case "rock":
            result = draw;
            score = noPoint;
            break;
            case "scissors":
            result = lose;
            score = losePoint;
            break;
            case "paper":
            result = won;
            score = wonPoint;
            break;
        }
    }

    return {
        houseWeapon,
        result,
        score
    };
};
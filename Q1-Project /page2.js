function differential (scores) {
  let diffs = [];
  if (scores.score.length > 20) {
    let newest20Score = mostRecent(scores.score);
    let newest20Rating = mostRecent(scores.rating);
    let newest20Slope = mostRecent(scores.slope);
    for (var i = 0; i < newest20Score.length; i ++) {
      diffs.push((newest20Score[i] - newest20Rating[i]) * 113 / newest20Slope[i]);
    }
  } else {
    for (var j = 0; j < scores.score.length; j ++) {
    diffs.push((scores.score[j] - scores.rating[j]) * 113 / scores.slope[j]);
    }
  }
  return diffs;
}

//Step 4   function to use if scores entry list is longer than 20 scores. function returns array of most recent 20 scores

function mostRecent(array) {
  let newArray = [];
  for (var i = array.length - 1; i >= 0; i --) {
    if (newArray.length !== 20) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


//Step 2;  following function should return lowest differential from the differential(scores) function

function minDif (scores) {
  let minDiffs = differential(scores).sort(function(a, b){return a-b});
  let numOfScores = minDiffs.length;

  if (numOfScores >= 5 && numOfScores < 7) {
    return minDiffs.slice(0, 1);
  } else if (numOfScores === 7 && numOfScores < 9) {
    return minDiffs.slice(0, 2);
  } else if (numOfScores === 9 && numOfScores < 11) {
    return minDiffs.slice(0, 3)
  } else if (numOfScores === 11 && numOfScores < 13) {
    return minDiffs.slice(0, 4);
  } else if (numOfScores === 13 && numOfScores < 15) {
    return minDiffs.slice(0, 5);
  } else if (numOfScores === 15 && numOfScores < 17) {
    return minDiffs.slice(0, 6);
  } else if (numOfScores === 17) {
    return minDiffs.slice(0, 7);
  } else if (numOfScores === 18) {
    return minDiffs.slice(0, 8);
  } else if (numOfScores === 19) {
    return minDiffs.slice(0, 9);
  } else {
    return minDiffs.slice(0, 10);
  }
}

// if HDCPIndex is below 0, function returns + instead of -
function numToPlus (num) {
    let newNum = Math.abs(num)
    return "+" + newNum;
  }

// Step1; following works for positive differantials for only sets of 6 or fewer scores and hdcp under 10
function HDCPIndex (scores) {
  if (scores.score.length < 5) {
    return "Minimum of 5 scores needed";
  }
  let diffs = minDif(scores);
  let diffTotal = 0;
    for (var i = 0; i < diffs.length; i ++) {
      diffTotal += diffs[i];
    }
  let avg = diffTotal / diffs.length
  if (avg < 0) {
    return numToPlus(avg).toString().substring(0, 4);
  } else if (avg >= 1 && avg < 10) {
    return avg.toString().substring(0, 3);
  } else {
    return avg.toString().substring(0, 4);
  }
}

let handicapForm = document.getElementById("handicap-form")
let calculateHandicap = document.getElementById("post")
let formControl = document.querySelectorAll('.form-control')
let scores = {
  score: [],
  rating: [],
  slope: []
}



function myFunction() {
  let page1Scores = JSON.parse(localStorage.getItem('savedData'));
  console.log(page1Scores);
  console.log(HDCPIndex(page1Scores))
  scores.score.push(formControl[1].value)
  scores.rating.push(formControl[2].value)
  scores.slope.push(formControl[3].value)
  console.log('HDCPIndex = ', HDCPIndex(page1Scores))
  console.log('user = ', document.getElementById("usr"));
  document.getElementById("usr").value=HDCPIndex(scores)
  console.log('user1 = ', document.getElementById("usr1"));
  // console.log(document.getElementById("usr1").value);
  document.getElementById("usr1").value=HDCPIndex(page1Scores)

}

function gradeCalculator(korean,math){
    let max;
    if (korean>math){
        max=korean
    }else{
         max=math
    }
    let average=(korean+math)/2
    const result={1:max,2:average}
    return result
}
let grade=gradeCalculator(100,80)
console.log('가장높은점수'+grade[1])
console.log('평균'+grade[2])
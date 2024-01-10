import randomNumbers from "random-numbers";

//Generate eight random numbers to get random characters from the api.
function getEightRandomNumbers(){
    let nums = [];
    let currentNum;
    for(let i = 0; i < 8; i++){
        currentNum = randomNumbers.create(0, 826);
        while(nums.includes(currentNum)){
            currentNum = randomNumbers.create(0, 826);
            console.log("skip");
        }
        nums[i] = currentNum;
    }
    return nums;
}

export default getEightRandomNumbers;
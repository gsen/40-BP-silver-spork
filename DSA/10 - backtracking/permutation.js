// [1, 2, 3]

// 3 !=> 6

// choice // => [1] 
// explore [1,2,3] => save
// explore[1,3,2] => save
// backtrack
// [2, _,_] 
// backtrack

// [1, 2, 3]
function findPermutations(list) {
    const result = [];
    const currentSolution = [];
    const numberUsed = new Array(list.length).fill(false);




    function backtrack() {
        // base case: if we have used all the numbers , save this permutation

        if (currentSolution.length === list.length) {
            result.push([...currentSolution])
            console.log({ result });

            return;
        }
        for (let index = 0; index < list.length; index++) {
            console.log({ numberUsed });
            console.log({ currentSolution })
            // skip this position if we have already used the number
            if (numberUsed[index]) {
                continue
            }
            // add this number to the permutation
            currentSolution.push(list[index]);
            numberUsed[index] = true;

            // explore
            backtrack();
            currentSolution.pop();
            numberUsed[index] = false;
        }
    }
    backtrack();
    return result;
}


console.log(findPermutations([1, 2]))

// O(n * n!)



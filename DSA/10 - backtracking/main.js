
// [1,2,3]

// [] - save
// [1] - save
// [1,2] - save
// [1,2,3] - save 
// remove 3
// [1,2]
// remove 2
// [1,3] - save
// remove 3
// remove 1
// [2] - save
// [2,3] - save
// remove 
// 3,2
// [3] - save
// remove

// function backtrack(state, choices){

//     for(let choice of choices){
//         makeChoice(state, choice);

//         explore
//         backtrack(state,choice)

//         undoChoice(state, choice)
//     }
// }

// q find all subsets of the given array
let input = [1, 2, 3]

function subsets(numbers) {
    const result = [];
    const currentSolution = [];

    function backtrack(start) {
        console.log("======start=====", start)
        result.push([...currentSolution]); // every state is a valid solution 1
        for (let index = start; index < numbers.length; index++) { //n - size of input
            currentSolution.push(numbers[index]); // made a choice
            console.log({ currentSolution });
            backtrack(index + 1); // explore
            console.log("------pop called-------");

            console.log(currentSolution.pop()) // undo choice

        }

    }
    backtrack(0);
    return result;
}

// start = 0
// results = [[]];
// currentSolution = [1]

// start = 1
// result[[],[1]]
// currentSolution = [1,2]

// start = 2
// result [[],[1],[1,2]]
// currentSolution = [1,2,3]

// start = 3
// result[[], [1], [1, 2], [1, 2, 3]]
// remove 3 [1,2]
// remove 2 
// [1,3]
// ...

// [1, 2, 3]
// 2 ^ 3 = 8

console.log(subsets(input))


// [1] => pop (2)
// [1,2] => pop(3)
// [1,2,3]

// [2] 
// [2,3] pop(2)
// pop(3)

// [3]
// pop(3)

// result -> 

// {t,v} 
// {x,y,z}

// catersian product => { t, v } x { x, y, z } => {tx, ty,tz, vx,vy,vz }

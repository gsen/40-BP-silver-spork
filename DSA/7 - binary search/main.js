// // find the upper bound using binary search

// [1,2,3,4,4,4,7,9]
//  0 1 2 3 4 5 6 7
// l = 0
// r = list.length

// mid = Math.floor( l + (r-l)/2)

// if(list[mid]<= x){
//   l = mid +1  
// }else{
//     r = mid
// }
// return l;

// x = 7
// l= 0
// r = 8
// mid = 4
// list[4] -> 4
// 4 < = 7 => true


// l = 5
// r= 8
// mid = 8+5/2 => 6
// list[6] -> 7
// 7 <= 7

// l = 7
// r=8

// mid = 15/2 => 7
//  9 <= 7 => false
// r= 7

// is l < r => false

// return l 

function upperBound(list, x) {
    let left = 0;
    let right = list.length;

    console.log({ list, x });

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (list[mid] <= x) {
            left = mid + 1; // we need to move right since the value needs to be > x
        } else {
            right = mid;
        }


    }
    return left;
}

console.log(upperBound([1, 2, 3, 4, 4, 4, 7, 9], 7))
console.log(upperBound([1, 2, 3, 4, 4, 4, 7, 9], 4))
console.log(upperBound([1, 2, 3, 4, 4, 4, 7, 9], 2))
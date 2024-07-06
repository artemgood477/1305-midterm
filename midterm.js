// Q1 O(n).

//calculate the expected sum of all numbers from 1 to n, then subtract the sum of the array to find the missing number.

function findMissingNumber(array, n) {
    let totalSum = n * (n + 1) / 2; //sum of first n natural numbers.
    let arraySum = 0;
    
    //sum of elements in the array.
    for (let num of array) {
        arraySum += num;
    }
    
    //get the missing number.
    return totalSum - arraySum;
}

console.log(findMissingNumber([5, 4, 1, 2], 5)); 
console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10)); 
console.log(findMissingNumber([2, 3, 1, 5], 5)); 
console.log(findMissingNumber([1, 2, 3, 4, 5], 6)); 



//Q1 O(n log n).

//sort the array and then find the first missing number by comparing consecutive elements.

function findMissingNumber(array, n) {
    array.sort((a, b) => a - b); //sort the array.
    
    //find the first missing number.
    for (let i = 0; i < n; i++) {
        if (array[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n; // if all numbers are present return n.
}

console.log(findMissingNumber([5, 4, 1, 2], 5)); 
console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10)); 
console.log(findMissingNumber([2, 3, 1, 5], 5)); 
console.log(findMissingNumber([1, 2, 3, 4, 5], 6)); 



//Q2 O(n^2).

//use nested loops to find two numbers that sum up to the target.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 5, 2, 7], 8)); 
console.log(twoSum([20, 1, 5, 2, 11], 3)); 
console.log(twoSum([3, 2, 4], 6)); 



//Q4 O(n).

//use a hash set to track visited nodes as you traverse the linked list. If you encounter a node that is already in the set, it indicates a cycle.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function checkIfCycleExists(head) {
    let visited = new Set(); 
    let current = head; //start traversal from the head of the linked list.
    
    while (current) {
        if (visited.has(current)) {
            return true; //cycle detected.
        }
        visited.add(current); //add current node to the set of visited nodes.
        current = current.next; //move to the next node.
    }
    
    return false; //no cycle found.
}

let head1 = new ListNode('A');
head1.next = new ListNode('B');
head1.next.next = new ListNode('C');
head1.next.next.next = head1; //cycle.
console.log(checkIfCycleExists(head1));

let head2 = new ListNode('1');
head2.next = new ListNode('2');
head2.next.next = new ListNode('3');
console.log(checkIfCycleExists(head2)); 

let head3 = new ListNode('1');
head3.next = new ListNode('2');
head3.next.next = new ListNode('3');
head3.next.next.next = head3; //cycle.
console.log(checkIfCycleExists(head3)); 



//Q5 O(n)

//use a stack to keep track of opening parentheses. For each closing parenthesis encountered, check if it matches the most recent opening parenthesis in the stack.

function checkIfValidParenthesis(str) {
    let stack = []; //stack to keep track of opening parentheses.
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of str) {
        if (char in map) {
            stack.push(char); //push opening brackets onto stack.
        } else {
            let top = stack.pop(); //pop stack and check matching brackets.
            if (char !== map[top]) {
                return false; //invalid parentheses.
            }
        }
    }
    
    return stack.length === 0; //stack should be empty if all parentheses matched.
}

console.log(checkIfValidParenthesis("()")); 
console.log(checkIfValidParenthesis("(){}[]"));
console.log(checkIfValidParenthesis("([})")); 
console.log(checkIfValidParenthesis("[({})]")); 

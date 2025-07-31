# TalentDeskApp - Interview Exercises

---

## Table of Contents

### Setup

1. [Tech Stack](#tech-stack)
2. [Running the Application](#running-the-application)

### Requirements

1. [Assignment](#assignment)
2. [React Component](#react-component)
3. [Function Definition](#function-definition)
    - [Details](#details)
4. [Bonus](#bonus)
    - [Complexity](#complexity)
    - [Make it Memory Efficient](#make-it-memory-efficient)
    - [Make it Time Efficient](#make-it-time-efficient)

### Solution Proposal

1. [Performance Comparison of `detectSums` Implementations](#performance-comparison-of-detectsums-implementations)

---

## Tech Stack

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity

---

## Running the Application

In the project directory, you can run:

```bash
npm start
```

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in interactive watch mode.  
See more details on [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

---

## Assignment

Complete the React Component under `App.tsx` to calculate a specific function based on user input.  
The function is named `detectSums` and is described below.

Write tests for both the React component and the function to ensure a smooth user experience.

---

## React Component

- In case of an error, or an empty input, it should show a respective error message to the user.
- You may write tests, to make sure the component renders the correct information according to each case.
- You may install and use any third party libraries you may need either for the component, the form or the tests.

### Function definition

`detectSums()`:

- Input: an array of numbers, e.g. `A = [1, 2, 3]`
- Output: an array of matches, as objects, containing keys `pA`, `pB`, `sum` such that `A[p1] + A[p2] === A[sum]`, e.g.
  `[{ pA: 0, pB: 1, sum: 2 }]]`

#### Details

- __parts may appear in any order__, so for input `[1, 2, 3]`, either `[{ pA: 0, pB: 1, sum: 2 }]]` or
  `[{ pA: 1, pB: 0, sum: 2 }]]` are valid
- __every combination of sum and parts__ must appear __once__ in the results, so for input `[1, 2, 3]`, the result
  `[{ pA: 0, pB: 1, sum: 2 }, { pA: 1, pB: 0, sum: 2 }]` is invalid
- You should write your own tests to cover any edge cases you may think of.
- You may install and use any third party libraries.
- You should use ES6 syntax
- You may provide multiple versions of the function, detailing advantages/disadvantages of each

---

## Bonus

### Complexity

Provide the time and memory complexity of your function.

### Make it Memory Efficient

Suppose we have memory limitations, e.g. mobile, but no time limitations. Provide a memory-efficient version of the
function.

### Make it Time Efficient

Suppose we have unlimited memory, but we want it to be fast. Provide a time-efficient version of the function.

---

## Performance Comparison of `detectSums` Implementations

| Implementation                    | Time Complexity | Space Complexity | Best For                                          |
|-----------------------------------|-----------------|------------------|---------------------------------------------------|
| `detect-sums.ts` (Brute-Force)    | O(n³)           | O(n + r)         | Simplicity, but inefficient for `n > 100`.        |
| `detect-sums-time-efficient.ts`   | O(n² × k)       | O(n + r)         | Most use cases; best balance of speed and memory. |
| `detect-sums-memory-efficient.ts` | O(n³)           | O(r)             | Extremely memory-constrained environments.        |

---

### Implementation Tradeoffs

- **`detect-sums.ts`**: This version is the initial straightforward, brute-force implementation
- **`detect-sums-memory-efficient.ts`**: Only suitable for very small inputs or extremely memory-constrained
  environments
- **`detect-sums-time-efficient.ts`**: Best for performance-critical applications with large datasets

# React Native: Subtle Type Errors from Third-Party Library Prop Mismatches

This repository demonstrates a common, yet subtle, bug in React Native applications involving type mismatches in props passed to third-party libraries.  The error often manifests as a runtime error, rather than a compile-time error, making it difficult to debug.

## Problem
The `BuggyComponent.js` file showcases a scenario where a third-party component (`MyComponent`) expects a string prop, but receives a number. This leads to a runtime error which is not always easily detected.

## Solution
The `FixedComponent.js` file demonstrates the solution: ensuring the prop passed to `MyComponent` is of the correct type (string in this case).  Type checking and careful attention to prop types are crucial to prevent such errors.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run the project (using Expo or similar).
4. Observe the error in `BuggyComponent.js` and the corrected behavior in `FixedComponent.js`.
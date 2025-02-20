# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook. The `useEffect` hook, without proper dependency array management, can lead to unexpected behavior, especially when attempting to update state within the effect itself.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install necessary dependencies.
3. Run `npm start` to start the React development server.
4. Observe the rapidly increasing count in the browser.
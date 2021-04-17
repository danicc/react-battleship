# Single Player Battleship

One-player version of the classic board game Battleship!.

## Description

 By default there will be **10** ships hidden in random locations on a square grid. The player will have some predefined moves to try to sink all of the ships.

### Design constraints
- The board should be a 10x10 grid, where rows should be named A-J and columns 1-10.
- The ships should be randomly positioned throughout the board, vertically and horizontally, making sure that none of them overlap.
- The number of turns (or attempts) should be entered by the user before starting the game, and there should also be 3 pre-defined levels to select from: easy (infinite turns), medium (100 turns), hard (50 turns).

Ships:

- 1 that is 4 spaces long.
- 2 that are 3 spaces long.
- 3 that are 2 spaces long.
- 4 that are 1 space long.


## Available Scripts


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
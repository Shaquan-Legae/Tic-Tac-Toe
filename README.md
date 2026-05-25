# Tic-Tac-Toe

A polished, responsive Tic-Tac-Toe game built with React and Vite. The app uses a reducer-driven state model, supports move history with time travel, keeps score across rounds, and includes a clean light/dark theme system inspired by modern Apple-style interfaces.

## Features

- Classic 3x3 Tic-Tac-Toe gameplay
- Random starting player on first load and every restart
- Win detection for rows, columns, and diagonals
- Draw detection with explicit `Draw!` status
- Move history dropdown with time travel
- Scoreboard for X wins, O wins, and draws
- Light and dark mode theme toggle
- Dark-mode-only player glow effects
- Responsive, no-scroll layout
- Vite-powered development and production builds

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- ESLint

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd Tic-Tac-Toe
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## npm Commands

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production-ready build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for testing.

```bash
npm run lint
```

Runs ESLint across the project.

## Folder Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── src
    ├── main.jsx
    ├── App.jsx
    ├── gameReducer.js
    ├── styles.css
    ├── components
    │   ├── Board.jsx
    │   ├── MoveHistory.jsx
    │   ├── Scoreboard.jsx
    │   ├── Square.jsx
    │   └── Status.jsx
    └── utils
        └── gameLogic.js
```

## Game Functionality

Players take turns placing `X` and `O` on a 3x3 board. The game prevents overwriting filled squares and stops new moves after a win or draw. The status text updates automatically to show the next player, winner, or draw state.

The starting player is chosen randomly when the app loads and whenever the current round is restarted.

## State Management

Game state is managed with React `useReducer`.

The reducer tracks:

- `history`: all board states for time travel
- `currentMove`: the selected move in history
- `startingPlayer`: the randomized starter for the current round
- `roundResult`: the result of the current round
- `scores`: totals for X wins, O wins, and draws
- `theme`: current light or dark theme

This keeps the app predictable and avoids spreading game logic across multiple components.

## Responsive Design

The interface is built to stay centered and fit inside the viewport without horizontal or vertical scrolling. The board, controls, spacing, and typography scale with viewport size so the game remains usable on desktop, tablet, and mobile screens.

## Theme System

The app defaults to dark mode and includes a compact symbol toggle:

- `☾` for dark mode
- `☀︎` for light mode

Theme state is stored in the reducer and applied globally with a `data-theme` attribute. Dark mode adds subtle neon styling for player marks, while light mode uses clean solid colors.

## Move History

Move history is shown as a compact dropdown. Selecting a previous move jumps the board back to that state, allowing the player to review or continue from an earlier position.

Labels are intentionally simple:

- `Game Start`
- `Move 1`
- `Move 2`
- etc.

## Scoreboard

The scoreboard tracks:

- X wins
- O wins
- Draws

Scores persist across restarts during the current session. Restarting clears only the board and selects a new random starting player.

## Deployment

https://shaquan-tictactoe.netlify.app/

## Future Improvements

- Add optional sound effects
- Add persistent scores with `localStorage`
- Add keyboard navigation enhancements
- Add round history
- Add simple animations for winning lines

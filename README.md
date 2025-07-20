# Smart Goal Planner

A single-page web application for managing multiple savings goals, tracking progress, and making deposits using a local JSON-based API.


## Description

Smart Goal Planner is a minimalist, interactive web app that allows users to create, manage, and track financial goals. Built with React and Vite, it uses a local json-server to simulate a REST API for full CRUD functionality. Users can add goals, make deposits, track progress with visual progress bars, and view an overview of their savings. The app demonstrates core React concepts, asynchronous API interaction with fetch, and responsive design.

## Project structure
smart-goal-planner/
├── src/
│   ├── components/
│   │   ├── GoalList.jsx
│   │   ├── GoalCard.jsx
│   │   ├── AddGoalForm.jsx
│   │   ├── DepositForm.jsx
│   │   ├── Overview.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
├── public/
│   ├── db.json (optional, for Vercel static hosting)
├── package.json
├── vite.config.js
├── db.json (for local json-server)

## Features

- *Home Page*: Displays a welcome message, overview, and navigation for managing goals.
- *Goal Management*: Create, read, update, and delete financial goals (e.g., "Travel Fund," "Emergency Fund") using a local JSON-based API.
- *Progress Tracking*: Visual progress bars, saved amount, target amount, and remaining amount for each goal.
- *Deposits*: Add deposits to specific goals, updating their progress in real-time.
- *Overview*: Shows total goals, total saved amount, and number of completed goals.
- *Deadline Alerts*: Highlights goals due within 30 days ("Due Soon") or overdue ("Overdue").
- *Responsive Design*: Clean, user-friendly layout optimized for desktop and mobile.

## How to Use

### Requirements

- A computer, tablet, or phone
- Access to the internet
- A modern web browser
- Node.js installed (for local development)

### View Live Site

Note: As this project uses a local json-server, there is no live site hosted. Follow the local development instructions below to run the app.

The app allows you to:

- Create and delete financial goals
- Make deposits to existing goals
- Track progress with visual bars and deadline alerts
- View a summary of all savings activity

### Local Development

To run the project locally, you'll need:

- Code editor (VS Code recommended)
- Terminal/Command Line
- Node.js and npm installed

## Notes

- The app expects the backend to be running at http://localhost:3000.
- All data is stored in db.json and managed by json-server.

## AUTHOR

Jackson

## Contact Details

- Email: <jacksonmungai001@gmail.com>

## License

MIT License

Copyright (c) 2025 Jackson Mungai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
<<<<<<< HEAD
Your local README content
=======
GitHub's README content
>>>>>>> origin/main
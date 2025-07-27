
# Smart Goal Planner

A single-page web application for managing multiple savings goals, tracking progress, and making deposits using a local JSON-based API.

#### By 

Jackson

## Description

Smart Goal Planner is a minimalist, interactive web app that allows users to create, manage, and track financial goals. Built with React and Vite, it uses a local json-server to simulate a REST API for full CRUD functionality. Users can add goals, make deposits, track progress with visual progress bars, and view an overview of their savings. The app demonstrates core React concepts, asynchronous API interaction with fetch, and responsive design.


## Features

- Home Page: Displays name of the web app, overview, and navigation for managing goals.
- Goal Management: Create, read, update, and delete financial goals (e.g., "Travel Fund," "Emergency Fund") using a local JSON-based API.
- Progress Tracking: Visual progress bars, saved amount, target amount, and remaining amount for each goal.
- Deposits: Add deposits to specific goals, updating their progress in real-time.
- Overview: Shows total goals, total saved amount, and number of completed goals.
- Deadline Alerts: Highlights goals due within 30 days ("Due Soon") or overdue ("Overdue").

## Setup Instructions (Local Development)
Follow these steps to run the project locally:

1. Clone the Repository
git clone https://github.com/JACKMUNGAI001/smart-goal-planner.git
cd smart-goal-planner

2. Install Dependencies
npm install

3. Start JSON Server (Local API)
You'll use json-server to simulate the backend using db.json.
npm install -g json-server (if not already installed).
Start the mock backend json-server --watch db.json --port 3000
This will start your backend at:
http://localhost:3000/goals

4. Start the React App
In a new terminal tab:
npm run dev
This will start the frontend at:
http://localhost:5173

## API Overview (db.json)
Each goal has the following structure:

json
{
  "id": "1",
  "name": "Travel Fund - Japan",
  "targetAmount": 5000,
  "savedAmount": 3200,
  "category": "Travel",
  "deadline": "2025-12-31",
  "createdAt": "2024-01-15"
}

### API Endpoints

GET /goals – fetch all goals

POST /goals – create a new goal

PATCH /goals/:id – update goal fields (e.g., deposit)

PUT /goals/:id – full update

DELETE /goals/:id – delete a goal

## Folder Structure

src/
components/         #UI components; GoalCard, GoalList, DepositForm, Overview and AddGoalForm
App.css             # Styling
App.jsx             # Main component
main.jsx            # Entry point
db.json             # Mock database used by json-server


### View Live 

Deployed link; https://smart-goal-planner-beige.vercel.app/
Backend live link; https://smart-goal-planner-8.onrender.com/goals

## Technologies 

Frontend: React.js
Mock Backend: json-server
Styling: CSS
Hosting: Vercel (frontend), Render (backend)

## Related repositories 

Repository link; https://github.com/JACKMUNGAI001/smart-goal-planner.git
Deployed API; https://smart-goal-planner-8.onrender.com/goals


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

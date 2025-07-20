import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: '',
  });
  const [deposit, setDeposit] = useState({ goalId: '', amount: '' });

  // Fetch goals on load
  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then(response => response.json())
      .then(data => setGoals(data))
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  // Add new goal
  const handleAddGoal = (e) => {
    e.preventDefault();
    const goal = {
      ...newGoal,
      id: Date.now().toString(),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal),
    })
      .then(response => response.json())
      .then(data => {
        setGoals([...goals, data]);
        setNewGoal({ name: '', targetAmount: '', category: '', deadline: '' });
      })
      .catch(error => console.error('Error adding goal:', error));
  };

  // Delete goal
  const handleDeleteGoal = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setGoals(goals.filter(goal => goal.id !== id));
      })
      .catch(error => console.error('Error deleting goal:', error));
  };

  // Make deposit
  const handleDeposit = (e) => {
    e.preventDefault();
    const { goalId, amount } = deposit;
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;
    const updatedSavedAmount = goal.savedAmount + parseFloat(amount);
    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedSavedAmount }),
    })
      .then(response => response.json())
      .then(data => {
        setGoals(goals.map(g => (g.id === goalId ? data : g)));
        setDeposit({ goalId: '', amount: '' });
      })
      .catch(error => console.error('Error making deposit:', error));
  };

  return (
    <div className="app">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm newGoal={newGoal} setNewGoal={setNewGoal} handleAddGoal={handleAddGoal} />
      <DepositForm goals={goals} deposit={deposit} setDeposit={setDeposit} handleDeposit={handleDeposit} />
      <GoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </div>
  );
}

export default App;
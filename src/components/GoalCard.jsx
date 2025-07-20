function GoalCard({ goal, handleDeleteGoal }) {
  // Calculate progress
  const calculateProgress = (saved, target) => {
    return Math.min((saved / target) * 100, 100).toFixed(2);
  };

  // Check deadline status
  const checkDeadlineStatus = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffDays = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'overdue';
    if (diffDays <= 30) return 'warning';
    return '';
  };

  const progress = calculateProgress(goal.savedAmount, goal.targetAmount);
  const status = checkDeadlineStatus(goal.deadline);

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${goal.targetAmount - goal.savedAmount}</p>
      <p>Deadline: {goal.deadline} <span className={status}>{status === 'overdue' ? '(Overdue)' : status === 'warning' ? '(Due Soon)' : ''}</span></p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
import GoalCard from './GoalCard';

function GoalList({ goals, handleDeleteGoal }) {
  return (
    <div>
      {goals.length > 0 ? (
        goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} handleDeleteGoal={handleDeleteGoal} />
        ))
      ) : (
        <p>No goals yet.</p>
      )}
    </div>
  );
}

export default GoalList;
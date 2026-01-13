// todoItem.tsx
type TodoItemProps = {
  task: { id: number; text: string; completed: boolean };
  onToggle: () => void;
}


function TodoItem({ task, onToggle }: TodoItemProps) {
  return (
    <li 
      onClick={onToggle}
      style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
    >
      {task.text}
    </li>
  );
}
export default TodoItem;
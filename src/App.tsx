import './App.css';
import { useState } from 'react';
import  useLocalStorage from './hooks/useLocalStorage';
import type { Task, FilterType } from './types'; 
import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, completed: !task.completed}: task
      )
    );
  };

  const editTask = (id: string, newTitle: string) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, title: newTitle} : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  })
  .sort((a,b) => Number(a.completed) - Number(b.completed));

  return(
    <div className="app">
      <h1>Task Tracker</h1>
      <AddTaskForm onAdd={addTask}/>
      <FilterBar currentFilter={filter} onFilterChange={setFilter}/>
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleComplete}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
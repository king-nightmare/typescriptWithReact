
import './App.css';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImage from "../src/assets/goals.jpg";
import { useState } from 'react';
import { title } from 'process';

type CourseGoal={
  title:string;
  description:string;
  id:number
}

function App() {
  const [goals,setGoals]=useState<CourseGoal[]>([]);

  function handleAddGoal(){
    setGoals(preGoals=>{
      const newGoal:CourseGoal={
        title:"Learn React + TS",
        description:"Learn it in deth",
        id:Math.random()
      }
      return[...preGoals,newGoal]
    })
  }
  return (
    <main>
      <Header image={{src:goalsImage,alt:"A list of goals"}}><h1>Your Course Goals</h1></Header>
      <button onClick={handleAddGoal}>add goal</button>
      {goals.map((goal)=>(<li key={goal.id}>
        <CourseGoal title="learn react +ts">
            <p>learn it from the ground</p>
        </CourseGoal>
      </li>))}
    </main>
  );
}

export default App;

import React from "react";
import {WorkoutsTable} from "../components/WorkoutsTable";
export class MainPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            finishedWorkouts: [],
            notFinishedWorkouts: []
        }
        this.TakeFinishedWorkouts = this.TakeFinishedWorkouts.bind(this)
        this.TakeFinishedWorkouts(this)
        this.TakeNotFinishedWorkouts = this.TakeNotFinishedWorkouts.bind(this)
        this.TakeNotFinishedWorkouts(this)
    }
    TakeFinishedWorkouts =(that) => {
        fetch("https://localhost:7280/api/Gym/workout/finished") 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({finishedWorkouts: jsonStr});})
        .catch(error => console.error(error));
    }
    TakeNotFinishedWorkouts =(that) => {
        fetch("https://localhost:7280/api/Gym/workout/notFinished") 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({notFinishedWorkouts: jsonStr});})
        .catch(error => console.error(error));
    }
    render()
    {
        return(
            <div>
                <h1>GymApp</h1>
                <h2>Прогресс:</h2>
                <h2>Текущие тренировки:</h2>
                <a href="/addWorkout"><button>Добавить</button></a><br/>
                <WorkoutsTable workouts={this.state.finishedWorkouts}/>
                <h2>Предыдущие тренировки:</h2>
                <WorkoutsTable workouts={this.state.notFinishedWorkouts}/>
            </div>
        )
    }
}
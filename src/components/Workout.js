import React from "react";
import { Exercise } from "./Exercise";
import "../css/workout.css";
export class Workout extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state={
            id: "",
            isFinished: this.props.isFinished,
            exercises: this.props.exercises,
        }
    }
    render()
    {
        return(
            <div className="workout">
                {this.props.data.exercises.map((el) => (
                    <Exercise key={el.id} data={el}/>
                ))}
                <button>Завершить тренировку</button>
            </div>
        )
    }
}
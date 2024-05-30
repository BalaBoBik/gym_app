import React from "react";
import { Workout } from "./Workout";
import "../css/workout_table.css";
export class WorkoutsTable extends React.Component
{
    render()
    {
        return(
            <div className="workout_table">
                {this.props.workouts.map((el) => (
                    <Workout key={el.id} data={el}/>
                ))}
            </div>
        )
    }
}
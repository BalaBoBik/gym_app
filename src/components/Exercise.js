import React from "react";
import {Set} from "./Set";
import "../css/exercise.css";
export class Exercise extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.data.id,
            name: this.props.data.name,
            exerciseType: this.props.exerciseType,
            sets:this.props.data.sets,
        }
    }
    render()
    {
        return(
            <div className="exercise">
                <div>{this.props.data.exerciseType.name}</div><br/>
                <div className="set_table">
                    {this.props.data.sets.map((el) => (
                        <Set key={el.id} data={el}/>
                    ))}
                </div>
            </div>
        )
    }
}
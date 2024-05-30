import React from "react";
import "../css/set.css";
export class Set extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.data.id,
            weight: this.props.data.weight,
            reps: this.props.data.reps,
        }
    }
    render()
    {
        return(
            <div className="set">
                <div>Вес: {this.props.data.weight}</div><br/>
                <div>Повторений: {this.props.data.reps}</div>
            </div>
        )
    }
}
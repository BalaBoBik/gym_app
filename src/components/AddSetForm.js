import React from "react";
import {Set} from "./Set";
import "../css/exercise.css";
export class AddSetForm extends React.Component
{
    
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="set">
                <label>Вес</label>
                <input placeholder={this.props.data.weight} onChange={(e)=>{this.props.data.weight = e.target.value}}></input><br/>
                <label>Повторения</label>
                <input placeholder={this.props.data.reps} onChange={(e)=>{this.props.data.reps = e.target.value}}></input><br/>
            </div>
        )
    }
}
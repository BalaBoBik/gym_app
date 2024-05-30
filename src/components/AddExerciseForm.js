import React from "react";
import {AddSetForm} from "./AddSetForm";
import "../css/exercise.css";
export class AddExerciseForm extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state={
            name: this.props.data.label,
            typeId: this.props.data.id,
            sets: [
                {
                    id:1,
                    weight:50,
                    reps:5,
                },
                {
                    id:2,
                    weight:60,
                    reps:5,
                },
                
                {
                    id:3,
                    weight:70,
                    reps:5,
                }
            ],
        }
    }
    AddButton = async(event) =>
    {
        event.preventDefault();
        let array = this.state.sets;
        let last = array[array.length-1]
        array.push(
            {
                id:last.id+1,
                weight: 1*last.weight+10,
                reps: last.reps
            })
        this.setState({set: array});
    }
    DeleteButton = async(event) =>
    {
        event.preventDefault();
        let array = this.state.sets;
        array.pop();
        this.setState({set: array});
    }
    render()
    {
        return(
            <div className="exercise">
                <div>{this.state.name}</div><br/>
                <div className="set_table">

                    {this.state.sets.length!==0?
                        this.state.sets.map((el) => (
                        <div>
                            <AddSetForm key={el.id} data={el}/>
                            <button>Удалить</button>
                        </div>))
                        :
                        <div/>
                    }
                    <button onClick={this.AddButton}>Добавить подход</button>
                </div>
            </div>
        )
    }
}
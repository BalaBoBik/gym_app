import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Search } from "../components/Search";
import { AddExerciseForm } from "../components/AddExerciseForm";
export class AddWorkoutPage extends React.Component
{
    
    constructor(props)
    {
        super(props)
        this.state=
        {
            exercises:[]
        }
    }
    getData = (val) => {
            let isContain = false;
            this.state.exercises.forEach(element => {
                if (element.id===val.id)
                {
                    isContain=true;
                }
            });
            if (isContain===false)
            {
                let array = this.state.exercises
                array.push((val))
                this.setState({exercises: array})
            }
    }
    render()
    {
        return(
            <div>
                <button>Добавить упражнение</button><br/>
                <Search sendData={this.getData}></Search>
                Упражнения<br/>
                {this.state.exercises.map((el) => (
                    <div key = {el.id} >
                        <AddExerciseForm data={el}></AddExerciseForm>
                        <button>Удалить</button>
                    </div>
                ))}
                <a href = "/"><button>назад</button></a>
            </div>
        )
    }
}
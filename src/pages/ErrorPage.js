import React from "react";
import ErrorImage from "../img/errorBread.jpg"
export class ErrorPage extends React.Component
{
    render()
    {
        return(
            <div className="ErrorPage">
                <h1>Все сломалось и не работает :/</h1>
                <img src = {ErrorImage}/>
            </div>
        )
    }
}
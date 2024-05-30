import React, { useState } from "react";
import "../css/search.css";
import Select from "react-select";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: null,
      optionList: [],
    };
    this.TakeTypes = this.TakeTypes.bind(this)
    this.TakeTypes(this)
  }

  TakeTypes =(that) => {
    fetch("https://localhost:7280/api/Gym/exerciseType/all")  
    .then((response)=>{return response.json()})
    .then((jsonStr)=>{jsonStr.map((el)=>(this.state.optionList.push({value: el.name, label: el.name, id:el.id})))})
}

  // Function triggered on selection
  handleSelect = (data) => {
    this.props.sendData(data);
  };

  render() {
    return (
      <div className="search">
        <div className="dropdown-container">
          <Select
            options={this.state.optionList}
            placeholder="Поиск"
            value={this.state.selectedOptions}
            onChange={this.handleSelect}
            isSearchable={true}
          />
        </div>
      </div>
    );
  }
}
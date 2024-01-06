import React, { Component } from 'react'
import "./Data.css"

class Data extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        return this.helper(data)
    }

    helper = (data) => {
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
        }
    renderOnType = () =>{
        const data = this.state.userData;
        let list = data.filter(function(item){
            return item.user_type == "Designer"
        })
        return this.helper(list)
    }

    filterOnLetter = () =>{
        const data = this.state.userData;
        let list = data.filter(function(item){
            return item.name[0] == "J"
        })
        return this.helper(list)
    }

    renderOnAge = () =>{
        const data = this.state.userData;
        let list = data.filter(function(item){
            return item.age >=28 && item.age < 50 
        })
        return this.helper(list)
    }

    renderOn = () =>{
        const data = this.state.userData;
        let ages = data.filter((items) =>{
            return items.user_type == "Designer"
        }).map((item)=> item.years)
        .reduce((item,sum) => (item + sum ),0)
        return ages
    }





  render() {
    
    return (

        <React.Fragment>
            <h2>Display all items</h2>
            <div className="display-box">
                <ul>
                    {this.renderItems()} 
                </ul>
            </div>

            <h2>Display Based On User Type</h2>
            <div>
                <ul>
                {this.renderOnType()}
                </ul>
            </div>

            <h2>Filter All Data Starting With J</h2>
            <div>
                <ul>
                {this.filterOnLetter()}
                </ul>
            </div>


            <h2>Filter All Data Based On Age Greater That 28 And Less Than Or Equal To 50</h2>
            <div>
                <ul>
                {this.renderOnAge()}
                </ul>
            </div>

            <h2>Find The Total Years Of Designers</h2>
            <ul>
                <li>
                    <span>{this.renderOn()}</span>
                </li>
            </ul>
          </React.Fragment>
    )
  }
}

export default Data

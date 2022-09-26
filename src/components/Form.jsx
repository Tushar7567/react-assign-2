import React, { Component } from 'react';
import ResultDisplay from './ResultDisplay';


export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            ename: '',
            dept: '',
            rat: '',
            arr:[],
            show:false
        }
    }
    storeName = (e) =>{
        this.setState({ename: e.target.value})

    }
    storeDept = (e) =>{
        this.setState({dept: e.target.value})
    }
    storeRat = (e) =>{
        this.setState({rat: e.target.value})
    }
    okShow = () =>{
        const updatedArray = [...this.state.arr]
        updatedArray.push({name: this.state.ename, department:this.state.dept, rating: this.state.rat})
        this.setState({show:true, arr: updatedArray});

    }
    render() {
        return (   
            <div className="parentDiv">
                <div className="heading">
                    <h1>Employee Feedback Form</h1>
                </div>
                <div className="Form">
                        <label >Name:</label>
                        <input type="text" className="inputTags" onChange={this.storeName} /> <br /><br />

                        <label >Department:</label>
                        <input type="text" className="inputTags" onChange={this.storeDept} /><br /><br />

                        <label >Rating:</label>
                        <input type="number" className="inputTags" onChange={this.storeRat} /><br /><br />

                        <button className="submit" onClick={this.okShow}>Submit</button>
                    
                </div>
                {this.state.show ? <ResultDisplay data={this.state.arr} /> : null}

            </div>
                
        );
    }
}

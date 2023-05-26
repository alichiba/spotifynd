import React from "react";
import './Cover.css';

export class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.generate = this.generate.bind(this);
        //this.setImagePath = this.setImagePath.bind(this);
        
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.search();
        }
    }

    handleTermChange(e) {
        this.setState( { term: e.target.value})
    }

    generate() {
        // TO DO
    }

    // setImagePath = e => {
    //     let reader = new FileReader() 
    //     reader.readAsDataURL(e.target.files[0])
        
    //     reader.onload = () => {      
    //      this.setState({        
    //       queryImage: reader.result      
    //      })    
    //    }
    //   }

    render() {
        return (
            <div className="Cover" onKeyDown={this.handleKeyDown}>
                <h2 className="Title">Cover</h2>
                <img src='./record.png' width="300" alt="playlist-cover"/>
                <input placeholder={'Enter a descriptive prompt'} onChange={this.handleNameChange}/>
                <button onClick={this.generate}>GENERATE IMAGE</button>
            </div>
        )
    }
}
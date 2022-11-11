import React from "react";
import './Cover.css';

export class Cover extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Cover">
                <h2 className="Title">Cover</h2>
                <img src="record.jpg"  alt="playlist-cover"/>
                <input defaultValue={'Enter a descriptive prompt'} onChange={this.handleNameChange}/>
                <button >GENERATE IMAGE</button>
                {/* onClick={} */}

            </div>
        )
    }
}
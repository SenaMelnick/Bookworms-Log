import React from "react";
import FetchMethods from "..";
import {
    BrowserRouter as Rounter,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';

export default class BookPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChap: this.props.currentChapter
        }
    };

    render() {
        return (
            <div className="col">
                    <div className="cover position-relative">
                        <Link to={`/booklist/${this.props.id}`}>
                            <img className="cover" src={this.props.cover}/>
                        </Link> 
                        <div className="position-absolute bottom-0 end-0 counter-bg"></div>
                        <h2 className="position-absolute bottom-0 end-0 counter"><span onClick={() => this.logChap()} className="plus">+</span>{this.state.currentChap}/{this.props.chapterCount}</h2>
                    </div>
            </div>
        );
    };

    logChap() {
        console.log('This works')
        console.log(this.state.currentChap)
        if (this.state.currentChap < this.props.chapterCount) {
            console.log('Also works')
            FetchMethods.putChap(this.props.id, this.state.currentChap + 1)
            this.setState(state => ({currentChap: state.currentChap + 1}))
        };
    };
};
import React from "react";
import LikeButton from "./likebutton";

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div className="box">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <div className="row justify-content-start">
                                <div className="col-5">
                                    <img className="comment-pfp" src={this.props.pfp}/>
                                </div>
                                <div className="col-1">
                                    <b>{this.props.user}</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <b>{this.props.date}</b>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                    <div className="row">
                        <LikeButton {...this.props}/>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}
import React from "react";
import FetchMethods from '../index'

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
            likeState: this.props.userLiked
        };
    };

    render() {
        return (
            <div className="col-2">
                <div className="row">
                    <div className="col-1">
                        <p className="no-margin">{this.state.likes}</p>
                    </div>
                    <div className="col-1">
                        <i className={this.findLikeClass()} onClick={() => this.addLike()}></i>
                    </div>
                </div>
            </div>
        );
    };

    findLikeClass() {
        if (this.state.likeState == true) {
            return "fa-solid fa-thumbs-up like-btn";
        } else if (this.state.likeState == false) {
            return "fa-regular fa-thumbs-up like-btn";
        } else {
            console.error('userLiked must be a boolean value');
        };
    };

    addLike() {
        if (this.state.likeState == false) {
            FetchMethods.putLikes(this.props.id, !this.state.likeState, this.state.likes + 1);
            this.setState(state => ({likes: state.likes + 1}));
        } else if (this.state.likeState == true) {
            FetchMethods.putLikes(this.props.id, !this.state.likeState, this.state.likes - 1);
            this.setState(state => ({likes: state.likes - 1}));
        } else {
            console.error('userLiked must be a boolean value');
        };

        this.setState(state => ({likeState: !state.likeState}));
    };
};
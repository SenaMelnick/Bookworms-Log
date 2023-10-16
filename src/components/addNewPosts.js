import React from "react";
import FetchMethods from "..";
import Post from "./post";

export default class AddNewPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //array is reversed to ensure newer posts are always on top
            posts: Object.values(this.props).reverse()
        }
    };

    render() {
        const senasPosts1 = this.state.posts.filter((post) => post.user == 'Sena');
        const senasPosts2 = senasPosts1.map((post) => {
            return (
                <div>
                    <Post {...post}/>
                </div>
            );
        });

        return (
            <div>
                <div className="box">
                    <textarea id="new-post-content" className="form-control" placeholder="Write up a new post!"/>
                    <br/>
                    <input type="submit" placeholder="Submit" className="btn btn-primary" onClick={() => this.addPost()}></input>
                </div>
                <br/>
                {senasPosts2}
            </div>
        );
    };

    async addPost() {
        await FetchMethods.postPost(document.getElementById('new-post-content').value);
        window.location.reload()
    }
};
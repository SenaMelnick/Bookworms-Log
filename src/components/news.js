import React from "react";

export default class News extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="px-3">
                <div className="box">
                    <div className="row">
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Steins%3BGod_logo.png" className="news-cover"/>
                    </div>
                    <div className="row">
                        <h4 className="white">Title of newest SciADV entry soon to be revealed?</h4>
                    </div>
                </div>
                <br/>
                <div className="box">
                    <div className="row">
                        <img src="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2023/07/Anime-Fate-strange-Fake-featured-640x360.jpg" className="news-cover"/>
                    </div>
                    <div className="row">
                        <h4 className="white">Fate/Strange Fake receives an anime adaptation</h4>
                    </div>
                </div>
                <br/>
                <div className="box">
                    <div className="row">
                        <img src="https://cdn.vox-cdn.com/thumbor/2hUb8Zqn44lcm8HTwxlpeU2nOdw=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23282958/brandon_sanderson_kickstarter_image.jpeg" className="news-cover"/>
                    </div>
                    <div className="row">
                        <h4 className="white">Brandon Sanderson's Kickstarter for 4 secret novels raises $15M in first day</h4>
                    </div>
                </div>
            </div>
        )
    }
}
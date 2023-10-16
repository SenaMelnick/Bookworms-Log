import React from "react";
import {
    BrowserRouter as Rounter,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
  import FetchMethods from "..";
  import BookPreview from "./bookPreview";

export default class Booklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksArray: Object.values(props)
        };
    };

    render() {
        const books = this.state.booksArray.map((book, index) => {
            return (
                <BookPreview {...book}/>
            );
        });

        const bookPage = this.state.booksArray.map(book => {
            return (
                <Route path={`/booklist/${book.id}`}>
                    <div className="row">
                        <div className="col">
                            <Link to='/booklist'>
                                <i className="fa-solid fa-arrow-left fa-xl back-arrow"></i>
                            </Link>
                        </div>
                    </div>                    
                    <div className="row">
                        <div className="col-4">
                            <img className="main-cover" src={book.cover}/>
                        </div>
                        <div className="col">
                            <div className="row">
                                <h1 className="white">{book.title}<span className="smaller"> By {book.author}</span></h1>
                            </div>
                            <div className="row justifty-content-start">
                                <div className="col-3">
                                    <h3 className="white">{book.medium}</h3>
                                </div>
                                <div className="col-4">
                                    <h3 className="white">Published in {book.publish}</h3>
                                </div>
                                <div className="col-1">
                                    <h3 className="white">{book.rating}/10</h3>
                                </div>
                            </div>
                            <div className="row justifty-content-start">
                                <div className="col-3">
                                    <h3 className="white">{book.chapterCount} Chapters</h3>
                                </div>
                                <div className="col-3">
                                    <h3 className="white">{book.wordCount} Words</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{book.synopsis}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link to='/booklist'>
                                        <button className="btn btn-danger" onClick={() => this.delete(book.id)}>Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
            )
        })

        return (
            <div className="px-3">
                <Switch>
                    {bookPage}
                    <Route path='/booklist'>
                        <div className="row">
                            <div className="box form-group">
                                <div className="row justify-content-center">
                                    <div className="col-3">
                                        <h2 className="white">Log New Book!</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control" id="name" placeholder="title..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="author" placeholder="author..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="date" placeholder="publish date..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="medium" placeholder="medium..."/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control" id="chap-count" placeholder="chapter count..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="word-count" placeholder="wordcount..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="rating" placeholder="rating..."/>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="cover" placeholder="cover link..."/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col">
                                        <textarea className="form-control" id="synopsis" placeholder="synopsis..."/>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-1">
                                        <input type="submit" placeholder="Submit" onClick={() => this.newBook()} className="btn btn-primary"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            {books}
                        </div>
                        <br/>
                    </Route>
                </Switch>
            </div>
        );
    };

    async newBook() {
        let name = document.getElementById('name').value
        let author = document.getElementById('author').value
        let date = document.getElementById('date').value
        let medium = document.getElementById('medium').value
        let chapCount = document.getElementById('chap-count').value
        let wordCount = document.getElementById('word-count').value
        let rating = document.getElementById('rating').value
        let cover = document.getElementById('cover').value
        let synopsis = document.getElementById('synopsis').value
        await FetchMethods.postBook(name, author, date, medium, chapCount, wordCount, rating, cover, synopsis)
        window.location.reload()
    };

    async delete(id) {
        await FetchMethods.delete(id);
        window.location.reload()
    }
};
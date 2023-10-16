import React from 'react';
import {
  BrowserRouter as Rounter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Post from './components/post';
import AddNewPosts from './components/addNewPosts';
import Booklist from './components/booklist';
import News from './components/news';
import './App.css';


export default function App(props) {
  return (
    <div>
      <Rounter>
        <Nav/>
        <br/>

        <Switch>
          <Route path="/profile">
            <Profile {...props.posts}/>
          </Route>
          <Route path="/booklist">
            <Booklist {...props.books}/>
          </Route>
          <Route path="/">
            <Home {...props.posts}/>
          </Route>
        </Switch>
      </Rounter>
    </div>
  );
};

function Nav() {
  //the links in this navbar also contain routes, to create the effect of them being "active" at their corresponding URLs
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
          <Link to='/' className="navbar-brand"><h3 className='bookworms-log'>Bookworm's Log</h3></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Switch>
                        <Route path='/profile'>
                          <Link to='/' className="nav-link">Home</Link>
                        </Route>
                        <Route path='/booklist'>
                          <Link to='/' className="nav-link">Home</Link>
                        </Route>
                        <Route path='/'>
                          <Link to='/' className="nav-link active">Home</Link>
                        </Route>
                      </Switch>
                  </li>
                  <li className="nav-item">
                      <Switch>
                        <Route path='/profile'>
                          <Link to='/profile' className="nav-link active">Profile</Link>
                        </Route>
                        <Route path='/'>
                          <Link to='/profile' className="nav-link">Profile</Link>
                        </Route>
                      </Switch>
                  </li>
                  <li className="nav-item">
                      <Switch>
                        <Route path='/booklist'>
                          <Link to='/booklist' className="nav-link active">Book List</Link>
                        </Route>
                        <Route path='/'>
                          <Link to='/booklist' className="nav-link">Book List</Link>
                        </Route>
                      </Switch>
                  </li>
              </ul>
          </div>
        </nav>
    </div>
  );
};

function Home(props) {
  const postsArray = Object.values(props).reverse();
  const posts = postsArray.map((post => {
    return (
      <div>
        <Post {...post}/>
      </div>
    )
  }))
  return(
    <div className='container px-3'>
    <div className='row'>
      <div className='col-6'>
        {posts}
      </div>
      <div className='col-6'>
        <News/>
      </div>
    </div>
  </div>
  );
};

function Profile(props) {
  return(
    <div className='container px-3'>
      <div className='row'>
        <div className='col-3'>
          <div className='box'>
            <div className='row'>
              <div className='col'>
                <img className='profile-pfp' src='https://i.imgur.com/AtrHQvZ.png'/>
              </div>
              <div className='col'>
                <h2 className='white'>Sena</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p><b>Books read:</b> 32</p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p><b>Books planned:</b> 460</p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p>Hello! I'm Sena! I love reading books! Especially fantasy novels! Follow me for recommendations</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'></div>
        <div className='col-6'>
          <AddNewPosts {...props}/>
        </div>
      </div>
    </div>
  );
};

function reload() {
  setTimeout(() => {
    window.location.reload()
  }, 1);
};

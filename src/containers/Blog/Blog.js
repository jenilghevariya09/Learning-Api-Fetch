import React, { Component,Suspense } from 'react';
// import FullPost from './FullPost/FullPost'
import './Blog.css';
// import Posts from './Postes/Postes';

import {
    Route,
    Routes,
    NavLink,
  } from "react-router-dom";
// import NewPost from './NewPost/NewPost';
import Spinner from '../../components/Spinner/Spinner';
const Posts = React.lazy(() => import('./Postes/Postes'))
const FullPost = React.lazy(() => import('./FullPost/FullPost'))
const NewPost = React.lazy(() => import('./NewPost/NewPost'))


class Blog extends Component {

    render () {
      
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink> </li>
                            <li><NavLink to="/new-post">New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                <Route path="/" exact element={<Suspense fallback={<Spinner />}><Posts /></Suspense>} />
                <Route path="/new-post" exact element={<Suspense fallback={<Spinner />}><NewPost /></Suspense>} />
                <Route path="/:id"  element={<Suspense fallback={<Spinner />}><FullPost /></Suspense>} />
                </Routes>
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Postes.css'


export class Posts extends Component {
    state={
        posts:[],
    }
    
    componentDidMount () { 
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts}); 
                // console.log(response)
            })
            .catch(error => {
                // this.setState({error:true})
            })
        }
    
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

  render() {
    let posts = <p style={{textAlign:'center'}}>Something went Wrong!</p>
    if (!this.state.error) {
        posts = this.state.posts.map((post) => {
            return (
           
            <Post
             key={post.id}
              author={post.author}
               title={post.title}
               clicked={() => this.postSelectedHandler(post.id)}
               />
              );
        })   
    }
    return (
        <div>
        <section className="Posts">
        {posts}
    </section>
     <section>
     <FullPost id={this.state.selectedPostId} />
 </section>
 </div>
    )
  }
}

export default Posts

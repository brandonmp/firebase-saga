import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Post from '../components/Post';
import * as actions from '../actions';

class Blog extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props.posts;

        const content = posts ? (
            posts.map((post) => {
                return (
                    <Post key={post.id} post={ post }/>
                )
            })
        ) : (
            <p>Loading posts..</p>
        );

        return (
            <div className="blog">
                {content}
                <button onClick={() => this.props.fetchPost(1) }>Get first post</button>
            </div>
        )
    }
}

export default connect(
    state => ({posts: state.posts}),
    dispatch => bindActionCreators(actions, dispatch)
)(Blog)
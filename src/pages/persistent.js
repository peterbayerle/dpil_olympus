import React from 'react';
import PostView from './postview';
import { question, posts } from '../posts.json';

class PersistentPostView extends React.Component {
    constructor(props) {
        super(props);
        this.posts = posts;
        for (var p of posts) {
            p.persist = true;
        }
    };

    render() {
        return (
            <PostView 
                question={question}
                posts={posts}
                submitForm={this.props.submitForm}
                hidePosts={this.props.hidePosts}
                user={this.props.user}
            >
            </PostView>
        );  
    };

}

export default PersistentPostView;
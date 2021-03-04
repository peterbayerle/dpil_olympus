import React from 'react';
import PostView from './postview';
import { question, posts } from '../posts.json';

class PersistantPostView extends React.Component {
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
            >
            </PostView>
        );  
    };

}

export default PersistantPostView;
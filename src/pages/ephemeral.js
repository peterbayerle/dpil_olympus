import React from 'react';
import PostView from './postview';
import { question, posts } from '../posts.json';

class EphemeralPostView extends React.Component {
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

export default EphemeralPostView;
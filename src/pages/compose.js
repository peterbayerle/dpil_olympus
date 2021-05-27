import React from 'react';
import PostView from './postview';
import PostForm from '../components/postform';
import SignUp from '../components/signup';

class ComposeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false,
            newPost: false
        }
        this.topic = this.props.topic;
    };

    onSubmitSignUp(result) {
        this.setState({user: result});
    };
    
    handlePostSubmission(event) {
        event.preventDefault();

        if (!this.state.newPost) {
            var contents = event.target[0].value;
        
            // add new post
            this.setState({
                newPost: {
                    id: 4,
                    key: 4,
                    user: this.state.user,
                    text: contents,
                    likeCount: 0,
                    timeShow: 0,
                    timeHide: 10,
                    persist: this.props.persist,
                    profile_picture: "profile_pictures/profile11.png"
                }
            });
            
            // post message for parent of frame to recieve
            window.parent.postMessage(
                { event_id: 'submitted post', contents: contents },  '*'
            );
        }
    };

    render() {
        return (
            <>
                {this.topic === "veggie" || this.topic === "surveillance" ? 
                    !this.state.user ? 
                        <SignUp onSubmit={this.onSubmitSignUp.bind(this)}></SignUp> : 
                        <>
                            <PostView 
                                questions={this.props.questions}
                                user={this.state.user} 
                                persist={this.props.persist}
                                users={this.props.compose_users}
                                posts={{"veggie": this.props.compose_posts, "surveillance": this.props.compose_posts}}
                                times={this.props.compose_times}
                                newPost={this.state.newPost}
                                topic={this.topic}
                            />

                            {!this.state.newPost ? 
                            <div className="pt-3">
                                <PostForm disabled={this.state.newPost} onSubmit={this.handlePostSubmission.bind(this)}/>
                             </div>
                            : null}
                            
                        </>
                : null}
            </>
        );
    };  
}

export default ComposeView;
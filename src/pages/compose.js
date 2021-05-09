import React from 'react';
import PostView from './postview';
import SignUp from '../components/signup';

class ComposeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    };

    onSubmitSignUp(result) {
        this.setState({user: result});
    };

    render() {
        return (
            <>
                { !this.state.user ? 
                <SignUp onSubmit={this.onSubmitSignUp.bind(this)}></SignUp> : 
                <PostView 
                    question={this.props.question}
                    users={this.props.compose_users}
                    posts={this.props.compose_posts}
                    times={this.props.compose_times}
                    user={this.state.user} 
                    submitForm={true}/>
                }
            </>
        );  
    };

}

export default ComposeView;
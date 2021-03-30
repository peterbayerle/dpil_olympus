import React from 'react';
import PersistentPostView from './persistent';
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
                <PersistentPostView user={this.state.user} hidePosts={true} submitForm={true}/>
                }
            </>
        );  
    };

}

export default ComposeView;
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class SelectView extends React.Component {
    componentDidMount() {
        const { fromSignUp } = this.props;
        this.fromSignUp = fromSignUp;
    };

    render() {
        return (
            <Container className="text-center pt-3">
                <table>
                    <tbody>
                        <tr>
                            <td>⏳</td>
                            <td align="left"><Link to="/e"> Ephemeral view</Link></td>
                        </tr>
                        <tr>
                            <td>♾</td>
                            <td align="left"><Link to="/p"> Persistent view</Link></td>
                        </tr>
                        <tr>
                            <td>✍️</td>
                            <td align="left"><Link to="/c"> Compose view</Link></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        )
    };
};

export default SelectView;
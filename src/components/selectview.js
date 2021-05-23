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
                <h3>Veggie Day</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>⏳</td>
                            <td align="left"><Link to="/e/v"> Ephemeral view for Veggie Day</Link></td>
                        </tr>
                        <tr>
                            <td>♾</td>
                            <td align="left"><Link to="/p/v"> Persistent view for Veggie Day</Link></td>
                        </tr>
                        <tr>
                            <td>✍️</td>
                            <td align="left"><Link to="/ce/v">Compose view for Veggie Day (ephemeral)</Link></td>
                        </tr>
                        <tr>
                            <td>✍️</td>
                            <td align="left"><Link to="/cp/v">Compose view for Veggie Day (persistent)</Link></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <h3>Surveillance</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>⏳</td>
                            <td align="left"><Link to="/e/s"> Ephemeral view for Surveillance</Link></td>
                        </tr>
                        <tr>
                            <td>♾</td>
                            <td align="left"><Link to="/p/s"> Persistent view for Surveillance</Link></td>
                        </tr>
                        <tr>
                            <td>✍️</td>
                            <td align="left"><Link to="/ce/s">Compose view for Surveillance (ephemeral)</Link></td>
                        </tr>
                        <tr>
                            <td>✍️</td>
                            <td align="left"><Link to="/cp/s">Compose view for Surveillance (persistent)</Link></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        )
    };
};

export default SelectView;
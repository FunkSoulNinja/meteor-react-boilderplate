import React, { Component } from 'react';

import onEnterPrivatePage from './util/onEnterPrivatePage';
import PrivateHeader from './PrivateHeader';

class Link extends Component {
    componentWillMount() {
        // if (!Meteor.userId()) {
        //     this.props.history.push('/');
        // }
        onEnterPrivatePage(this.props.history);
    }
    render() {
        return (
            <div>
                <PrivateHeader title="Dashboard" />
                <div className="page-content">Dashboard page content</div>
            </div>
        );
    }
}
export default Link;

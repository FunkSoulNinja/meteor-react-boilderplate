import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import propTypes from 'prop-types';

const PrivateHeader = props => {
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">{props.title}</h1>
                <button className="button button--link-text" onClick={() => Accounts.logout()}>
                    Log out
                </button>
            </div>
        </div>
    );
};
PrivateHeader.propTypes = {
    title: propTypes.string.isRequired
};

export default PrivateHeader;

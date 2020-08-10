import React from 'react';
import { getMemberByName, getCongressMembers } from 'actions/index';
import { connect } from 'react-redux';

import './Header.scss';

const mapDispatchToProps = ( dispatch ) => {
    return {
        getMembersByName: memberName => dispatch( getMemberByName( memberName )),
        getMembers: () => dispatch( getCongressMembers() )
    };
};

class Header extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            inputValue: '',
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return(
            <div className="header">
                <i className="fas fa-search"></i>
                <div className="header__search-bar" >
                    <input className="header__input" 
                        type="text"
                        onChange={ this.onInputChange }
                    />
                </div>
            </div>
        )
    }

    onInputChange( e ){
        const { value } = e.target;

        this.setState({
            inputValue: value
        });

        if( value.length ) {
            this.props.getMembersByName( value.toLowerCase() );
        }
    }
};


export default connect ( null, mapDispatchToProps)( Header );
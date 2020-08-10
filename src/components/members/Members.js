import React from 'react';
import { connect } from 'react-redux';
import { getCongressMembers } from 'actions/index';

import ListMembers from 'components/listmembers/ListMembers';
import Header from 'components/header/Header';

import './Members.scss';


const mapStateToProps = ( state ) => {
    return {
        congressMembers: state.membersReducer.members,
        favoriteCharacters: state.membersReducer.favoriteCharacters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getMembers: () => dispatch( getCongressMembers() )
    };
};

class Characters extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            memberSelectedId: ''
        }

        this.onViewMoreDetailsClick = this.onViewMoreDetailsClick.bind(this);
    }

    componentDidMount() {
        this.props.getMembers();
    }

    render() {
        return(
            <div className="congress-members">
                <Header/> 
                <h1 className="congress-members__title">Congress Members</h1>
                <ListMembers className="congress-members__list"
                    members={ this.props.congressMembers }
                    onViewMoreDetailsClick={ this.onViewMoreDetailsClick }
                />
            </div>
        )
    }

    onViewMoreDetailsClick( memberId ) {
        this.setState({
            memberSelectedId: memberId
        });
     }
}

export default connect( mapStateToProps, mapDispatchToProps )( Characters );

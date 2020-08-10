import React from 'react';
import { connect } from 'react-redux';
import { getMemberById } from 'actions/index';

const mapStateToProps = ( state ) => {
    return {
        memberById: state.charactersReducer.memberById
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getMemberById: memberId => dispatch( getMemberById( memberId ) )
    }
};

class MemberInfoDetail extends React.Component {
    constructor( props ) {
        super( props );

        this.onBackBtnClick = this.onBackBtnClick.bind(this);
    }

    componentDidMount() {
        let memberId = this.props.match.params.memberId;
        this.props.getMemberById( memberId );
    }

    render() {
        return(
            <div>
                <button onClick={this.onBackBtnClick}>
                    <i class="fas fa-arrow-left"></i>
                </button>
                <ul>
                {this.props.memberById.map( member => {
                    return(
                        <li key={member.id}>
                            <label>{member.first_name}</label>
                            <label>{member.last_name}</label>
                            <label>{member.title}</label>
                            <label>{member.date_of_birth}</label>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }

    onBackBtnClick( e ) {
        e.preventDefault();

        this.props.history.goBack();
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(MemberInfoDetail);
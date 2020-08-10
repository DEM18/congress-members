import React from 'react';
import { connect } from 'react-redux';
import { getMemberById } from 'actions/index';

import facebookIcon from 'assets/icons/facebook.png';
import twitterIcon from 'assets/icons/twitter.png';

import './MemberInfoDetail.scss';

const mapStateToProps = ( state ) => {
    return {
        memberById: state.membersReducer.memberById
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
            <div className="member-details">
                <div className="member-details__item">
                    <ul className="member-details__description">
                    {this.props.memberById.map( member => {
                        return(
                            <li key={member.id}>
                                <div className="member-details__header">
                                    <button className="member-details__header--btn" onClick={this.onBackBtnClick}>
                                        <i className="fas fa-arrow-left"></i>
                                    </button>
                                    <label className="member-details__description--item">{member.first_name} {member.last_name}</label>
                                </div>
                                <label className="member-details__description--item">{member.title}</label>
                                <label className="member-details__description--item-date-of-birth">Date of birth: {member.date_of_birth}</label>
                                <div className="member-details__description--item-social-network">
                                    <img className="member-details__description--item-twitter" src={twitterIcon} alt="twitter"/>
                                    <span>{member.twitter_account}</span>
                                </div>
                                <div className="member-details__description--item-social-network">
                                    <img className="member-details__description--item-facebook" src={facebookIcon} alt="facebook"/>
                                    <span>{member.facebook_account}</span>
                                </div>
                                <div>
                                <a href={`${member.url}`}>Personal site</a>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }

    onBackBtnClick( e ) {
        e.preventDefault();

        this.props.history.goBack();
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(MemberInfoDetail);
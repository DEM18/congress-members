import React from 'react';
import { Link } from 'react-router-dom';
import unknownPersonImg from 'assets/images/unknown-person.png';

class ListMembersItem extends React.Component {

    render() {
        const { name, lastName, title, memberId } = this.props;
        return(
            <div className="list-members__item">
                <div className="list-members__image-box">
                    <img className="list-members__image" src={`${unknownPersonImg}`} alt={`${name}`}/>
                </div>
                <li className="list-members__description">
                    <div>
                        <label className="list-members__name">{ name } { lastName }</label>
                    </div>
                    <label className="list-members__title">{ title }</label>
                    <div>
                    <Link to={`/members/${memberId}`}>
                        <button className="list-members__btn">view more details</button>
                    </Link>
                    </div>
                </li>
            </div>
        )
    }
}


export default ListMembersItem;

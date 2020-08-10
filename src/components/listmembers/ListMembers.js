import React from 'react';
import './ListMembers.scss';
import ListMembersItem from 'components/listmembersitem/ListMembersItem';

const ListMembers = ( props ) => {
    const { members } = props;
    return(
        <ul className="list-members">
        { members.map( member => 
            <ListMembersItem 
                key={member.id}
                memberId={member.id}
                name={member.first_name}
                lastName={member.last_name}
                title={member.title}
                onViewMoreDetailsClick={props.onViewMoreDetailsClick}
            />
        )}
        </ul>
    )
}


export default ListMembers;
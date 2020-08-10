import { MEMBERS_LOADED, MEMBER_LOADED, MEMBERS_BY_NAME, FETCH_RESOURCES_FAIL } from 'actions/constants';

const initialState = {
    members: [],
    memberById: [],
    error: ''
};

export function membersReducer( state = initialState, action ) {
    switch( action.type ) {
        case MEMBERS_LOADED:
            return {
                ...state,
                members: [
                    ...state.members, 
                    ...action.payload
                ]
            };
        case MEMBER_LOADED: 
        return {
            ...state,
            memberById: [
                action.payload
            ]
        };
        case MEMBERS_BY_NAME: 
        let membersFiltered = state.members.filter( member => member.first_name.toLowerCase().includes( action.payload ));
        return {
            ...state,
            members: [
                ...membersFiltered
            ]
        };
        case FETCH_RESOURCES_FAIL: 
        return {
            ...state,
            error: action.error
        };
        default:
            return state;
    }
}


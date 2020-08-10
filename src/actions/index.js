import { MEMBERS_LOADED, MEMBER_LOADED, MEMBERS_BY_NAME, FETCH_RESOURCES_FAIL } from 'actions/constants';

const API_KEY = process.env.REACT_APP_CONGRESS_MEMBERS_API_KEY;

const options = {
    method: 'GET',
    headers: {
      "X-API-Key": `${API_KEY}`
    }
};

export function getCongressMembers() {
    return function(dispatch) {
      return fetch(`https://api.propublica.org/congress/v1/116/senate/members.json`, options)
        .then(response => response.json())
          .then(response => {
            dispatch({ type: MEMBERS_LOADED, payload: response.results[0].members });
        }).catch( error => {
            dispatch({ type: FETCH_RESOURCES_FAIL, error: error})
        } );
    };
}

export function getMemberById( memberId ) {
  return function(dispatch) {
    return fetch(`https://api.propublica.org/congress/v1/members/${memberId}.json`, options)
      .then(response => response.json())
        .then(response => {
          dispatch({ type: MEMBER_LOADED, payload: response.results[0] });
    }).catch( error => {
        dispatch({ type: FETCH_RESOURCES_FAIL, error: error })
    })
  };
}

export function getMemberByName( memberName ) {
  return {
    type: MEMBERS_BY_NAME,
    payload: memberName
  }
}

import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';



const Root = ( { children } ) => {
    return(
        <Provider store={ store }>
            { children }
        </Provider>
    )
};

export default Root;
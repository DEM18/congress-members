import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store/index';

import NotFound from 'components/notfound/NotFound';
import Footer from 'components/footer/Footer';
import MemberInfoDetail from 'components/memberinfodetail/MemberInfoDetail';
import Members from 'components/members/Members';


ReactDOM.render( 
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Members } exact={true} />
                <Route path="/members/:memberId" component={ MemberInfoDetail }/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </Provider>,
    document.querySelector( "#root" ));
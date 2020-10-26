
import React,{ useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { loadUser } from './state/homepage-action';

/* router */
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

/* page */
// import UserInfo from '../UserInfo/UserInfo';
import Mall from '../Mall/Mall';
import UserInfo from '../UserInfo/UserInfo';

export default function HomePage () {

  let [ path,setPath ] = useState('/homepage/center');

  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state=>state.homepage.user);

  useEffect(() => {

    dispatch(loadUser(history));

  }, []);
  return (
    <Router>
      <div className='center'>
        <div className="sider">
          <img src={ user.avatar } className='home-icon'></img>
          {user.username}
          <ul>
            <li className={ path === '/homepage/usercenter' ? 'bgColor' : '' } onClick={ ()=>{setPath('/homepage/usercenter');} }>
              <Link to='/homepage/usercenter'>个人中心</Link>
            </li>
            <li className={ path === '/homepage/mall' ? 'bgColor' : '' } onClick={ ()=>{setPath('/homepage/mall');} }>
              <Link to='/homepage/mall'>积分商城</Link>
            </li>
          </ul>
          <div>退出</div>
        </div>
        <Switch>
          <Route path='/homepage/usercenter'>
            <UserInfo></UserInfo>
          </Route>
          <Route path='/homepage/mall'>
            <Mall></Mall>
          </Route>
          <Route path='/homepage'>
            <Redirect to='/homepage/usercenter'></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

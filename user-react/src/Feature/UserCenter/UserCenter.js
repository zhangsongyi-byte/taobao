import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadUser } from './state/user-action';

export default function UserCenter () {
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state=>state.homepage.user);

  useEffect(() => {

    dispatch(loadUser(history));

  }, []);
  return (
    <div className="right-container">
      <div className="info-container">
        <div className="info-img">
          <img src={ user.avatar } className='img-icon' alt="" />
        </div>
        <div className="info-content">
          <span>姓名：</span><span className="span name">{ user.username }</span>
          <span>昵称：</span
          ><span className="span nickname">{ user.nickname }</span>
          <span>性别：</span><span className="span gender">{ user.gender === 0 ? '女' : '男' }</span>
          <span>学校：</span><span className="span school">{ user.school }</span>
          <span>密码：</span><span className="span password">******</span>
          <p><button className='modify-btn'>修改密码</button></p>
        </div>
      </div>
    </div>
  );
}

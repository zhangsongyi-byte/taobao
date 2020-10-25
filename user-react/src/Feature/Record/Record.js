import React,{ useEffect } from 'react';
import _ from 'lodash';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadUser } from './state/record-action';
import moment from 'moment';
let dateFormat = (dt)=> {
  return moment(dt).format('YYYY-MM-DD HH:mm:ss');
};

export default function Record () {
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector(state=>state.homepage.user);

  useEffect(() => {

    dispatch(loadUser(history));

  }, []);

  function renderRcord (){
    return _.map(user.record,(item)=>{
      return(
        <div className="record-list" key={ Math.random() }>
          <div>{item.name}</div>
          <div>{dateFormat(item.exchangeDate)}</div>
        </div>
      );
    });
  }
  return (
    <div className="record-box">
      {renderRcord()}
    </div>
  );
}

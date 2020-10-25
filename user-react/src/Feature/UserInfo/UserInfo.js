import React,{ useState } from 'react';

import UserCenter from '../UserCenter/UserCenter';
import Record from '../Record/Record';

export default function UserInfo () {
  let [ name,setName ] = useState('UserCenter');
  return (
    <div className="price-container">
      <div className="center-top">
        <h2 className={ name === 'UserCenter' ? 'underline' : null } onClick={ ()=>{setName('UserCenter');} }>个人信息</h2>
        <h2 className={ name === 'Record' ? 'underline' : null } onClick={ ()=>{setName('Record');} }>兑换记录</h2>
      </div>
      <div className="center-content">
        {name === 'UserCenter' ? <UserCenter></UserCenter> : <Record> </Record>}
      </div>
    </div>
  );
}

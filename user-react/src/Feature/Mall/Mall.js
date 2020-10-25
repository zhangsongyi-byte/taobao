import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadShop } from './state/mall-action';
import { loadUser } from '../HomePage/state/homepage-action';
import { loadMall } from './state/mall-action';
import _ from 'lodash';
import mallImg from '../../Assets/img5.png';

export default function Mall () {
  const dispatch = useDispatch();

  const history = useHistory();

  const menu = useSelector(state=>state.mall);
  const user = useSelector(state=>state.homepage.user);
  // console.log('menu====>',menu);

  useEffect(() => {

    dispatch(loadShop(history));
    dispatch(loadUser(history));

  }, []);
  function renderShopList (){
    return _.map(menu.list,(item)=>{
      return(
        <div className="list-title" key={ Math.random() }>
          <img src={ item.image } alt="" className="shop-img" />
          <div className="shopTitle">{ item.name }</div>
          <div className="shopPrice">
            <div className="price-icon">
              <img src={ mallImg } alt="" className="icon-img" />
              { item.price }积分
            </div>
            <button className="exchange-btn" onClick={ ()=>{
              dispatch(loadMall(item._id));
            } }>兑换</button>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="price-container">
      <div className="price-top">
      商城
      </div>
      <div className="img-container">当前积分 { user.integration }</div>
      <div className="shopList">商品列表</div>
      <div className="list">
        {renderShopList()}
      </div>
    </div>
  );
}

import * as ActionType from '../../../Redux/ActionType';
import { menuList } from '../../../Request/menu';
import { exchangeShop } from '../../../Request/exchange';
import { userInfo } from '../../../Request/user';

export function loadShop (history){

  return async (dispatch)=>{

    try {

      const  { list }  = await menuList();

      dispatch({ type: ActionType.LOAD_SHOP, data: { list } });

    } catch (error) {

      history.push('/homepage');
    }

  };
}

export function loadMall (id){

  return async (dispatch)=>{

    try {
      const result   = await exchangeShop({ id });
      console.log(result);

      dispatch({ type: ActionType.EXCHANGE_SHOP });

      const  user  = await userInfo({ id:'5f91445b7cac8518b1099c2a' });

      dispatch({ type: ActionType.LOAD_USER, data: { user } });

    } catch (error) {

      //   dispatch({ type: ActionType.SHOW_MODAL,data:{ message: '出错了',func:()=>{
    //   history.push('/homepage');
      //   } } });
    }finally{
      //   dispatch({ type: ActionType.HIDE_LOADING });
    }

  };
}
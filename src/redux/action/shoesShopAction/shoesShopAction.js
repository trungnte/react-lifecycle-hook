import axios from "axios";
import { GET_SHOES_LIST } from "../../types/shoesShopType";

//TODO: tao ham action
export const getShoesListAction = async (dispatch2) => {
    try {
        // xử lý thành công
        let result = await axios({
            method: "GET",
            url: "https://shop.cyberlearn.vn/api/Product"
        });
        // console.log(result.data);

        let action = {
            type: GET_SHOES_LIST,
            mangShoes: result.data.content
        }
        // day du lieu len reducer/store
        dispatch2(action);

    } catch (error) {
        // thất bại
        console.log(error);
    }

}


// const getShoesList = async () => {
//     try {
//       // xử lý thành công
//       let result = await axios({
//         method: "GET",
//         url: "https://shop.cyberlearn.vn/api/Product"
//       });
//       // console.log(result.data);

//       let action = {
//         type: GET_SHOES_LIST,
//         mangShoes: result.data.content
//       }
//       dispatch(action);

//     } catch (error) {
//       // thất bại
//       console.log(error);
//     }

//   }
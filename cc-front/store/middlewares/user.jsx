import instance from "../../utils/axios";
import { ADD_NFT_TO_FAVORITE, REMOVE_NFT_TO_FAVORITE, setFavorites } from "../actions/user";

const userMiddleware = (store) => (next) => async (action) => {
	switch (action.type) {
		case REMOVE_NFT_TO_FAVORITE: {
			await instance.delete(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			console.log("DATA_REMOVE >>>", data);
			store.dispatch(setFavorites(data));
			break;
		}
		case ADD_NFT_TO_FAVORITE: {
			await instance.post(`/favorite/${action.userId}/${action.nftId}`);
			const { data } = await instance.get(`/favorite/${action.userId}`);
			console.log("DATA_ADD >>>", data);
			store.dispatch(setFavorites(data));
			break;
		}
		case NFT_CREATION: {
			const state = store.getState();
			const nftToCreate = state.createNft;
			console.log("mdw >>> create nft avec :", nftToCreate);
		}

		default:
			next(action);
	}
};

export default userMiddleware;

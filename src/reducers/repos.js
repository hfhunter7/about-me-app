import { FETCH_GITHUB_REPO } from "../action/types";

function repos( state = {} , action){
    switch (action.type){
        case FETCH_GITHUB_REPO:
            return action.repos;
        default:
            return state;
    }
}

export default repos;

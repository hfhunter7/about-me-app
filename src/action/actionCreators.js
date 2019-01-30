import { FETCH_GITHUB_REPO } from "./types";
import { get_github_repo } from "./public/publicAction";

////////////////// github repo ////////////////////
export function fetch_github_repo( repos ) {
    return {
        type: FETCH_GITHUB_REPO,
        repos
    }
}

export function getGithubRepo() {
    return function ( dispatch ) {
        get_github_repo(dispatch, fetch_github_repo);
    }
}

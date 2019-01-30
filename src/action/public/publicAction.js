import axios from 'axios'

export function get_github_repo( dispatch , fetch_github_repo ) {
    axios.get('https://api.github.com/repos/zeit/next.js')
        .then(function ( res ) {
            console.log(res)
            if(res.status >= 400){

            }
            return res.data
        })
        .then(function ( json ) {
            dispatch(fetch_github_repo(json))
        })
}

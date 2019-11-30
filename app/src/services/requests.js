const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function(url, body, handler, userOptions = {}){
    const options = {
        credentials: 'include',
        method : "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        ...userOptions
    }
    if(options.method != "GET") options.body = JSON.stringify(body);
    fetch(BACKEND_URL + url, options)
    .then((res) => {
        if(res.ok){
            return res.json();
        }else{
            document.location.pathname = "/";
            sessionStorage.clear();
        }
    }).then((res) => {
        handler(res);
    }).catch((err) => {
        console.error(err);
    });
}
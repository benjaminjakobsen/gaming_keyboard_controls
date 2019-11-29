const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function(url, body, handler, userOptions = {}){
    const options = {
        credentials: 'include',
        method : "GET",
        body : JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        ...userOptions
    }
    fetch(BACKEND_URL + url, options)
    .then((res) => {
        if(res.ok) return res.json();
    }).then((res) => {
        handler(res);
    }).catch((err) => {
        console.error(err);
        document.location.pathname = "/";
    });
}
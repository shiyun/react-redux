'use strict';

class HttpService {
    constructor(){
        baseUrl = 'http://mall.pocketlawyer.cn/';
    }

    toQueryString(obj) {
        return obj ? Object.keys(obj).sort().map(function (key) {
            let val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                }).join('&');
            }

            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        }).join('&') : '';
    }

    get(url, data, successCB, errorCB, type){
        if (!successCB) successCB = (res)=>console.log(response.text());
        if (!errorCB) errorCB = (error)=>console.warn(error);
		
		type = type || 'POST';

        fetch(url,{
                method: type,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: this.toQueryString(data)
            })
            .then(res=>res.json())
            .then(res=>successCB(res))
			.catch(err=>errorCB(err));            
    }
}

export default new HttpService();
/**
 * Fetch API
 * @function
 * @async
 * @param {string} url - リクエストURL
 * @param {string} method - リクエストメソッド
 * @param {string | null} body - リクエストボディ
 * @returns  {Response}
 * @link https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 */
export const FetchReq = async (url: string, method: string, body: string | null = null) => {
    const response = await fetch(url, {
        // *: 指定しなかった場合の既定値
        method: method,     // *GET, POST, PUT, DELETE, etc
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: body, // body のデータ型は header の Content-Type と合わせる
    });
    return response;
};

/**
 * @function
 * @async
 * @param {string} url:  リクエストURL
 * @returns  {*}
 */
export const GetJsonReq = async (url: string) => {
    const responce = await FetchReq(url, 'GET');
    if (responce.ok) {
        const json = await responce.json();
        return json;
    } else {
        return null;
    }
};
/**
 * @module Sample.tsx
 * @author S.Utsumi
 */

import { useState } from "react";
import { API_URL } from "../Constants";
import { GetJsonReq } from "../utils/Fetch";
import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

/**
 * サンプルページ No. 1
 * @abstract Fetch API のテストページ
 * @returns {JSX.Element}
 */
export const SamplePage1 = () => {
    const [data, setData] = useState<any>(null);

    const GetData = async () => {
        const json = await GetJsonReq(API_URL);
        console.debug(json);
        setData(json);
    };
    return (
        <Card>
            <CardHeader title='Sample 1' />
            <CardContent>
                <Typography marginLeft={2}>
                    これは Fetch API のテストページです。
                    <br />
                    <br />
                    ボタンを押すと 'http://localhost:8080/api' に GET リクエストを送信します。
                    <br />
                    レスポンスを正常に受信すれば、Hello World! が表示されます。
                    <br />
                </Typography>
                <CardActions>
                    {data ? <div>{(data as any).message}</div> : <button onClick={GetData}>データを取得</button>}
                </CardActions>
            </CardContent>
        </Card>
    );
}
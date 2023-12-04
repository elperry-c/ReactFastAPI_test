/**
 * @module Home.tsx
 * @author S.Iwama
 */

import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

/**
 * ホームページ
 * @function
 * @returns {JSX.Element}
 */
export const SettingPage = (): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title='Settings' />
                    <CardContent>
                        <Typography>
                            これは設定ページです。
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title='Settings' />
                    <CardContent>
                        <Typography>
                            これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。これは設定ページです。
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
/**
 * @module Home.tsx
 * @author S.Iwama
 */

import { Card, CardContent, CardHeader, Typography } from "@mui/material";

/**
 * ホームページ
 * @function
 * @returns {JSX.Element}
 */
export const HomePage = (): JSX.Element => {
    return (
        <Card>
            <CardHeader title='Home' />
            <CardContent>
                <Typography>
                    これはホームページです。
                </Typography>
            </CardContent>
        </Card>
    );
}
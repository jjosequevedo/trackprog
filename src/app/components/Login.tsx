import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { FormDataInterface } from '../interfaces';

export default function Login() {
    const t = useTranslations('login');

    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData: FormDataInterface = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };

        // Simulate API login call (replace this with your actual API logic)
        console.log(formData);

        // If login is successful, redirect to the dashboard
        router.push('/en/dashboard');
    };

    return (
        <Box
            sx={{
                backgroundColor: 'Background.default',
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {t('signIn')}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={t('emailAddress')}
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label={t('password')}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {t('signIn')}
                </Button>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Link href="/recover-password" variant="body2">
                            {t('forgotPassword')}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

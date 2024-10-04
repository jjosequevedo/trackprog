'use client';

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import DashboardTheme from '@/app/theme/DashboardTheme';

interface UserProfile {
    name: string;
    email: string;
    bio: string;
    avatarUrl: string;
}

const Profile: React.FC = () => {
    const [user] = useState<UserProfile>({
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'A passionate developer who loves coding and problem solving.',
        avatarUrl: 'https://via.placeholder.com/150', // Placeholder avatar URL
    });

    return (
        <DashboardTheme>
            <Container maxWidth="sm">
                <Card sx={{ mt: 4 }}>
                    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                        <Avatar
                            alt={user.name}
                            src={user.avatarUrl}
                            sx={{ width: 100, height: 100 }}
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" align="center" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom>
                            {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" paragraph>
                            {user.bio}
                        </Typography>
                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button variant="contained" color="primary">
                                Edit Profile
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </DashboardTheme>
    );
};

export default Profile;

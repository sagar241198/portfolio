import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function ServicesCardComp({ title, details, Icon, id }) {
    return (
        <Card sx={{
            maxWidth: 275,
            height: 210,
            background: '#222',
            color: 'white',
            transition: 'background-color 0.3s',
            '&:hover': {
                backgroundColor: 'rgb(121, 82, 179)',
                // Change to the desired hover color
            },
        }}
        >
            <div style={{ paddingTop: '20px' }}>
                <Icon />
            </div>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{ color: '#fff' }}>
                    {details}
                </Typography>
            </CardContent>
        </Card>
    );
}

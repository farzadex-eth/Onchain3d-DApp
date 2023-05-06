import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';

function TwitterCard({ photo, banner, name, handle, footer }) {
    return (
        <>
        {
            !footer &&
            <Card sx={{ background: 'rgba(26, 140, 216, 0.2)' }}>

                <CardMedia
                    sx={{ height: 140 }}
                    image={banner}
                />
                <CardHeader
                    avatar={
                        <Avatar aria-label="sciNFTist-twitter" sx={{ border: "2px solid black", width: "15%", height: "auto" }}>
                            <img src={photo} alt={`${handle}-twitter`} width="100%" />
                        </Avatar>
                    }
                    sx={{
                        position: 'absolute',
                        top: '50%',
                    }}
                />
                <CardContent>
                    {name}
                </CardContent>
                <CardActions>
                    <a href={`https://twitter.com/${handle}`} target="_blank" rel="noopener noreferrer">@{handle}</a>
                </CardActions>
            </Card>
        }
        {
            footer &&
            <Card sx={{ background: 'rgba(26, 140, 216, 0.2)' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="sciNFTist-twitter" sx={{ border: "2px solid black", width: "15%", height: "auto" }}>
                            <img src={photo} alt={`${handle}-twitter`} width="100%" />
                        </Avatar>
                    }
                    title={name}
                    subheader={<a href={`https://twitter.com/${handle}`} target="_blank" rel="noopener noreferrer">@{handle}</a>}
                />
            </Card>
        }
        </>
    )
}

export default TwitterCard

import React from 'react'
import Card from '@mui/material/Card';
import './index.scss'
import A1 from '../../images/A1.jpeg'
import '../../images/A2.jpg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Img = styled('img')({
    
  
})

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Store() {
    return (
<div className="product"> 
<h1>
Information
</h1>
            
        <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,
                
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sneakers
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                       

                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        
        
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <Card className="product" sx={{
                maxWidth: 345,

            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        img src={A1} width="50%" height="50%"
                        alt="Nike Air Force1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nike Airforce 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clean kicks
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: 1499 SEK   <ShoppingBagIcon />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
</div>

            
            


        
    )
}

export default Store
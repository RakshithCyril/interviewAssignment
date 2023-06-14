import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Logo from '../img/logo 1.png'
import { Container, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { CChart } from '@coreui/react-chartjs';
import ButtonGroup from '@mui/material/ButtonGroup';
import  { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    height: 50,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#29A343' : '#ffffff',
       // Update the color value here
    },
  }));
const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
    height: 50,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#E12C33' : '#E12C33', // Update the color value here
    },
  }));

const drawerWidth = 100;
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../img/icons', false, /\.(png|jpe?g|svg)$/));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    border:'1px solid black',
    color:'#3A3A3A',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      minWidth: '500px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    color:'#004F95',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function PermanentDrawerLeft() {
    const [buttonVariants, setButtonVariants] = useState({
        button1: 'outlined',
        button2: 'outlined',
        button3: 'outlined',
        button4: 'outlined',
      });
    
      const handleButtonVariantChange = (buttonId) => {
        setButtonVariants((prevState) => {
          const updatedVariants = {};
    
          for (const key in prevState) {
            if (key === buttonId) {
              updatedVariants[key] = 'contained';
            } else {
              updatedVariants[key] = 'outlined';
            }
          }
    
          return updatedVariants;
        });
      };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        style={{boxShadow:'none'}}
      >
        <Toolbar  className={'topToolBar'}>
          <Typography variant="h6" noWrap component="div">
            <Box>
          <Search style={{display:'inline-block'}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button className={'menuButton'}  variant="contained"><img src={images['addnew.png']} alt="" />Add New</Button>
          <Button className={'menuButton'}  variant="contained">Sign In</Button>
          <Button className={'menuButtonSignUp'}  variant="contained">Sign In</Button>
          </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{m:"10px"}}> <img style={{width:'80px'}} src={Logo} alt="" /> </Box>
       
        <Divider />
        <List sx={{display:"block",margin:'0px auto'}}>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['home.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['profile.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['users.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['Departments.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['incidents.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['Service requests.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['reports.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['Manuals.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['warranty status.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['contac t us.png']} alt="" /></IconButton>
            </ListItem>
            <ListItem align="center" >
              <IconButton className={ "testButton" }><img src={images['Sign out.png']} alt="" /></IconButton>
            </ListItem>

        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container sx={{
            minWidth:'300px',
            maxWidth:'auto',
        }}>
    <h3>Total Incidents Recorded</h3>
    
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
        <Item style={{boxShadow:'none'}}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              variant={buttonVariants.button1}
              onClick={() => handleButtonVariantChange('button1')}
            >
              Days
            </Button>
            <Button
              variant={buttonVariants.button2}
              onClick={() => handleButtonVariantChange('button2')}
            >
              Weeks
            </Button>
            <Button
              variant={buttonVariants.button3}
              onClick={() => handleButtonVariantChange('button3')}
            >
              Months
            </Button>
            <Button
              variant={buttonVariants.button4}
              onClick={() => handleButtonVariantChange('button4')}
            >
              Custom
            </Button>
          </ButtonGroup>
        </Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item style={{boxShadow:'none',marginLeft:"-200px"}}>
            <ButtonGroup>
            <Button style={{marginRight:"10px",}} variant="contained">Recorder</Button>
            <Button  variant="outlined">Recorder</Button>
        </ButtonGroup>
        </Item>
      </Grid>
     
    </Grid>
<CChart
style={{borderRadius:'10px',padding:"10px"}}
  type="bar"
  data={{
    labels: ['Week 1', 'Week 2 ', 'Week 3', 'Week 4', 'Week 5'],
    
    datasets: [
      {
        label:'',
        backgroundColor: '#FEC601',
        data: [12, 28, 6, 17, 25],
      },
    ],
  }}
  labels="weeks"
/>
<p><span className="textMain"> X-Axi</span>s : Weeks  <span className="textMain">Y-Axis</span> : Weeks</p>

</Container>
<Grid container style={{}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 2 }}>
  <Grid  item xs={3}>
    <Item style={{borderRadius:'10px', boxShadow:"0px 10px 20px #004F9525"}}>
        <h1>Expences</h1>
    <CChart
  type="doughnut"
  data={{
    labels: ['45000 Service Charges', '30000 Spares', '10000 Amc', '15000 CMC'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [50,30,10,20],
      },
    ],
  }}
/>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item  style={{borderRadius:'10px', boxShadow:"0px 10px 20px #004F9525"}}>
        <h1>In Service</h1>
        <img width={"100px"} src={images['inservice icon.png']} alt="" />
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
  <Grid item xs={6} >
    <Item style={{boxShadow:"none"}}><h3>Total Services</h3>
        <h2>38</h2></Item>
  </Grid>
  <Grid item xs={6}>
    <Item style={{boxShadow:"none"}}><h3>Total Services</h3>
        <h2>38</h2></Item>
  </Grid>
  
</Grid>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item style={{borderRadius:'10px', boxShadow:"0px 10px 20px #004F9525"}}>
        <h1>Total Assets</h1>
        <Container sx={{maxWidth:"80px"}}>
        <CChart
       
  type="doughnut"
  data={{
    
    labels: [],
    datasets: [
      {
        data: [11, 16, 7, 3, 14,20],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }}
/>
</Container>
<h1>46</h1>
    </Item>
  </Grid>
  <Grid item xs={3}>
    <Item style={{borderRadius:'10px', boxShadow:"0px 10px 20px #004F9525"}}>
        <h1>Incident Management</h1>
        <h2 style={{textAlign:"left"}}>Cleared</h2>
          
      <BorderLinearProgress1 style={{background:'white'}} variant="determinate" value={36} /><span>36</span> 
  
        <h2 style={{textAlign:"left"}}>Not Cleared</h2>
       
      <BorderLinearProgress2 style={{background:'white'}} variant="determinate" value={16} /> <span>16</span> 
    
        </Item>
  </Grid>
</Grid>
<Container>
<Grid  container spacing={2}>
  <Grid item xs={4}>
    <Item style={{borderRadius:'10px',textAlign:'left', boxShadow:"0px 10px 20px #004F9525"}}>
        <h1 style={{textAlign:"center"}}>Departments</h1>
        <img style={{width:'200px',marginTop:"-100px"}} src={images['depbar.png']} alt="" />
        <h4 >Labouratory</h4>
          <img  style={{width:'200px', marginTop:"-10px"}} src={images['1.png']} alt="" />
          <h4>Radiology</h4>
          <img  style={{width:'200px',marginTop:"-10px"}} src={images["2.png"]} alt="" />
          <h4 style={{textAlign:"left"}}>ICU</h4>
          <img  style={{width:'200px',marginTop:"-10px"}} src={images["3.png"]} alt="" />
          <h4 style={{textAlign:"left"}}>Operation Theatre</h4>
          <img  style={{width:'200px',marginTop:"-10px"}} src={images["4.png"]} alt="" />
          <h4 style={{textAlign:"left"}}>OPD</h4>
          <img style={{width:'200px',marginTop:"-10px"}} src={images["5.png"]} alt="" />
        
        
    </Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{borderRadius:'10px', height:"450px",boxShadow:"0px 10px 20px #004F9525"}}><CChart
  type="line" 
  data={{
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
     
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [1, 2, 5, 4, 7, 8, 9, ]
      },
    ],
  }}
/>
</Item>
  </Grid>
</Grid>
<p ><span className="textMain"> X-Axi</span>s : Weeks  <span className="textMain">Y-Axis</span> : Weeks</p>
</Container>

<Container>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
  <h1 style={{textAlign:"center"}}>Calibrated</h1>
    <Item style={{textAlign:"left",boxShadow:"0px 10px 20px #004F9525"}}>
      <h4> Calibrated</h4>
        <img width={"250px"} src={images['6.png']} alt="" />
      <h4>Not Calibrated</h4>
        <img width={"170px"} src={images['7.png']} alt="" />
      <h4>Not Required</h4>
        <img width={"170px"} src={images['7.png']} alt="" />
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item style={{marginTop:"50px",boxShadow:"0px 10px 20px #004F9525",}}>
      <h1>Manuals</h1>
      <img src={images['manual.png']} alt="" /><br />
      <Button style={{marginLeft:"10px"}} variant='contained'>User Manual</Button>
      <Button style={{marginLeft:"10px"}} variant='contained'>Service Manual</Button>
    </Item>
  </Grid>
  <Grid style={{boxShadow:"none"}} item xs={4}>
    <Item style={{boxShadow:"none"}}><img width={"300px"} src={images['warranty.png']} alt="" /></Item>
  </Grid>
  
</Grid>
</Container>

      </Box>
    </Box>
  );
}
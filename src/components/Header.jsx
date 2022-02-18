import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function Header() {
const [burgerStatus, setBurgerStatus] = useState(false);


    return (
        <Container>
        <LeftMenu>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </LeftMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper> 
            <li><a href="#"><CustomSpeed/></a></li>
            <li><a href="#"><CustomPerson/></a></li>
            <li><a href="#"><CustomVoice/></a></li>
            <li><a href="#"><CustomEqua/></a></li>
            <li><a href="#"><CustomHoriz/></a></li>
            <li><a href="#"><CustomSettings/></a></li>
            <li><a href="#"><CustomLove/></a></li>
            <li><a href="#"><CustomTime/></a></li>
           <li><a href="#"><CustomEye/></a></li>
            </BurgerNav> 
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height: 60px; 
display: flexx;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;

`

const LeftMenu = styled.div`
align-items: center;
color: 3A3B3C;
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
margin-top:50px;
position: fixed;
top: 0;
bottom: 0;
left: -70px;
background: #171717;
width: 65px;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start; 
transform: ${props => props.show ? 'translateX(100%)': 'translateX(0%)'};
transition: transform 0.2s;
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}

`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
color:white;
`

const CustomSpeed = styled(SpeedIcon)`
cursor:pointer;
color:white;
`

const CustomPerson = styled(PersonIcon)`
cursor:pointer;
color:white;
`

const CustomVoice = styled(CampaignIcon)`
cursor:pointer;
color:white;
`

const CustomEqua = styled(EqualizerIcon)`
curson:pointer;
color:white;
`

const CustomHoriz = styled(SwapHorizIcon)`
curson:pointer;
color:white;
`

const CustomSettings = styled(SettingsIcon)`
curson:pointer;
color:white;
`

const CustomLove = styled(FavoriteIcon)`
curson:pointer;
color:white;
`

const CustomTime = styled(AccessTimeIcon)`
cursor:pointer;
color:white;
`

const CustomEye =styled(RemoveRedEyeIcon)`
cursor:pointer;
color:white;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`


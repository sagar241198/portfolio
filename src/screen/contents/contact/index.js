import React from 'react';
import styled from 'styled-components';
import { Flex, FlexColumn, FlexRow } from './styled';

import ProfilePic from '../../../assets/images/sagar-profile-image.avif'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import TextField from '@mui/material/TextField';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const AboutContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Title = styled.h4`
  margin: 0;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  color: rgb(121, 82, 179);

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 3px solid #ffff; /* Adjust the color and thickness as needed */
    margin: 0 10px;
    max-width: 25px; /* Adjust as needed to match the title width */
  }
`;

const SubTitle = styled.span`
  white-space: nowrap;
  font-weight: bold; /* Adjust the font weight if needed */
`;

const ContactCompo = () => (
    <AboutContainer style={{ background: 'hsl(0deg 0% 0.39%)', color: '#ffff', padding: '50px' }}>
        <Title>Conatct me</Title>
        <SubTitleContainer>
            <SubTitle>Get in touch</SubTitle>
        </SubTitleContainer>
        <Flex>
            <div style={{ width: '50%', }}>

                <div style={{
                    textAlign: 'left',
                    padding: '0px 40px'
                }}>
                    <Title>Don't be shy</Title>
                    <p style={{ marginTop: '10px' }}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>

                <div style={{
                    textAlign: 'left',
                    padding: '0px 40px',
                }}>
                    <FlexRow>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: 60,color:'rgb(121, 82, 179)' }} />
                        <FlexColumn >
                            <label>Name</label>
                            <label>Sagar Kumar</label>

                        </FlexColumn>

                    </FlexRow>

                    <FlexRow>
                        <HomeOutlinedIcon sx={{ fontSize: 60,color:'rgb(121, 82, 179)' }} />
                        <FlexColumn>
                            <label>Address</label>
                            <label>Bangalore Karnatka</label>
                        </FlexColumn>


                    </FlexRow>

                    <FlexRow>
                        <MailOutlineOutlinedIcon sx={{ fontSize: 60,color:'rgb(121, 82, 179)' }} />
                        <FlexColumn>
                            <label>Email</label>
                            <label>sagar241198@gmail.com</label>
                        </FlexColumn>


                    </FlexRow>
                </div>

            </div>
            <div style={{ width: '50%', textAlign: 'left' }}>
                <Title>Message me</Title>
                <div style={{ marginTop: '10px' }}>

                    <div style={{ display: 'flex', padding: '10px' }}>
                        <TextField id="name-textfield" label="Name" variant="outlined" />
                        <TextField id="email-textfield" label="Email" variant="outlined" />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <TextField id="subject-textfield" label="Subject" variant="outlined" />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <TextField id="message-textfield" label="Message" variant="outlined" />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <Button variant="contained" size="small">
                            Message
                        </Button>
                    </div>
                </div>
            </div>

        </Flex>
    </AboutContainer>
);

export default ContactCompo;

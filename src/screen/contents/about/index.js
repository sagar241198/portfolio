import React from 'react';
import styled from 'styled-components';
import { Flex } from './styled';

import ProfilePic from '../../../assets/images/sagar-profile-image.avif'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

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
    border-bottom: 3px solid #000; /* Adjust the color and thickness as needed */
    margin: 0 10px;
    max-width: 25px; /* Adjust as needed to match the title width */
  }
`;

const SubTitle = styled.span`
  white-space: nowrap;
  font-weight: bold; /* Adjust the font weight if needed */
`;

const App = () => (
    <AboutContainer>
        <Title>About Me</Title>
        <SubTitleContainer>
            <SubTitle>Who I am?</SubTitle>
        </SubTitleContainer>
        <Flex>
            <div style={{ width: '50%', }}>

                <img src={ProfilePic} style={{
                    width: '70%',
                    height: '70%',
                    marginTop: '30px'
                }} />

            </div>
            <div style={{ width: '50%', textAlign: 'left' }}>
                <Title>I am Sagar Kumar</Title>
                <div>
                    <p>
                        Lorem Suspendisse potenti. Mauris vitae bibendum libero, et varius lectus. Ut pharetra nibh non sem ullamcorper, nec suscipit leo fermentum. Curabitur vehicula, orci ac tincidunt varius, nunc tortor malesuada odio, et fermentum eros ex et odio. Ut auctor purus eget nisl tristique, vitae efficitur risus dignissim. Vivamus nec orci at ex volutpat blandit ut sit amet dolor. Sed ultricies eros a nibh convallis, sit amet efficitur risus hendrerit. Duis ut sapien quis nunc fermentum feugiat.
                    </p>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<DownloadIcon />}
                    >
                        Upload file
                    </Button>
                </div>
            </div>

        </Flex>
    </AboutContainer>
);

export default App;

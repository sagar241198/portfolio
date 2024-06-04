import React from 'react';
import styled from 'styled-components';
import { Flex } from './styled';

import ProfilePic from '../../../assets/images/sagar-profile-image.avif'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LinearWithValueLabel from './progress';

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

const SkillCopmp = () => (
    <AboutContainer>
        <Title>My Skills</Title>
        <SubTitleContainer>
            <SubTitle>What I Know ?</SubTitle>
        </SubTitleContainer>
        <Flex>
            <div style={{ width: '50%', }}>

                <div style={{
                    textAlign: 'left',
                    padding: '40px'
                }}>
                    <Title>My skills & experiences.</Title>
                    <p>
                        I am currently learning from curriculum of FreeCodeCamp and youtube channel CodeWithHarry.
                    </p>
                </div>

            </div>
            <div style={{ width: '50%', textAlign: 'left' }}>
                <div style={{padding: '40px'}}>
                   <LinearWithValueLabel label='Java Script' value={75} />
                   <LinearWithValueLabel label='Python and Django(framework)' value={60} />
                    <LinearWithValueLabel label='Frontend development' value={80} />
                    <LinearWithValueLabel label='Mobile App development' value={75} />

                    <LinearWithValueLabel label='Backend development' value={75} />
                   <LinearWithValueLabel label='Database' value={60} />


                </div>
            </div>

        </Flex>
    </AboutContainer>
);

export default SkillCopmp;

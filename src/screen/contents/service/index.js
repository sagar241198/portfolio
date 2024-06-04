import React from 'react';
import styled from 'styled-components';
import { Flex } from './styled';

import ProfilePic from '../../../assets/images/sagar-profile-image.avif'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ServicesCardComp from './card';
import { serviveInfo } from './services-data';

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
    border-bottom: 3px solid #fff; /* Adjust the color and thickness as needed */
    margin: 0 10px;
    max-width: 25px; /* Adjust as needed to match the title width */
  }
`;

const SubTitle = styled.span`
  white-space: nowrap;
  font-weight: bold; /* Adjust the font weight if needed */
`;

const ServiceComp = () => (
    <AboutContainer style={{ background: 'hsl(0deg 0% 0.39%)', color: '#ffff', padding: '50px' }}>
        <Title>My Services</Title>
        <SubTitleContainer>
            <SubTitle>What I provide ?</SubTitle>
        </SubTitleContainer>
        <Flex>
            {serviveInfo.map((data) => {
                return (
                    <div key={data.id}>
                        <ServicesCardComp
                            title={data.title}
                            details={data.details}
                            Icon={data.IconCompo}
                            id={data.id}
             />
                    </div>
                )
            })}



        </Flex>
    </AboutContainer>
);

export default ServiceComp;

import styled from "styled-components";


import backgroundImage from '../assets/images/background.jpg'; // Adjust the path as necessary

export const ContainerWithBackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; // Adjust the height as needed
`;
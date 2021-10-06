import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 280px 220px;
  grid-template-areas: "image" "text";
  @media screen and (max-width: 450px){
    grid-template-rows: 150px 180px !important;
  }
  @media screen and (max-width: 900px){
    grid-template-rows: 180px 180px !important;
  }
  border-radius: 18px;
  margin: 10px;
  background: #FFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  @media screen and (max-width: 900px){
    margin: 5px !important;
  }
  margin: 25px;
`;

export const CardTextDate = styled.span`
  background: linear-gradient(
    110.78deg,
    rgb(240, 142, 53) 32.09%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 13px;
  @media screen and (max-width: 450px){
    font-size: 8px !important;
  }
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
  @media screen and (max-width: 900px){
    font-size: 1.25rem !important;
  }
  @media screen and (max-width: 450px){
    font-size: 1rem !important;
  }
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: black;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  @media screen and (max-width: 900px){
    font-size: 12px !important;
  }
  @media screen and (max-width: 450px){
    font-size: 10px !important;
  }
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;

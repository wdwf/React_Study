import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: ${colors['background_dark']};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    background-color: ${colors['primary']};
  }

  h2 {
    font-family: 'Poppins Bold';
    margin-right: 10px;
    color: ${colors['text_light']};
  }

  svg {
    path {
      fill: orange;
    }
  }
`; 

export const ImageUser = styled.figure`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  img {
    width: 95%;
    border-radius: 100%;
  }
`;

export const NameUser = styled.div`
  margin-left: 25px;
  z-index: 10;

  h2 {
    font-size: 1em;
  }
`; 

export const Title = styled.h2`
  font-family: 'Poppins Light';
  font-size: .9em;
  display: flex;
  align-items: center;
  color: ${colors['text_light']};
  width: 90%;
  margin: 20px auto 20px auto;

  &::before {
    content: '';
    width: 10px;
    height: 2px;
    background-color: ${colors['text_light']};
    display: inline-block;
    margin-right: 10px;
  }

  &::after {
    content: '';
    width: 10px;
    height: 2px;
    background-color: ${colors['text_light']};
    display: inline-block;
    margin-left: 10px;
  }
`; 

export const SectionCards = styled.div`
  width: 90%;
  margin: 0 auto;
`; 

export const Fields = styled.div`
  width: 90%;
  height: 40px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  background-color: ${colors['background_dark_2']};
  padding: 5px;
  display: flex;
  align-items: center;

  .fieldInput {
    border-radius: 3px;
    flex: 1;
    margin-right: 16px;
    border: none;
    background-color: ${colors['background_dark']};
    padding: 5px 0 5px 10px;
    color: ${colors['text_light']};
  }

  .btnSave {
    height: 100%;
    width: 50px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: transparent;
    border-radius: 3px;

    svg {
      path {
        fill: #fff;
      }
    }

    &:hover {
      background-color: #fff;

      svg {
        path {
          fill: #000;
        }
      }
    }
  }
`; 

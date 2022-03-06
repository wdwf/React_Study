import styled, { css } from "styled-components";
import colors from "../../utils/colors";

interface CardProps {
  type?: string
}

export const Container = styled.article<CardProps>`
  max-width: 500px;
  min-width: 250px;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 16px;

  ${props => 
    props.type == 'default' &&
  css`
    background-color: ${colors['background_light']};
  `};

  ${props => 
    props.type == 'attention' &&
  css`
    background-color: #E96254;
  `};
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.2em;
  /* font-family: 'Poppins Light'; */
`;
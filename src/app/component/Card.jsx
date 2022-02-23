import React from 'react';
import styled,{css} from 'styled-components'

const TheCard = styled.div`
    ${props => {
        switch (props.mode) {
            case 'h1':
                return css`
                    width: 380px;
                    height: 200px;
                `
            case 'h2':
                return css `
                    width: 380px;
                    height: 146px;
                `
            default:
                return css`
                    width: 140px;
                    height: 170px;
                `
        }
    }}
    background-color: #1E213A;
`

const Card = ({children,mode}) => {
  return (
    <TheCard mode={mode}>{children}</TheCard>
  );
};

export default Card;

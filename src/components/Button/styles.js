import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: ${props => props.operation ? "#00AAF0" : "#A916E8"};
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
    }
`
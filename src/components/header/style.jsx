import styled from 'styled-components';

export const Header = styled.header`
    background: #fff;
    color: #000;
    padding: 5px 15px;
    box-sizing: border-box;
`;

export const MenuItem = styled.span`
    color: #000;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justify || 'left'};
    text-align: ${(props) => props.textAlign || 'left'};;
`;

export const Logo = styled.img`
    max-width: 150px;
    max-height: 60px;
    display: block; 
    height: auto;
    width: auto;
    margin: 0 auto;
`;

export const Col = styled.div`
    flex: ${(props) => (props.large ? 1 : '0 0 20%')};
`;

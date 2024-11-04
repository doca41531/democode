import styled from "styled-components";

// transient props ($ 접두사 사용)
const BoxContainer = styled.div`
    position: absolute;
    z-index: 10;
    top: ${(props) => props.$box_top};  // $ 접두사 사용
    left: ${(props) => props.$box_left}; // $ 접두사 사용
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.$box_position}; // $ 접두사 사용
    cursor: pointer;
        > div {
            width: 15px;
            height: 15px;
            background-color: green;
            border: 3px solid black;
            border-radius: 10px;
        }
`;

const Box = (props) => {
    return (
        <BoxContainer 
            $box_top={props.box_top}        // $ 접두사 사용
            $box_left={props.box_left}      // $ 접두사 사용
            $box_position={props.box_position} // $ 접두사 사용
            onClick={props.onClick}
        >
            <div></div>
            <p>{props.box_text}</p>
        </BoxContainer>
    );
};

export default Box;

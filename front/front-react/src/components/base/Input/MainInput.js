import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: ${({block}) => block ? 'block' : 'inline-block'};
`;

const Label = styled.label`
    display: block;
    font-size: 12px;
`

const StyledInput = styled.input`
    width: 40vw;
    height: 5vh;
    padding: 4px 8px;
    border: 1px solid ${({invalid}) => invalid ? 'red' : 'gray'};
    border-radius: 4px;
    box-sizing: border-box;
    font-size: large;
    font-family: sans-serif;
    font-weight: bold;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const MainInput = ({ 
    label, 
    block = false, 
    invalid = false, 
    required = false,
    disabled = false,
    readonly = false,
    wrapperProps,
    ...props
}) => {
    return (
        <Wrapper block={block} {...wrapperProps}>
            <Label>{label}</Label>
            <StyledInput 
                invalid={invalid}
                required={required}
                disabled={disabled}
                readOnly={readonly}
            {...props} />
        </Wrapper>
    );
};

export default MainInput;

import { ButtonContainer } from './styles';

const Button = ({label, onClick, operation}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" operation={operation}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
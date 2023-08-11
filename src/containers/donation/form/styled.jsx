import styled from "styled-components";
import { Button } from "components";

export const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  gap: 30px;
  padding: 10px;
  display: flex;
  padding: 20px;
  background: #9100e452;
`;

export const Form = styled.form`
  width: 400px;
`;

export const CardWrapper = styled.div`
  padding: 20px;
  background: #fff;
`;

export const Message = styled.div`
  font-family: "Inconsolata", monospace;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

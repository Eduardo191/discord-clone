import styled from 'styled-components';
import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  ${ props => props.isHome ? `background: var(--rocketseat);` : `background: var(--primary);` }
  cursor: pointer;
  position: relative;
`;

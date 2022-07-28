import styled from 'styled-components';
import bg from 'images/bg.jpg';
import { PostBattle } from 'components/PostBattle';

const StyledGame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center / cover;
  cursor: none;
`;

export const Game = () => (
    <StyledGame>
        <PostBattle />
    </StyledGame>
);

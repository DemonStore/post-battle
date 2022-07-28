import styled from 'styled-components';
import { Team, TeamVariant } from './Team';

const PostBattleStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TeamStyled = styled(Team)`
  margin: 0 40px;
`;
const Separator = styled.div`
  height: 87vh;
  width: 1px;
  background-color: #5b5b5b;
`;

export const PostBattle = () => (
    <PostBattleStyled>
        <TeamStyled variant={TeamVariant.Teammates} />
        <Separator />
        <TeamStyled variant={TeamVariant.Enemies} />
    </PostBattleStyled>
);
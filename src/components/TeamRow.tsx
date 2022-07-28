import styled from 'styled-components';
import { PlayerModel, PlayerState } from 'models/PlayerModel';

export type Props = Readonly<Partial<Omit<PlayerModel, 'kills' | 'deaths'>> & {
    kills: number | string;
    deaths: number | string;
    className?: string;
    disableHover?: boolean;
}>;

const Row = styled.div<{ isDead: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 40px;
  border-bottom: 1px solid #5b5b5b;
  width: fit-content;
  color: ${props => props.isDead ? 'rgba(255, 255, 255, .5)' : 'white'};
`;
const UserName = styled.div`
  flex-shrink: 0;
  width: 180px;
`;
const Kills = styled.div`
  flex-shrink: 0;
  width: 60px;
`;
const Deaths = styled.div`
  flex-shrink: 0;
  width: 60px;
`;
const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #5b5b5b;
  color: white;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  ${Row}:hover & {
    display: flex;
  }
`;
const Button = styled.button`
    cursor: pointer;
`;

export const TeamRow = ({state, className, username, kills, deaths, totalKills, totalDeaths, disableHover}: Props) => {
    return (
        <Row isDead={state === PlayerState.Dead} className={className}>
            <UserName>{username}</UserName>
            <Kills>{kills}</Kills>
            <Deaths>{deaths}</Deaths>
            {!disableHover && (
                <Hover>
                    <span>Total kills: {totalKills}</span>
                    <span>Total deaths: {totalDeaths}</span>
                    <Button>+</Button>
                </Hover>
            )}
        </Row>
    );
}
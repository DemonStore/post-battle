import styled from 'styled-components';
import { TeamRow } from './TeamRow';
import { LoadingState, useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';

export enum TeamVariant {
    Enemies,
    Teammates
}

export type Props = Readonly<{
    variant: TeamVariant;
    className?: string;
}>;

const ScrollableStyled = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: #727272;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5b5b5b;
  }
`;
const TeamHeading = styled(TeamRow)`
  font-weight: 700;
  font-size: 16px;
`;
const Message = styled.div`
  color: lightgrey;
  font-size: 16px;
`;

const URLS_MAPPING: Record<TeamVariant, string> = {
    [TeamVariant.Teammates]: '/api/team0',
    [TeamVariant.Enemies]: '/api/team1',
};

export const Team = observer(({variant, className}: Props) => {
    const {players, loadingState} = useStore(URLS_MAPPING[variant]);

    return (
        <div className={className}>
            {loadingState === LoadingState.Loaded && (
                <>
                    <TeamHeading username="Username" kills="Kills" deaths="Deaths" disableHover />
                    <ScrollableStyled>
                        {players.map((player) => (
                            <TeamRow key={player.id} {...player} />
                        ))}
                    </ScrollableStyled>
                </>
            )}
            {loadingState === LoadingState.Loading && (
                <Message>Loading...</Message>
            )}
            {loadingState === LoadingState.Error && (
                <Message>Unavailable</Message>
            )}
        </div>
    );
});
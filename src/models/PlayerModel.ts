export enum PlayerState {
    Dead = 'dead',
    Alive = 'alive',
}

export type PlayerModel = {
    id: string;
    username: string;
    state: PlayerState;
    kills: number;
    deaths: number;
    totalKills: number;
    totalDeaths: number;
};
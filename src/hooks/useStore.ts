import { useLocalObservable } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { PlayerModel } from 'models/PlayerModel';
import { useEffect } from 'react';

export enum LoadingState {
    Loading,
    Loaded,
    Error,
}

export const useStore = (url: string) => {
    const store = useLocalObservable(() => ({
        players: [] as PlayerModel[],
        loadingState: LoadingState.Loading,
        async fetch(url: string) {
            store.loadingState = LoadingState.Loading;
            store.players = [];

            try {
                const response = await fetch(url);
                const json = await response.json();
                runInAction(() => {
                    store.loadingState = LoadingState.Loaded;
                    store.players = json;
                })
            } catch (e) {
                runInAction(() => {
                    store.loadingState = LoadingState.Error;
                });
            }
        }
    }));
    
    useEffect(() => {
        store.fetch(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return store;
}
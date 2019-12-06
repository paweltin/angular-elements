import { Action } from '@ngrx/store';

export enum UpdateActionTypes {
  LoadUpdates = '[Update] Load Updates',
  SetUpdates = '[Update] Set Updates',
  PostUpdates = '[Update] Post Updates',
}

export class LoadUpdates implements Action {
  readonly type = UpdateActionTypes.LoadUpdates;
}

export class SetUpdates implements Action {
  readonly type = UpdateActionTypes.SetUpdates;

  constructor(public payload: string) {}
}

export class PostUpdates implements Action {
  readonly type = UpdateActionTypes.PostUpdates;

  constructor(public payload: string) {}
}


export type UpdateActions = LoadUpdates | SetUpdates | PostUpdates;

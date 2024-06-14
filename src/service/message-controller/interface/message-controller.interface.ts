type MessageActionType = 'open-side-panel';

export interface Message {
  action: MessageActionType;
  payload?: Record<string, string>;
}

export interface MessageController<T extends Message> {
  message: T;

  send(): Promise<unknown>;
  on(callback: (message: T) => void): void;
}

import type { KeyboardEvent } from 'react';

export interface KeyPressHandleProps {
  event: KeyboardEvent<HTMLDivElement>;
  direction: string;
}

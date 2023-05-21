import { SnakeGameType } from './SnakeGameType';
import { useState } from 'react';

export interface ShowScoreProps {
  snake: SnakeGameType[];
  score: number;
  restProps: any;
}

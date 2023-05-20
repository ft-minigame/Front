import { useState } from 'react';

export interface RankingType {
    nickname: string;
    score: number;
    coalitions: string;
    createdAt: Date;
    intraId: string;
    id : number;
    updatedAt: Date;
}
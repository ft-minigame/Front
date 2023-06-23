import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Background from '../background';
import RankImg from '../../assets/images/Rank/rank.png';
import { getPost } from '../../apis/api/post';

export interface CoalRankingType {
  gun: number;
  gon: number;
  gam: number;
  lee: number;
}

const RankCoalitions = () => {
  const [ranking, setRanking] = useState<CoalRankingType>({} as CoalRankingType);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getPost('rank/coalitions');
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
          setRanking(response.data);
        } else {
          console.log(response.data);
          console.log('response error');
          setError(true);
        }
      } catch (error) {
        console.log('error:', error);
        setError(true);
      }
    };

    fetchRanking();
  }, []);

  return (
    <Wrapper>
      <Background />
      <RankImage />
      <RankingList>
        {!error && (
          <>
            <RankingItem>gun: {ranking.gun}</RankingItem>
            <RankingItem>gon: {ranking.gon}</RankingItem>
            <RankingItem>gam: {ranking.gam}</RankingItem>
            <RankingItem>lee: {ranking.lee}</RankingItem>
          </>
        )}
      </RankingList>
    </Wrapper>
  );
};

export default RankCoalitions;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RankImage = styled.div`
  position: absolute;
  width: 338px;
  height: 80px;
  margin-bottom: 350px;
  background: url(${RankImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const RankingList = styled.div`
  position: absolute;
  margin-top: 50px;
  max-height: 320px;
  overflow-y: auto;
`;

const RankingItem = styled.div`
  margin: 10px;
  font-size: 30px;
`;

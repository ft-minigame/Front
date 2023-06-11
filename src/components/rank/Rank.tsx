import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Background from '../background';
import RankImg from '../../assets/images/Rank/rank.png';
import { RankingType } from '../../types/RankingType';
import { getPost } from '../apis/api/post';

const Rank = () => {
  const [ranking, setRanking] = useState<RankingType[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getPost('rank/all');
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
        {!error &&
          ranking.map((singleRank, index) => (
            <RankingItem key={index}>
              {singleRank.nickname} : {singleRank.score}
            </RankingItem>
          ))}
      </RankingList>
    </Wrapper>
  );
};

export default Rank;

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
`;

const RankingItem = styled.div`
  margin: 10px;
  font-size: 30px;
  font-family: 'drfont_daraehand';
  @font-face {
    font-family: 'drfont_daraehand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/drfont_daraehand.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

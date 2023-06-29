import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../background';
import RankImg from '../../assets/images/Rank/rank.png';
import RankAllImg from '../../assets/images/Rank/rankall.png';
import RankCoalImg from '../../assets/images/Rank/rankcoal.png';
import { RankingType } from '../../types/RankingType';
import { getPost } from '../../apis/api/post';

const RankMe = () => {
  const [ranking, setRanking] = useState<RankingType[]>([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getPost('rank/sohlee'); // id로 변경 예정
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

  const handleRankAllClick = () => {
    navigate('/rankall');
  };

  const handleRankCoalClick = () => {
    navigate('/rankcoal');
  };

  return (
    <Wrapper>
      <Background />
      <RankImage />

      <LeftButton onClick={handleRankCoalClick}>
        <ButtonImg src={RankCoalImg} />
      </LeftButton>

      <RightButton onClick={handleRankAllClick}>
        <ButtonImg src={RankAllImg} />
      </RightButton>

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

export default RankMe;

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

const LeftButton = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: none;
  margin-bottom: 350px;
  margin-right: 350px;
`;

const RightButton = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: none;
  margin-bottom: 350px;
  margin-left: 350px;
`;

const ButtonImg = styled.img`
  width: 90px;
  height: 36px;
`;

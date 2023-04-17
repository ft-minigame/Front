import styled from 'styled-components';
import Background from '../background';
import { MenuButton } from './MenuButton';
import {
  Cat,
  CatThumbnail,
  GameSelect,
  GameSelectThumbnail,
  Inquiry,
  InquiryThumbnail,
  Rank,
  RankThumbnail,
  Setting,
  SettingThumbnail,
} from '../../assets/images/Index';
import { useNavigate } from 'react-router-dom';

const Menus = [
  {
    id: 0,
    src: GameSelect,
    defaultThumbnail: GameSelectThumbnail,
    url: '/gameselect',
  },
  {
    id: 1,
    src: Inquiry,
    defaultThumbnail: InquiryThumbnail,
    url: '/gameselect',
  },
  {
    id: 2,
    src: Setting,
    defaultThumbnail: SettingThumbnail,
    url: '/gameselect',
  },
  {
    id: 3,
    src: Rank,
    defaultThumbnail: RankThumbnail,
    url: '/gameselect',
  },
  {
    id: 4,
    src: Cat,
    defaultThumbnail: CatThumbnail,
    url: '',
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Background />
      <ButtonWrapper>
        {Menus.map(({ id, defaultThumbnail, src, url }) => (
          <MenuButton
            key={id}
            defaultThumbnail={defaultThumbnail}
            src={src}
            onClick={() => {
              navigate(url);
            }}
          />
        ))}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
  min-height: 675px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

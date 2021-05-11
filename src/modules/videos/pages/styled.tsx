import { Card } from 'antd';
import styled from 'styled-components';

const VideoDetailCard = styled(Card)`
  border: 1px solid #dde6f4;
  border-radius: 0.5em;
`;

const Header = styled.h3`
  color: var(--secondary-color);
`;

export { VideoDetailCard, Header };

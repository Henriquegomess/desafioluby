import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi'
import {BsPeopleFill} from 'react-icons/bs'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin: 25px 32px;
  justify-content: center;
  bottom: fixed;
  
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
  margin-top: 25px;
  fill: #000000;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  align-items: space-between;
`;


export const HomeLogo = styled(FiHome)`
  margin-top: 25px;
  fill: var(--border);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  align-items: space-between;
`;

export const PeopleLogo = styled(BsPeopleFill)`
  margin-top: 25px;
  fill: #000000;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  align-items: space-between;
`;



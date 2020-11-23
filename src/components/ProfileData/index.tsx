import React from 'react';

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

interface Props {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  bio?: string;
}


const ProfileData: React.FC<Props> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
  bio,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Column>
        {company && (
          <li>
            
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            
            <span>{blog}</span>
          </li>
        )}
      </Column>

      <Row>
        <li>
         
          <h1>{followers}</h1>
          <span>Seguidores</span>
          <span></span>
        </li>
        <li>
          <h1>{following}</h1>
          <span>Seguindo</span>
        </li>
      </Row>

      <Column>
      {bio && (
          <li>
            <h1>Bio</h1>
            <span>{bio}</span>
          </li>
        )} 
      </Column>

      
    </Container>
  );
};

export default ProfileData;
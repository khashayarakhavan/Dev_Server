import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  BackgroundImageContainer,
  ContentContainer,

  ContentSubtitle, ContentTitle, MenuItemContainer
} from './menu-item.styles';

export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
  routeName
}) => (
  <MenuItemContainer
    size={size}
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>visit our {title} section </ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);

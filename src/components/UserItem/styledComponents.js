import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const UserItemContainer = styled.div`
  width: 100%;
`

export const UserCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`

export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`

export const InfoText = styled.p`
  font-size: 14px;
  color: #475569;
  margin: 4px 0;
`

export const UserDetailsLink = styled(Link)`
  text-decoration: none;
`

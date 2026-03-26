import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #45289e;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const MenuItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #d1d1e0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`

export const IconWrapper = styled.span`
  margin-right: 12px;
  display: flex;
  align-items: center;
`

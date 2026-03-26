import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 80%;
`

export const UsersContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  color: #45289e;
  margin-bottom: 20px;
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const SearchContainer = styled.div`
  border: 0.5px solid black;
  border-radius: 2px;
  @media (max-width: 576px) {
    flex: 1;
  }
`

export const SearchInput = styled.input`
  padding: 15px;
  height: 40px;
  font-size: 14px;
  width: 400px;
  border: none;
`

export const Select = styled.select`
  padding: 15px;
  min-height: 40px;
  font-size: 16px;
  width: 200px;
  color: #45289e;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

export const Card = styled.div`
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

export const CenterView = styled.div`
  text-align: center;
  margin-top: 40px;
  color: #45289e;
`
export const RetryButton = styled.button`
  padding: 10px;
  width: 100px;
  color: white;
  font-size: 16px;
  background-color: #45289e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

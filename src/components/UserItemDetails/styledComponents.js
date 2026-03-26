import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
`
export const UsersContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  margin-bottom: 20px;
`

export const CenterView = styled.div`
  text-align: center;
  margin-top: 40px;
`

export const DetailCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 2rem auto;
`

export const DetailRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Label = styled.span`
  font-weight: 600;
  color: #555;
`

export const Value = styled.span`
  color: #333;
  margin-left: 10px;
`

export const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`

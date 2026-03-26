import {
  UserItemContainer,
  UserCard,
  Name,
  InfoText,
  UserDetailsLink,
} from './styledComponents'

const UserItem = props => {
  const {userDetails} = props

  const {id, name, email, phone, company} = userDetails

  return (
    <UserItemContainer>
      <UserDetailsLink to={`/users/${id}`}>
        <UserCard>
          <Name>{name}</Name>
          <InfoText>{email}</InfoText>
          <InfoText>{phone}</InfoText>
          <InfoText>{company.name}</InfoText>
        </UserCard>
      </UserDetailsLink>
    </UserItemContainer>
  )
}

export default UserItem

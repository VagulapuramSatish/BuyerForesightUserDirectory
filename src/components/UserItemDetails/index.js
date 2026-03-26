import {Component} from 'react'
import {
  Layout,
  UsersContainer,
  Heading,
  CenterView,
  DetailCard,
  DetailRow,
  Label,
  Value,
  BackButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class UserItemDetails extends Component {
  state = {
    userDetails: null,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`

    try {
      const response = await fetch(apiUrl)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          userDetails: data,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => this.getUserDetails()

  renderSuccessView = () => {
    const {userDetails} = this.state

    if (!userDetails) {
      return (
        <CenterView>
          <h3>User not found</h3>
        </CenterView>
      )
    }

    const {name, username, email, phone, website, company, address} =
      userDetails

    return (
      <DetailCard>
        <Heading>{name}</Heading>
        <DetailRow>
          <Label>Username:</Label>
          <Value>{username}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Email:</Label>
          <Value>{email}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Phone:</Label>
          <Value>{phone}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Website:</Label>
          <Value>{website}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Company:</Label>
          <Value>{company.name}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Address:</Label>
          <Value>
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
          </Value>
        </DetailRow>
        <BackButton onClick={() => this.props.history.goBack()}>
          Back to Users
        </BackButton>
      </DetailCard>
    )
  }

  renderFailureView = () => (
    <CenterView>
      <h3>Something went wrong</h3>
      <button onClick={this.onRetry}>Retry</button>
    </CenterView>
  )

  renderLoadingView = () => <CenterView>Loading user details...</CenterView>

  renderResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <Layout>
        <UsersContainer>{this.renderResult()}</UsersContainer>
      </Layout>
    )
  }
}

export default UserItemDetails

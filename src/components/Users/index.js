import {Component} from 'react'
import UserItem from '../UserItem'
import {
  Layout,
  UsersContainer,
  Heading,
  Controls,
  SearchInput,
  Select,
  Grid,
  CenterView,
  RetryButton,
  SearchContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Users extends Component {
  state = {
    usersList: [],
    apiStatus: apiStatusConstants.initial,
    searchValue: '',
    sortOption: 'NAME_ASC',
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    try {
      const response = await fetch(apiUrl)
      if (response.ok) {
        const data = await response.json()
        this.setState({
          usersList: data,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => this.getUsers()

  onChangeSearch = e => {
    this.setState({searchValue: e.target.value})
  }

  onChangeSort = e => {
    this.setState({sortOption: e.target.value})
  }

  getFilteredUsers = () => {
    const {usersList, searchValue, sortOption} = this.state

    const filtered = usersList.filter(
      user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()),
    )

    switch (sortOption) {
      case 'NAME_ASC':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'NAME_DESC':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'COMPANY_ASC':
        filtered.sort((a, b) => a.company.name.localeCompare(b.company.name))
        break
      case 'COMPANY_DESC':
        filtered.sort((a, b) => b.company.name.localeCompare(a.company.name))
        break
      default:
        break
    }

    return filtered
  }

  renderSuccessView = () => {
    const users = this.getFilteredUsers()

    if (users.length === 0) {
      return (
        <CenterView>
          <h3>No Users Found</h3>
          <RetryButton type="button" onClick={this.onRetry}>
            Retry
          </RetryButton>
        </CenterView>
      )
    }

    return (
      <Grid>
        {users.map(user => (
          <UserItem key={user.id} userDetails={user} />
        ))}
      </Grid>
    )
  }

  renderFailureView = () => (
    <CenterView>
      <h3>Something went wrong</h3>
      <button type="button" onClick={this.onRetry}>
        Retry
      </button>
    </CenterView>
  )

  renderLoadingView = () => <CenterView>Loading...</CenterView>

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
    const {searchValue, sortOption} = this.state

    return (
      <>
        <Layout>
          <UsersContainer>
            <Heading>Users</Heading>
            <Controls>
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Filter users by name or email"
                  value={searchValue}
                  onChange={this.onChangeSearch}
                />
              </SearchContainer>
              <Select value={sortOption} onChange={this.onChangeSort}>
                <option value="NAME_ASC">Name (a-Z)</option>
                <option value="NAME_DESC">Name (Z-a)</option>
                <option value="COMPANY_ASC">Company (a-Z)</option>
                <option value="COMPANY_DESC">Company (Z-a)</option>
              </Select>
            </Controls>
            {this.renderResult()}
          </UsersContainer>
        </Layout>
      </>
    )
  }
}

export default Users

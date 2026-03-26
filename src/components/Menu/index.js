import {MdDashboard, MdPeople, MdSettings} from 'react-icons/md'
import {FaUserPlus, FaChartBar} from 'react-icons/fa'
import {IoMdNotifications} from 'react-icons/io'
import {
  SidebarContainer,
  Heading,
  IconWrapper,
  MenuList,
  MenuItem,
} from './styledComponents'

const Menu = () => {
  return (
    <SidebarContainer>
      <Heading>
        <IconWrapper>
          <MdDashboard size={22} />
        </IconWrapper>
        Dashboard
      </Heading>
      <MenuList>
        <MenuItem>
          <IconWrapper>
            <MdPeople size={20} />
          </IconWrapper>
          Users
        </MenuItem>

        <MenuItem>
          <IconWrapper>
            <FaUserPlus size={20} />
          </IconWrapper>
          Add User
        </MenuItem>

        <MenuItem>
          <IconWrapper>
            <FaChartBar size={20} />
          </IconWrapper>
          Reports
        </MenuItem>

        <MenuItem>
          <IconWrapper>
            <IoMdNotifications size={20} />
          </IconWrapper>
          Alerts
        </MenuItem>

        <MenuItem>
          <IconWrapper>
            <MdSettings size={20} />
          </IconWrapper>
          Settings
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  )
}

export default Menu

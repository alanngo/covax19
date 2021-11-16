import { Dropdown } from "react-bootstrap"

const CompaniesDropdown = ({ children = (<></>), allSelect = () => { } }) =>
(
  <Dropdown>
    <Dropdown.Toggle variant="dark" id="dropdown-basic">
      Filter By Company
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onSelect={allSelect}>All</Dropdown.Item>
      <Dropdown.Divider />
      {children}
    </Dropdown.Menu>
  </Dropdown>
)
export default CompaniesDropdown
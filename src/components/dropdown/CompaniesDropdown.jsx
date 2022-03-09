import { Dropdown } from "react-bootstrap"

const CompaniesDropdown = 
(
  {
    namVaxes = 0,
    title = "Filter By Company",
    children = (<></>),
    allSelect = () => { }
  }
) =>
(
  <Dropdown>
    <Dropdown.Toggle
      variant="dark"
      id="dropdown-basic">
      {title}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onSelect={allSelect}>All ({namVaxes})</Dropdown.Item>
      <Dropdown.Divider />
      {children}
    </Dropdown.Menu>
  </Dropdown>
)
export default CompaniesDropdown
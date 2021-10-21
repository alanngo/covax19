import { Dropdown } from "react-bootstrap"
import { companies } from "../../helper/constants"

const CompaniesDropdown = ({singleSelect, allSelect}) =>
(
    <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Filter By Company
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={
                allSelect
                // () => setFiltered(patients)
                }>All</Dropdown.Item>
            <Dropdown.Divider />
            {
              companies.map(company =>
              (
                <Dropdown.Item
                  key={company}
                  onSelect={
                      singleSelect
                    //   () => setFiltered(patients.filter(p => p.company === company))
                      }>
                  {company}
                </Dropdown.Item>
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
)
export default CompaniesDropdown
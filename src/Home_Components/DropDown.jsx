import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const dropdownItems = [
    {to:"/food-blogs",
     page:"FOODS",
     id:0
    },
    {to:"/life-blogs",
    page:"DAILY LIFE",
    id:1
    },
    {to:"/exercise-blogs",
     page:"EXERCISE",
     id:2
    },
];

const DropDown = () => {
    return ( 
        <DropdownButton id="blog-dropdown" title="BLOGS">
            {dropdownItems.map(item => <Dropdown.Item as={Link} className="d-item" key={item.id} to={item.to}>{item.page}</Dropdown.Item> )}
        </DropdownButton>
     );
}
 
export default DropDown;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let cityToFind = '';

    const handleChange = (event) => {
        event.preventDefault();
        cityToFind = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cityToFind);
        dispatch({
            type: 'GET_WEATHER',
            payload: cityToFind
        })
        navigate('/weather');
    }

    return (
        <Form className="d-flex" onSubmit={(event) => { handleSubmit(event) }}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => { setTimeout(handleChange(event), 2000) }}
            />
            <Button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</Button>
        </Form>
    )
}

export default SearchBar;
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import {CartState} from './Context'
import './Header.css'

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }} className="header">
      <Container>
        <Navbar.Brand >
          <Link to="/" className="brand">Shopping Cart</Link>
        </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width:350 }}
              type="search"
              placeholder="Search a product..."
              aria-label="Search"
              onChange={(e)=>productDispatch({
                type:'FILTER_BY_SEARCH',
                payload:e.target.value
              })}
            />
          </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="icon">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span className="cartitem" key={product.id}>
                      <img
                        src={product.image}
                        className="cartItemImg"
                        alt={product.name}
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>₹ {product.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
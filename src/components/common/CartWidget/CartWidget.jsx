import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" style={{ color: "white" }}>
      <Badge badgeContent={8} color="error">
        <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;

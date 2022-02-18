import {Route, Link, Routes} from 'react-router-dom'

function Nav() {
    return(
<div>
<Link to='/'>

  <img
    src="https://i.postimg.cc/JnnsBrRj/pngegg-2.png"
    alt=""
  />
  
  </Link>
  <Link to="/character"><h5>Characters</h5></Link>
  <Link to="/location"><h5>Locations</h5></Link>
  <Link to="/episode"><h5>Episodes</h5></Link>
</div>
    )}
export default Nav;

<Link to='/'><img src="https://i.postimg.cc/JnnsBrRj/pngegg-2.png" alt=""/></Link>
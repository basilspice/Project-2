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
  <Link to="/character">Characters</Link>
  <Link to="/location">Locations</Link>
  <Link to="/episode">Episodes</Link>
</div>
    )}
export default Nav;

<Link to='/'><img src="https://i.postimg.cc/JnnsBrRj/pngegg-2.png" alt=""/></Link>
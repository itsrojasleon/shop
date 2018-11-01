import Nav from '../components/Nav';

function Header() {
  return (
    <div>
      <div className="bar">
        <a href="/">Sick Fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
}
export default Header;
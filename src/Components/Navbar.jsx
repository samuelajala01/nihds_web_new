const Navbar = () => {
    return ( <>
    <div className="flex m-auto justify-around p-8 bg-green-300 w-fit">
        <div>LOGO</div> 
        <ul className="flex justify-between text-blue-700">
       <li>Home</li>
       <li>About</li>
       <li> Events</li>
       <li>Reources</li>
        </ul>
        <button>Join Now</button>
        </div></> );
}
 
export default Navbar;
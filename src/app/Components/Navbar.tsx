const Navbar = ()=>{
    return( 
    <>
    <nav className=" flex justify-between items-center p-9">
        <div className="logo  font-bold text-xl  pl-20"><img src="./Images/Logo.png" alt="" /></div>
        <div  >
            <ul className="flex space-x-10 font-bold">
             <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
            <li>Login</li>
            <li><button className="border px-4 rounded">Login</button>
            </li>
            <li><span>EN</span></li>
        </ul>
        </div>
       
    </nav>
    </>

)}
export default Navbar;
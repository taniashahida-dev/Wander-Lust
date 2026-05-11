import Link from "next/link";


const Navbar = () => {
    return (
       <nav className="bg-white flex justify-between items-center p-4 w-11/12 mx-auto m-3">
        
            <ul className="flex gap-5">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/destination'}>Destination</Link>
                </li>
                <li>
                    <Link href={'/mybooking'}>My Bookings</Link>
                </li>
                <li>
                    <Link href={'/admin'}>Admin</Link>
                </li>
            </ul>

<h1 className="text-2xl font-bold text-blue-400">WanderLust</h1>
<ul className="flex gap-5">
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link href={'/signup'}>Sign up</Link>
                </li></ul>

      
       </nav>
    );
};

export default Navbar;
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// // import './Header.css'  // Add this CSS file

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav>
//                 <div className="flex justify-between items-center bg-gray-800 text-white p-4">
//                     <h2>plusguard</h2>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
//                             {[
//                                 { path: "/", label: "Home" },
//                                 { path: "/about", label: "About" },
//                                 { path: "/contact", label: "Contact" },
//                                 { path: "/github", label: "Github" },
//                                 { path: "/login", label: "Log in" },
//                             ].map((item, index) => (
//                                 <li key={index}>
//                                     <NavLink
//                                         to={item.path}
//                                         className="relative group px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out"
//                                     >
//                                         <span className="hover-underline-animation">{item.label}</span>
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const navItems = [
        { path: "/", label: "Home" },
    
        { path: "/contact", label: "Contact" },
        
        { path: "/login", label: "Log in" },
        { path: "/dashboard", label: "Dashboard" },
    ];

    // Split text into spans
    const animatedText = (text) =>
        text.split("").map((char, i) => (
            <span className="char-span" style={{ animationDelay: `${i * 0.02}s` }} key={i}>
                {char}
            </span>
        ));

    return (
        <header className="shadow sticky z-50 top-0">
            <nav>
                <div className="flex justify-between items-center bg-gray-800 text-white p-4">
                    <h2>plusguard</h2>
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                        {navItems.map(({ path, label }, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className="group text-white font-bold text-lg px-4 py-2 hover:text-blue-400 transition-all"
                                >
                                    <span className="wave-hover">{animatedText(label)}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

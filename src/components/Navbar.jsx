import logo from "../assets/logo1.png"
import { navItems } from "../constants"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" style={{ height: '25px', width: '25px', marginRight: '5px' }} />
                    <div className="span text-xl tracking-tight">Virtuo</div>
                </div>

                <ul className="hidden md:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                        <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
</ul>

            </div>
        </div>
    </nav>
  )
}

export default Navbar
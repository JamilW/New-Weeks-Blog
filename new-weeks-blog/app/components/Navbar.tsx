import Link from "next/link";
import Themebutton from "./ThemeButton";
import { SocialIcon } from 'react-social-icons'

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              THE WEEKS <span className="text-teal-500">AGENDA</span>
            </h1>
            
          </Link>

          <div>
            <SocialIcon className="mx-2 navbar-center display-iniine-block float-right clear-left" url="https://www.instagram.com/weeksagenda" style={{ height: 35, width: 35 }} />
            <SocialIcon className="mx-2 navbar-center" url="https://twitter.com/WeeksAgendaBlog" style={{ height: 35, width: 35 }} />
          
          </div>

          <Themebutton />
        </div>
      </div>
    </div>
  );
}
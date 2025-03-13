"use client"

import Link from "next/link"
import Image from "next/image"
import { FaDiscord, FaTelegram, FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

export default function NavBar() {
  const copyDiscordUsername = () => {
    navigator.clipboard.writeText("lanaz");
    alert("Lana's discord username is copied to your clipboard.");
  };

  return (
    <nav className="w-full py-2 px-6 md:px-12 flex items-center justify-between fixed top-0 z-50 ">
      <div className="flex items-center">
        <Link href="/" className="mr-8">
          <div className="flex items-center">
            <Image
              src="/lanaz-logo.png"
              alt="Lana Zumbrunn"
              width={150}
              height={60}
              className="h-16 w-auto"
            />
          </div>
        </Link>
      </div>

      {/* <div className="hidden md:flex items-center space-x-8">
        <Link href="/blog" className="text-[#e25c3d] text-lg font-medium hover:text-[#c04a30] transition-colors">
          Blog
        </Link>
        <Link href="/economy" className="text-[#e25c3d] text-lg font-medium hover:text-[#c04a30] transition-colors">
          LOLs
        </Link>
        <Link href="/forum" className="text-[#e25c3d] text-lg font-medium hover:text-[#c04a30] transition-colors">
          Email
        </Link>
      </div> */}

      <div className="flex items-center space-x-4">
      <Link href="https://www.linkedin.com/in/lanazumbrunn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="h-6 w-6 text-[#e25c3d]" />
        </Link>
        <Link href="https://github.com/lana-z" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="h-6 w-6 text-[#e25c3d]" />
        </Link>
        <Link href="https://twitter.com/lan_azk" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="h-6 w-6 text-[#e25c3d]" />
        </Link>
        <Link href="https://t.me/lan_azk" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram className="h-6 w-6 text-[#e25c3d]" />
        </Link>
        <Link href="#" onClick={copyDiscordUsername} aria-label="Discord">
          <FaDiscord className="h-6 w-6 text-[#e25c3d]" />
        </Link>
        {/* <Link href="https://www.youtube.com/@Lan-azk" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className="h-6 w-6 text-[#e25c3d]" />
        </Link> */}
      </div>
      
    </nav>
  )
}

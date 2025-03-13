import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col w-full py-4 md:py-8">
      <div className="flex flex-col md:flex-row px-6 md:px-12">
        {/* Left section with logo and copyright */}
        <div className="flex flex-col mt-6">
        <div className="mb-6 md:mb-0 md:mr-16">
          <Link href="/">
            <Image
              src="/lanaz-logo.png"
              alt="Lana Logo"
              width={140}
              height={50}
              className="h-12 w-auto opacity-50"
            />
          </Link>
          <p className="text-xs text-[#e25c3d] mt-2 hidden md:block">
            &copy; 2025 LANA ZUMBRUNN, ALL RIGHTS RESERVED.
          </p>
        </div>
        </div>

        {/* Right section with links */}
        <div className="flex-1">
          <div className="footerlinks">
            <div className="link-container">
              {/* First row of links */}
              <div className="border-t border-[#000]/80">
                <div className="link-row m-4 flex items-center">
                  <div className="footertitle w-48">
                    <div className="text-[#e25c3d] font-sans font-bold uppercase text-xs">Work with Lana</div>
                  </div>
                  <div className="links flex space-x-12">
                    <Link href="/contact-form" className="text-[#e25c3d] font-medium text-xs">
                      REQUEST A MEETING ↗
                    </Link>
                    <Link href="/linkedin" className="text-[#e25c3d] font-medium text-xs">
                      MESSAGE ON LINKEDIN ↗
                    </Link>
                    <Link href="/resume" className="text-[#e25c3d] font-medium text-xs">
                      RESUME ↗
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second row of links */}
              <div className="border-t border-[#000]/80">
              <div className="link-row flex m-4 items-center">
                <div className="footertitle w-48">
                  <div className="text-[#e25c3d] font-sans font-bold uppercase text-xs">Lana&apos;s Companies</div>
                </div>
                <div className="links flex space-x-12">
                  <Link
                    href="https://www.levelupeconomy.com"
                    className="text-[#e25c3d] font-medium text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LEVELUP ECONOMY ↗
                  </Link>
                  <Link
                    href="https://www.rooftop.global/"
                    className="text-[#e25c3d] font-medium text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ROOFTOP ↗
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile copyright - hidden on desktop */}
      <div className="md:hidden text-xs text-[#e25c3d] mt-6 px-6">
        &copy; 2025 LANA ZUMBRUNN. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}

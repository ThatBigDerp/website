import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import { memo } from 'hono/jsx'
import { PropsWithChildren } from 'hono/jsx'

type NavbarLinkType = {
  children: string
}



<<<<<<< HEAD
function NavbarLink({ children }: PropsWithChildren<NavbarLinkType>) {
=======
function NavbarLink({ active, children }: PropsWithChildren<NavbarLinkType>) {
    if (active) {
        return (
            <div>
                <span class="select-none flex items-center justify-center px-4 py-[.775rem my-[.4rem] rounded-[.95rem]">
                    <a hx-trigger="click" hx-indicator="#loader" hx-get={children} hx-target="#content" hx-swap="innerHTML settle:0.8s" class="active navlink flex items-center justify-center flex-grow text-[1.15rem] uppercase text-gray-900 hover:text-dark">{children}</a>
                </span>
            </div>
        )    
    } else {
>>>>>>> e584b306c3a031b2a7e781c19bb7f56830a36ac2
    return(    
        <span class="select-none flex items-center justify-center px-4 py-[.775rem] my-[.4rem] rounded-[.95rem]">
            <a hx-trigger="click" hx-get={children} hx-target="#content" hx-swap="innerHTML swap:1.6s" class="navlink flex items-center justify-center flex-grow text-[1.15rem] uppercase text-gray-900 hover:text-dark" _="on htmx:beforeRequest add .htmx-indicator to #loader then add @hx-disable='true' to .navlink then wait 1.6s then remove .htmx-indicator from #loader then wait 1.5s then remove @hx-disable='true' from .navlink end on click remove .active from .active then add .active on me">{children}</a>
        </span>
)
    }


const Navbar: FC = (props) => {
    return (
    <nav class="max-w-fit w-fit flex flex-col bg-white">
        <aside class="flex flex-col shrink-1 lg:w-80 w-64 transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white">
            <div class="flex h-24 bg-[#00144e]">
                    <img alt="Logo" src="static/lego.png" class="max-h-full max-w-full aspect-square self-start" />
                    <img alt="Logo" src="static/legotext.png" class="max-h-full max-w-full lg:mx-5 sm:mx-[-10px] content-center aspect-auto" />
            </div>
            <div class="relative shrink-1 flex-grow my-5 items-center justify-center overflow-y-scroll">
                <div id="navlinks" class="flex flex-grow-0 h-full flex-col gap-6 w-full items-center justify-center font-bold" _="on load add .active to first in first in me">
                    <NavbarLink>{"home"}</NavbarLink>
                    <NavbarLink>{"games"}</NavbarLink> 
                    <NavbarLink>{"contact"}</NavbarLink> 
                    <NavbarLink>{"support"}</NavbarLink> 
                    <NavbarLink>{"news"}</NavbarLink> 

                </div>
            </div>
            <div id="video" class="flex shrink-0 relative items-center justify-center lg:max-h-96 flex-grow max-w-80 min-h-sm max-h-fit bottom-0">
                <div id="controls" class="flex relative items-center justify-center flex-grow w-full h-full bg-[#ff5f00]">
                    <div class="flex items-center">
                        <span id="play-button" class="w-12 h-12 mt-5">
                            <span id="play-button-before" class="w-12 h-12"></span>
                            <span id="play-button-after" class="w-12 h-12"></span>
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    </nav>

    )
  }


export const NavbarComponent: FC = (props) => {
    return (
        <Navbar>

        </Navbar>
    )
  }
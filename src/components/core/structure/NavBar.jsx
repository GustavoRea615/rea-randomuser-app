import { Avatar, AvatarIcon, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import React from 'react'

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
      <Image
        width={90}
        alt="NextUI hero Image"
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png"
        />
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              icon={<AvatarIcon />}
              classNames={{
                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                icon: "text-black/80",
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" value="profile" textValue="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" value="profile" textValue="profile">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}

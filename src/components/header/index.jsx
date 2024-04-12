'use client';
import {useState} from "react";
import Link from 'next/link';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Blog",
        "Contact Us",
        "About Us",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href={{
                        pathname: '/'
                    }}>
                        <p className="font-bold text-inherit">WP HeadLess Blog</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href={{
                        pathname: '/blog/'
                    }}>
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={
                        {
                            pathname: '/about/'
                        }
                    }>
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={{
                        pathname: '/contact/'
                    }}>
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default Header;
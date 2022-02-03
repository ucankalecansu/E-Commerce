import {Box, Button, Link, Stack, SwipeableDrawer, Typography} from "@mui/material";
import {MailOutlined, MenuRounded, PhoneOutlined, ShoppingBasketOutlined} from "@mui/icons-material";
import {useState} from "react";

export default function Header() {
    const [menu_open, set_menu_open] = useState(false);

    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                gap={3}
                width="100%"
                backgroundColor={"#7E33E0"}
                height={40}
            >
                <Box display={"flex"} flexDirection={"row"} flex={1} alignItems={"stretch"}
                     justifyContent={"space-evenly"}>
                    <Box flexDirection={"row"} display={"flex"} gap={5} alignItems={"center"}>
                        <Box flexDirection={"row"} gap={1} display={"flex"} color={"white"}>
                            <MailOutlined/>
                            <Typography>example@example.com</Typography>
                        </Box>
                        <Box flexDirection={"row"} gap={1} color={"white"} display={"flex"}>
                            <PhoneOutlined/>
                            <Typography>+90(123)123-12-12</Typography>
                        </Box>

                    </Box>

                </Box>
                <Stack color={"white"} direction="row" gap={{md: 2, lg: 3, xl: 3}} mr={3} alignItems="center"
                       display={{xs: "none", md: "flex"}}>
                    <Link style={{color: "white", textDecoration: "none", cursor: "pointer"}}>TR</Link>
                    <Link style={{color: "white", textDecoration: "none", cursor: "pointer"}}>EN</Link>
                    <ShoppingBasketOutlined style={{cursor: "pointer"}}/>
                </Stack>
            </Stack>
            <Stack direction="row"
                   alignItems="center"
                   gap={1}
                   width="100%"
                   height={97}
                   borderBottom="1px solid hsl(0, 0%, 92%)">
                <Box flex={1} ml={2}><Link href={""}><img src={"./logo.svg"} alt="Deneme"/></Link></Box>
                <Stack mr={3} direction="row" gap={{md: 3, lg: 4, xl: 5}} alignItems="center"
                       display={{xs: "none", md: "flex"}}>
                    <Box><Link isActive href={"/"}>Home</Link></Box>
                    <Box><Link color={"#4E5C66"} href={""}>Pages</Link></Box>
                    <Box><Link color={"#4E5C66"} href={""}>Products</Link></Box>
                    <Box><Link color={"#4E5C66"} href={""}>Blog</Link></Box>
                    <Box><Link color={"#4E5C66"} href={""}>Shop</Link></Box>
                    <Box><Link color={"#4E5C66"} href={""}>Contact Us</Link></Box>
                </Stack>
                <Box display={["block", "block", "none"]}>
                    <Button onClick={() => set_menu_open(true)}>
                        <MenuRounded style={{color: "rgba(236,107,89,1)" + "rgba(228,28,92,1)", fontSize: "3rem"}}/>
                    </Button>
                </Box>

                <SwipeableDrawer
                    open={menu_open}
                    onClose={() => set_menu_open(false)}
                    onOpen={() => set_menu_open(true)}
                >
                    <Stack margin={2}>
                        <Box alignSelf={"center"}><Link href={"/"}><img src="" alt="Deneme"/></Link></Box>
                        <Box paddingX={2} paddingY={1}><Link isActive href={"/"}>Home</Link></Box>
                        <Box paddingX={2} paddingY={1}><Link color={"#4E5C66"} href={""}>Pages</Link></Box>
                        <Box paddingX={2} paddingY={1}><Link color={"#4E5C66"} href={""}>Products</Link></Box>
                        <Box paddingX={2} paddingY={1}><Link color={"#4E5C66"} href={""}>Blog</Link></Box>
                        <Box paddingX={2} paddingY={1}><Link color={"#4E5C66"} href={""}>Shop</Link></Box>

                        <Box paddingX={2} paddingY={1}><Link color={"#4E5C66"} href={""}>Contact Us</Link></Box>
                        {/*<Stack direction="row" gap={3} paddingX={5} justifyContent={"space-between"}>*/}
                        {/*	<Button>Giriş Yap</Button>*/}
                        {/*	<Button variant="contained" size="large" sx={{borderRadius: 19, width: 117}}>Üye Ol</Button>*/}
                        {/*</Stack>*/}
                        <Stack mt={2} direction="row" gap={3} justifyContent="center">
                            <Link>TR</Link>
                            <Link>EN</Link>
                        </Stack>
                    </Stack>
                </SwipeableDrawer>

            </Stack>
        </>
    )
}

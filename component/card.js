import {Box, Stack, Typography} from "@mui/material";
import {AddCircleOutline, FavoriteBorderOutlined, ShoppingCartOutlined} from "@mui/icons-material";

const accentColor = "#151875";
const blue = "#1389FF"
export default function Card({title, image, color, description, price}) {


    return (
        <Stack direction="column"
               bgcolor={color}
               sx={{borderRadius: 10}}
               borderRadius={3}
               p={3}
               height={486}
               maxWidth={330}
        >

            <Box gap={1} display={"flex"} flexDirection={"row"}>
                <ShoppingCartOutlined sx={{color: accentColor}} onClick={() => console.log("shopping")}/>
                <FavoriteBorderOutlined sx={{color: blue}} onClick={() => console.log("heart")}/>
                <AddCircleOutline sx={{color: blue}} onClick={() => console.log("add")}/>
            </Box>
            <Box flex={218} sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                &nbsp;

            </Box>
            <Stack mt={1} pb={2} mb={2} justifyContent="center" textAlign={"center"}>
                <Typography variant={"h4"}
                            style={{maxHeight: 25, color: "#FB2E86", fontWeight: "bold"}}>{title}</Typography>
            </Stack>
            <Typography style={{color: accentColor, fontWeight: "bold", textAlign: "center"}} variant={"body1"} mb={1}
                        flex={24}>{description}</Typography>
            <Typography style={{color: accentColor, fontWeight: "bold", textAlign: "center"}} variant={"body1"} mb={1}
                        flex={24}>{price}</Typography>
        </Stack>
    )
}


import Header from "../component/header";
import Footer from "../component/footer";
import Magazine from "../component/magazine";
import CardGroup from "../component/card_group";
import {Box, Stack, Typography} from "@mui/material";




export default function Home() {

  const accent_color = "#151875"

  return (
  <>
    <Header/>
    <Magazine
        title={"Best Furniture For Your Castle...."}
        content={"New Furniture Collection Trends in 2020"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing\n" +
        "in phasellus non in justo."}
    />
    <CardGroup/>
    <Box alignSelf="stretch" mb={5} mt={5}>
      <Stack direction="row" justifyContent="space-evenly"
             columnGap={2}
             rowGap={5}
             mx="auto" maxWidth={1440} flexWrap="wrap">
        <Box>
          <Typography sx={{color: accent_color, fontWeight: "bold"}} variant={"h4"}>Leatest
            Products</Typography>

        </Box>
      </Stack>
    </Box>


    <Footer/>

  </>
  )
}

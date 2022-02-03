import Card from "./card";
import {Box, Stack} from "@mui/material";

export default function CardGroup() {
    return (
        <Box alignSelf="stretch" mb={5} mt={5}>
            <Stack direction="row" justifyContent="space-evenly"
                   columnGap={2}
                   rowGap={5}
                   mx="auto" maxWidth={1440} flexWrap="wrap">
                <Card
                    image="./chair1.svg"
                    title="Cantilever chair"
                    description="Code - Y523201"
                    color="hsl(222, 100%, 98%)"
                    price={"$42.00"}
                />

                <Card
                    image="./chair1.svg"
                    title="Cantilever chair"
                    description="Code - Y523201"
                    color="hsl(222, 100%, 98%)"
                    price={"$42.00"}
                />
                <Card
                    image="./chair1.svg"
                    title="Cantilever chair"
                    description="Code - Y523201"
                    color="hsl(222, 100%, 98%)"
                    price={"$42.00"}
                />
            </Stack>
        </Box>
    )
}

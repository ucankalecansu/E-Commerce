import {Pagination} from "swiper";
import {Box, Stack, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



export default function Magazine({title, description, content}) {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <Stack
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    height={500}
                    mb={5}
                >
                    <Stack
                        sx={{
                            flex: 1,
                            width: "100%",
                            height: 200,
                            maxWidth: 1146,
                            justifyContent: "space-around",
                            alignItems: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            backgroundColor: "#F2F0FF",
                            display: 'flex',
                            gridColumn: "1fr 1fr 1fr",
                            flexDirection: "row",

                        }}
                    >
                        <Box sx={{marginTop: -15}}>
                            <img src={"./lamp_svg.svg"} alt={""}/>
                        </Box>
                        <Box width={'30%'}>
                            <Typography>{title}</Typography>
                            <Typography variant={"h4"}>{content}</Typography>
                            <Typography>{description}</Typography>
                        </Box>


                        <img src={"./magazine_svg.svg"} alt={""}/>

                    </Stack>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    height={500}


                >
                    <Stack
                        sx={{
                            flex: 1,
                            width: "100%",
                            height: 200,
                            justifyContent: "space-around",
                            alignItems: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            maxWidth: 1146,

                            backgroundColor: "#F2F0FF",
                            display: 'flex',
                            gridColumn: "1fr 1fr 1fr",
                            flexDirection: "row",

                        }}
                    >
                        <Box sx={{marginTop: -15}}>
                            <img src={"./lamp_svg.svg.svg"} alt={""}/>
                        </Box>
                        <Box width={'30%'}>
                            <Typography>{title}</Typography>
                            <Typography variant={"h4"}>{content}</Typography>
                            <Typography>{description}</Typography>
                        </Box>


                        <img src={"./magazine_svg.svg"} alt={""}/>

                    </Stack>
                </Stack>
            </SwiperSlide>
            <SwiperSlide>
                <Stack
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    justifyContent={"center"}
                    height={500}


                >
                    <Stack
                        sx={{
                            flex: 1,
                            width: "100%",
                            height: 200,
                            maxWidth: 1146,
                            justifyContent: "space-around",
                            alignItems: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            backgroundColor: "#F2F0FF",
                            display: 'flex',
                            gridColumn: "1fr 1fr 1fr",
                            flexDirection: "row",

                        }}
                    >
                        <Box sx={{marginTop: -15}}>
                            <img src={"./lamp_svg.svg.svg"} alt={""}/>
                        </Box>
                        <Box width={'30%'}>
                            <Typography>{title}</Typography>
                            <Typography variant={"h4"}>{content}</Typography>
                            <Typography>{description}</Typography>
                        </Box>
                        <img src={"./magazine_svg.svg"} alt={""}/>

                    </Stack>
                </Stack>
            </SwiperSlide>
        </Swiper>

    )
}

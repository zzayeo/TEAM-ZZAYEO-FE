import React from 'react';
import styled from 'styled-components';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

const SwiperImage = (props) => {
    const { image } = props

    return (
        <div style={{ maxWidth: "355px" }}>
            <SwiperSlider
                className="banner"
                spaceBetween={10}
                slidesPerView={1}
                // navigation
                pagination={{
                    type: "fraction",
                }}
            >
                {image && image.map((m, i) => (
                    <SwiperSlide >
                        <Image key={i} src={m}></Image>
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        </div>
    );
};

const Image = styled.div`
    padding-top: 75%;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    display: block;
    margin-top: 16px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.14);
`

const SwiperSlider = styled(Swiper)`

.swiper-pagination {
    line-height: 32px;
    background-color: rgba(0, 0, 0, 0.45);
    width: 54px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: 300;
    margin-left: 280px;
    margin-bottom: 200px;
    }
`

export default SwiperImage;
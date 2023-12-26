import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Tooltip } from "@mui/material";

export default function Courosel({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={7}
        centeredSlides={false}
        spaceBetween={0}
        pagination={{
          type: "fraction"
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <Tooltip arrow placement="top" title={`${e.songs.length} Songs`}>
              <div>
                <img
                  style={{
                    borderRadius: "10px 10px 0px 0px",
                    display: "block",
                    width: "159px",
                    height: "170px"
                  }}
                  src={e.image}
                  alt="cardImg"
                />
                <div
                  style={{
                    display: "flex",
                    width: "143px",
                    backgroundColor: "white",
                    margin: "0px",
                    padding: "12px",
                    borderRadius: "0px 0px 10px 10px",
                    paddingLeft: "4px"
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "12px",
                      margin: "0px",
                      padding: "8px"
                    }}
                  >
                    {e.follows} Follows
                  </p>
                </div>
                <p
                  style={{
                    width: "159px",
                    color: "white",
                    marginBottom: "0px"
                  }}
                >
                  {e.title}
                </p>
              </div>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
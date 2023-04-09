import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ slides }) => {
    return (
        <div id="gallery">
            <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
            <div className="mb-10">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper max-w-[1240px] max-h-[600px] mx-auto rounded"
                >
                    {
                        slides.map((slide, index) => {
                            return (

                                <SwiperSlide  key={index}>
                                    <div className="relative aspect-[5/3]">
                                        <Image
                                            src={slide.image}
                                            alt=""
                                            fill
                                            priority
                                            sizes="100%"
                                            className="object-cover object-center" />
                                    </div>
                                </SwiperSlide>


                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default Slider;
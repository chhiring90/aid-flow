import Home from "./pages/home";
import Signup from "./pages/sign-up";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "./components/header";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rank from "./pages/rank";
import Donation from "./pages/donation";

function App() {
  return <>
    <Header />
    <main className="relative">
      <Swiper
        modules={[Pagination]}
        // direction={'vertical'}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Signup />
        </SwiperSlide>
        <SwiperSlide>
          <Donation />
        </SwiperSlide>
        <SwiperSlide>
          <Rank />
        </SwiperSlide>
      </Swiper>
    </main>
    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
  </>
}

export default App;
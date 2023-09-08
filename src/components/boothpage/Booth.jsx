import React, { useEffect, useState, useRef } from 'react';

// redux
import { useAppSelector } from '../../redux/store';
// api
import {
  GetLocationBooth,
  GetCategoryBooth,
  GetDayBooth,
} from '../../api/booth';
// import { dayData } from './mock';
// import { locationData } from './mock';
// import { categoryData } from './mock';

// component
import TopBar from '../_common/topbar/TopBar';
import BoothComponent from './BoothComponent';
import BoothFilterBar from './BoothFilterBar';

// style
import { B } from './Booth.style';
import { useMap } from '../boothdetailpage/useMap';
import Footer from '../_common/footer/Footer';
import Pagination from './Pagination';
import { useDispatch } from 'react-redux';
import { setPageNumberInit } from '../../redux/pageSlice';
import circle from '../../assets/images/boothpage/circle.svg';
import { TbArrowBigUpLineFilled } from 'react-icons/tb';

const Booth = () => {
  // redux
  const {
    filter_day,
    filter_location,
    filter_category,
    filter_viewer,
    booth_page_num,
  } = useAppSelector(state => state.page);

  const dispatch = useDispatch();

  // state
  const [booth, setBooth] = useState([]);
  const [length, setLength] = useState(0);

  const getDay = () => {
    if (filter_day === '수') return 1;
    else if (filter_day === '목') return 2;
    else return 3;
  };

  const getCategory = () => {
    if (filter_category === '음식') return 1;
    else if (filter_category === '굿즈') return 3;
    else if (filter_category === '체험') return 2;
    else return 4;
  };

  const [totalPage, setTotalPage] = useState(0);
  const [state, setState] = useState(1);

  // get api
  useEffect(() => {
    if (filter_viewer === 'location') {
      GetLocationBooth(getDay(), filter_location, booth_page_num).then(res => {
        setBooth(res.data.data);
        setLength(res.data.total);
        setTotalPage(res.data.total_page);
      });
    } else if (filter_viewer === 'category') {
      GetCategoryBooth(getDay(), getCategory(), booth_page_num).then(res => {
        setBooth(res.data.data);
        setLength(res.data.total);
        setTotalPage(res.data.total_page);
      });
    } else {
      GetDayBooth(getDay(), booth_page_num).then(res => {
        setBooth(res.data.data);
        setLength(res.data.total);
        setTotalPage(res.data.total_page);
      });
    }
  }, [
    filter_day,
    filter_location,
    filter_category,
    filter_viewer,
    booth_page_num,
  ]);

  const mapSrc = useMap(filter_location);

  const topRef = useRef(null);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const boothRef = useRef(null);
  const scrollToBooth = () => {
    boothRef.current.scrollIntoView({ behavior: 'instant' });
  };
  return (
    <>
      <B.Wrapper ref={topRef}>
        <TopBar title='부스 목록' />
        <BoothFilterBar />
        {filter_viewer === 'location' ? (
          <B.MapContainer>
            <img src={mapSrc} />
          </B.MapContainer>
        ) : (
          ''
        )}
        <B.BoothLength ref={boothRef}>총 {length}개의 부스</B.BoothLength>
        <B.ComponentGrid>
          {booth.map(props => (
            <BoothComponent
              key={props.id}
              {...props}
              booth={booth}
              setBooth={setBooth}
            />
          ))}
        </B.ComponentGrid>
        <Pagination
          currentPage={booth_page_num}
          totalPage={totalPage}
          scrollToBooth={scrollToBooth}
        />
        <B.CircleWrapper>
          <B.CircleRect onClick={() => scrollToTop()}>
            <img src={circle} className='circle' />
            <TbArrowBigUpLineFilled size='38' color='var(--white)' />
          </B.CircleRect>
        </B.CircleWrapper>
      </B.Wrapper>
      <Footer />
    </>
  );
};

export default Booth;

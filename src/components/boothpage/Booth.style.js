import styled from 'styled-components';
// image
import daychecked from '../../assets/images/boothpage/daychecked.png';

// booth component
const ComponentContainer = styled.div`
  width: 46%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    filter: ${props => (props.closed ? 'opacity(0.7)' : '')};
  }

  .close {
    position: absolute;
    top: 0;
    z-index: 1;
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);

    /* filter: ${props => (props.closed ? 'blur(2px)' : '')}; */
    /* -webkit-filter: ${props => (props.closed ? 'blur(2px)' : '')};
    -moz-filter: ${props => (props.closed ? 'blur(2px)' : '')};
    -o-filter: ${props => (props.closed ? 'blur(2px)' : '')};
    -ms-filter: ${props => (props.closed ? 'blur(2px)' : '')};
    transform: scale(1.1);
    pointer-events: none; */
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 85px;
  padding-left: 4%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
  }
`;

const Bookmark = styled.div`
  width: 18px;
  height: 18px;
  overflow: hidden;
  position: relative;
  padding: 5px 8px 0 0;
  img {
    width: 16px;
  }
`;

const Location = styled.div`
  font-weight: 500;
  font-size: 9px;
  color: ${props => (props.closed ? 'var(--gray2)' : 'var(--red)')};
  margin: 7px 0 5px 0;

  span {
    margin-right: 3px;
  }
`;

const BoothTitle = styled.div`
  font-weight: 700;
  font-size: ${props => (props.length > 15 ? '13px' : '14px')};
  line-height: 15px;
  color: ${props => (props.closed ? 'var(--gray2)' : 'var(--green1)')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Hashtag = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: ${props => (props.closed ? 'var(--gray2)' : 'var(--green2)')};
  margin-top: 5px;
`;

export const C = {
  ComponentContainer,
  ImageWrapper,
  Bookmark,
  TitleWrapper,
  Location,
  BoothTitle,
  Hashtag,
};

// filterbar

const DayFilterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: solid 1px var(--gray3);
  overflow: hidden;
`;

const DayContainer = styled.div`
  color: ${props => (props.checked ? 'var(--green2)' : 'var(--gray2)')};
  background-image: ${props => (props.checked ? `url(${daychecked})` : 'none')};
  background-size: 102%;
  border-bottom: ${props =>
    props.checked ? 'solid 3px var(--green2)' : 'none'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .number {
    font-size: 13px;
    font-weight: 300;
    line-height: 15px;
  }
  .day {
    font-weight: ${props => (props.checked ? '700' : '500')};
    font-size: 16px;
    line-height: 20px;
  }
`;

const ViewerFilterContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ViewerContainer = styled.div`
  color: ${props => (props.checked ? 'var(--white)' : 'var(--gray2)')};
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 30px;
  font-weight: ${props => (props.checked ? '600' : '400')};
  font-size: 13px;
  line-height: 13px;
  position: relative;

  .check {
    position: absolute;
    z-index: 0;
    display: ${props => (props.checked ? 'inline' : 'none')};
  }

  .text {
    position: absolute;
    z-index: 1;
    overflow: hidden;
  }

  img {
    /* border: solid 1px; */
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 88%;
  margin: 4px 0 4px 0;
`;
const DataContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.checked ? 'var(--green2)' : 'var(--white)'};
  color: ${props => (!props.checked ? 'var(--green2)' : 'var(--white)')};
  border: solid 1px var(--green2);
  border-radius: 104px;
  font-size: 14px;

  margin: 2%;
`;

export const F = {
  DayFilterContainer,
  DayContainer,
  ViewerFilterContainer,
  ViewerContainer,
  DataGrid,
  DataContainer,
};

// boothpage

const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  /* min-height: calc(100vh - 130px); */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige);
`;

const ComponentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;

const BoothLength = styled.div`
  width: 86%;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: var(--gray2);
  margin: 4px 0 4px 0;
`;

const MapContainer = styled.div`
  width: 86%;
  position: relative;

  margin: 12px 0 4px 0;

  img {
    width: 100%;
  }
`;

const CircleWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  @media (min-width: 576px) {
    width: 390px;
  }
`;

const CircleRect = styled.div`
  position: relative;
  padding: 30px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    width: 60px;
    filter: drop-shadow(0px 1px 4px rgb(150 150 150 / 0.4));
  }
  svg {
    position: absolute;
    z-index: 101;
  }
`;

export const B = {
  Wrapper,
  ComponentGrid,
  BoothLength,
  MapContainer,
  CircleWrapper,
  CircleRect,
};

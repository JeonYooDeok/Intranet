import PrimaryButton from "../components/buttons/PrimaryButton";
import IconButton from "../components/buttons/IconButton";
import GrayButton from "../components/buttons/GrayButton";
import SelectBox from "../components/inputs/SelectBox";
import Header from '../components/header/Header';
import NoticeSlide from '../components/mypage/notice-slide/NoticeSlide';
import Profile from '../components/mypage/profile/Profile';

const Mypage = () => {
  return (
    <div className="layout">
      <div className="layout header rounded">
        <Header label={'마이페이지'} />
      </div>
      <div className="layout rounded">
        <NoticeSlide />
      </div>
      <div className="layout contents-areas">
        <div className="layout left-contents-area">
          <div className="layout profile rounded">
            <Profile />
          </div>
          <div className="layout members">멤버목록</div>
        </div>
        <div className="layout right-contents-area">
          <div className="layout schedule">근무관리</div>
          <div className="layout right-bottom-area">
            <div className="layout todo-list">할 일 목록
              <PrimaryButton label="프라이머리 md" size="md"/>
              <PrimaryButton label="프라이머리 lg" size="lg"/>
              <IconButton iconName="delete" />
              <GrayButton label="그레이버튼"/>
              <SelectBox options={["aa", "bb", "cc"]} size="md"/>
              <SelectBox options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} size="lg"/>
            </div>
            <div className="layout dayoff-areas">
              <div className="layout dayoff-management">연차 관리</div>
              <div className="layout dayoff-approval">연차 신청 내역</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;

import TodoList from "../components/mypage/todolist/TodoList";
import { ProfileImage } from "../components/profile/ProfileImage";
import Header from "../components/header/Header";
import NoticeSlide from "../components/mypage/notice-slide/NoticeSlide";
import Profile from "../components/mypage/profile/Profile";
import DayOffHistory from "../components/mypage/dayoffhistory/DayOffHistory";
import Modal from "../components/modal/Modal";

const Mypage = () => {
  return (
    <>
      <Modal />
      <div className="container">
        <div className="layout header rounded">
          <Header label={"마이페이지"} />
        </div>
        <div className="notice-slide layout rounded">
          <NoticeSlide />
        </div>
        <div className="contents-areas">
          <div className="left-contents-area">
            <div className="layout profile">
              <Profile />
            </div>
            <div className="layout members">
              멤버목록
              <ProfileImage size="lg" isOnline={true} />
              <ProfileImage />
            </div>
          </div>
          <div className="right-contents-area">
            <div className="layout schedule">근무관리</div>
            <div className="right-bottom-area">
              <div className="layout todo-list">
                <TodoList />
              </div>
              <div className="dayoff-areas">
                <div className="layout dayoff-management">연차 관리</div>
                <div className="layout dayoff-approval">
                  연차 신청 내역
                  <DayOffHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mypage;

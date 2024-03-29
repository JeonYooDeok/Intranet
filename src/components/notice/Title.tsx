type NoticeTitleProps = {
  title: string;
  date: string;
  onClick?: () => void;
};

export const NoticeTitle = ({ title, date, onClick }: NoticeTitleProps) => {
  return (
    <div
      onClick={onClick}
      className="border-b border-border border-solid px-3 py-3 flex justify-between"
    >
      <span className="text-mdBold">{title}</span>
      <span className="text-gray01 ">{date}</span>
    </div>
  );
};

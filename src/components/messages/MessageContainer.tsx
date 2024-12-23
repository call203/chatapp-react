import { FC, useContext, useEffect } from "react";
import { MessageType, User } from "../../utils/types";
import { AuthContext } from "../../utils/context/AuthContext";
import { formatRelative } from "date-fns";
import DefaultProfile from "../../Assets/DefaultProfile.png";
import useProfileStore from "../../store/ProfileStore";
import useMessageStore from "../../store/messageStore";
import { useParams } from "react-router-dom";

type FormatteMessageProps = {
  user?: User;
  message: MessageType;
};

export const FormattedMessage: FC<FormatteMessageProps> = ({
  user,
  message
}) => {
  const { toggleProfile, setProfileInfo, open } = useProfileStore();

  const handleUserInfo = () => {
    if (!open && message.author) {
      setProfileInfo(message.author);
      toggleProfile();
    }
  };

  return (
    <div className="flex flex-center flex-row pt-5">
      <img
        src={
          message.author?.profile?.image
            ? message.author?.profile.image
            : DefaultProfile
        }
        className="w-11 h-11  rounded-full"
      />

      <div className="ml-4">
        <div className="flex flex-col">
          <div className="flex flx-row items-center" onClick={handleUserInfo}>
            <span
              className={`text-sm pr-2 ${
                user?.id === message.author.id
                  ? `text-my_orange`
                  : `text-my_blue`
              }`}
            >
              {message.author.firstName} {message.author.lastName}
            </span>
            <span className="text-my_gray text-xxsm">
              {formatRelative(new Date(message.createdAt), new Date())}
            </span>
          </div>
          <div className="py-1 text-xsm">{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export const MessageContainer = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { messages } = useMessageStore();

  const formatMessage = () => {
    const msg = messages.find((cm) => cm.conversationId === parseInt(id!));
    if (!msg) return [];
    const msgReverse = [...msg?.messages].reverse();

    return (
      <div>
        {msgReverse.map((m, index, arr) => {
          let prevIndex = index - 1;
          let prev = arr[prevIndex];
          if (
            index > 0 &&
            prev.author.id === m.author.id &&
            prev.createdAt.substring(0, prev.createdAt.lastIndexOf(":")) ===
              m.createdAt.substring(0, m.createdAt.lastIndexOf(":"))
          ) {
            return (
              <div className="ml-10" key={m.id}>
                <div className="ml-5 py-1 text-xsm">{m.content}</div>
              </div>
            );
          }
          return <FormattedMessage user={user} message={m} key={m.id} />;
        })}
      </div>
    );
  };

  useEffect(() => {
    formatMessage();
  });

  return <>{formatMessage()}</>;
};

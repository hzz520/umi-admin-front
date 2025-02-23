import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  MenuProps,
  message,
  Modal,
  Space,
  Typography,
} from 'antd';
import { useHistory, useModel } from 'umi';
import { logOut } from '@/service/user';
import { io, Socket } from 'socket.io-client';
import { getList } from '../service/chatroom';
import styles from './rightContent.less';
import dayjs from 'dayjs';

export const RightContent = memo(() => {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [value, setValue] = useState('');
  const [roomId, setRoomId] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const indicateRef = useRef(null);
  const handleInput = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue],
  );
  const handleSubmit = useCallback(async () => {
    if (!value || !roomId) return;
    await socket.emit('message', {
      message: value.replace(/\n+$/, ''),
    });
    setValue('');
  }, [value, setValue, roomId]);
  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        if (!e.altKey && !e.metaKey && !e.shiftKey && !e.ctrlKey) {
          e.preventDefault();
          handleSubmit();
          return;
        }

        setValue(value + '\n');
      }
    },
    [handleSubmit, setValue],
  );
  const [roomInfo, setRoomInfo] = useState<
    Partial<{
      id: number;
      name: string;
      messages: {
        updateAt: string;
        message: string;
        id: number;
        userId?: number;
        system: number;
        user?: {
          name: string;
        };
      }[];
      users: { updateAt: string; name: string; id: number }[];
    }>
  >({});

  const handleChat = useCallback(
    (id) => {
      setOpen(true);
      setRoomId(id);
      setSocket(
        io(
          process.env.NODE_ENV === 'development'
            ? `http://localhost:82`
            : 'http://111.231.28.253',
          {
            path: '/ws',
            extraHeaders: {
              Authorization: localStorage.getItem('token'),
              roomId: id,
            },
          },
        ),
      );
    },
    [socket],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    setValue('');
    socket.disconnect();
    setSocket(null);
  }, [socket]);

  const getRooms = useCallback(() => {
    getList().then(({ data }) => {
      setRooms(data.list);
    });
  }, [setRooms, getList]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    let unauthorized = (error) => {
      if (
        error.data.type == 'UnauthorizedError' ||
        error.data.code == 'invalid_token'
      ) {
        // redirect user to login page perhaps?
        console.log('User token has expired');
      }
    };
    let connect = () => {
      socket.emit('join');
    };

    let join = (data) => {
      setRoomInfo(data);
      (indicateRef.current as HTMLElement).scrollIntoView();
    };
    if (socket) {
      socket.on('unauthorized', unauthorized);
      socket.on('connect', connect);
      socket.on('join', join);
      socket.on('message', join);
    }

    return () => {
      if (socket) {
        socket.off('message', join);
        socket.off('join', join);
        socket.off('unauthorized', unauthorized);
        socket.off('connect', connect);
        socket.close();
      }
    };
  }, [socket, indicateRef]);

  const menu = useMemo(() => {
    return {
      items: [
        {
          label: (
            <Typography.Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                display: 'block',
              }}
            >
              {initialState?.user?.role?.name}
            </Typography.Text>
          ),
          key: 'role',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          label: (
            <Button block type="text" ghost>
              修改密码
            </Button>
          ),
          key: 'changePwd',
        },
        {
          label: (
            <Button block type="text" ghost>
              退出登录
            </Button>
          ),
          key: 'logout',
        },
      ],
      onClick: (e) => {
        if (e.key === 'logout') {
          logOut().then(() => {
            localStorage.removeItem('token');
            setTimeout(() => {
              history.push('/user/login');
            }, 0);
          });
        }
        if (e.key === 'changePwd') {
          history.push('/user/changePwd');
        }
      },
    } as MenuProps;
  }, [history]);

  const chatMenu = useMemo(() => {
    return {
      items: rooms.map((item) => {
        return {
          label: <Typography.Link>{item.name}</Typography.Link>,
          key: item.id,
        };
      }),
      onClick: (e) => {
        if (!e.key) return;
        handleChat(e.key);
      },
    } as MenuProps;
  }, [rooms]);

  const renderMsg = useMemo(() => {
    if (!roomInfo?.messages || !initialState?.user) return <div></div>;

    return roomInfo.messages?.map((msg) => {
      let isSys = !!msg.system;
      let isMyself = msg.userId === initialState.user.id;
      let time = dayjs(msg.updateAt).format('YYYY-MM-DD HH:mm:ss');
      if (isSys) {
        return (
          <div className="message-item system">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: msg.message.replace(/\n/g, '<br/>'),
              }}
            ></div>
            <div className="time">{time}</div>
          </div>
        );
      }

      return (
        <div className={`message-item ${isMyself ? 'myself' : 'other'}`}>
          <div className="avatar">{msg?.user?.name}</div>
          <div className="send">
            <div className="time"> {time}</div>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: msg.message.replace(/\n/g, '<br/>'),
              }}
            ></div>
          </div>
        </div>
      );
    });
  }, [roomInfo.messages, initialState]);

  return (
    <Space>
      <Dropdown
        onOpenChange={(visable) => {
          if (visable) {
            getRooms();
          }
        }}
        menu={chatMenu}
        trigger={['click', 'hover']}
      >
        <Typography.Link style={{ marginRight: '10px' }}>
          聊天室
        </Typography.Link>
      </Dropdown>
      <Dropdown menu={menu} trigger={['click', 'hover']}>
        <Space>
          <Typography.Link>
            <Space>
              <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
              <Typography.Text style={{ maxWidth: '100px' }} ellipsis>
                {initialState?.user?.name || ''}
              </Typography.Text>
            </Space>
          </Typography.Link>
        </Space>
      </Dropdown>
      <Modal
        title={roomInfo?.name}
        open={open}
        footer={false}
        onCancel={handleClose}
        className={styles.modal}
        maskClosable={false}
        destroyOnClose
      >
        <div className={styles['chat-box']}>
          <div className="message">
            {renderMsg}
            <div className="indicate" ref={indicateRef}></div>
          </div>
          <div className="bottom">
            <textarea
              onKeyDown={handleKeyDown}
              onInput={handleInput}
              placeholder="请输入消息"
              value={value}
            />
            {/* <button onKeyUp={handleKeyUp} onClick={handleSubmit}>发送</button> */}
          </div>
        </div>
      </Modal>
    </Space>
  );
});

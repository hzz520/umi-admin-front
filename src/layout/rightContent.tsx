import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Avatar,
  Button,
  Dropdown,
  MenuProps,
  Modal,
  Space,
  Typography,
} from 'antd';
import { useHistory, useModel } from 'umi';
import { logOut } from '@/service/user';
import { getList } from '../service/chatroom';
import styles from './rightContent.less';
import dayjs from 'dayjs';
import { decompressData } from '@/utils/compress';

export const RightContent = memo(() => {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const {
    open,
    value,
    indicateRef,
    roomInfo,
    handleChat,
    handleClose,
    addEvents,
    removeEvents,
    handleKeyDown,
    handleInput,
  } = useModel('chatroom', (model) => model);
  const [rooms, setRooms] = useState([]);

  const getRooms = useCallback(() => {
    getList().then(({ data }) => {
      setRooms(data.list);
    });
  }, [setRooms, getList]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    addEvents();

    return () => {
      removeEvents();
    };
  }, [addEvents, removeEvents]);

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
      let __html;
      try {
        __html = decompressData(msg.message)?.replace(/\n/g, '<br/>');
      } catch (error) {
        __html = msg.message.replace(/\n/g, '<br/>');
      }

      if (isSys) {
        return (
          <div className="message-item system">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html,
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
                __html,
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

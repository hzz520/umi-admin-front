import { compressData } from '@/utils/compress';
import { useCallback, useRef, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export default function useChatRoom() {
  const [open, setOpen] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [value, setValue] = useState('');
  const indicateRef = useRef(null);
  const [socket, setSocket] = useState<Socket | null>(null);
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
    (roomId) => {
      setOpen(true);
      setRoomId(roomId);
      setSocket(
        io(
          process.env.NODE_ENV === 'development'
            ? `http://localhost:82`
            : 'http://111.231.28.253',
          {
            path: '/ws',
            extraHeaders: {
              Authorization: localStorage.getItem('token'),
              roomId,
            },
          },
        ),
      );
    },
    [setOpen, setRoomId, setSocket],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    setValue('');
    socket.disconnect();
    setSocket(null);
  }, [socket, setOpen, setValue, setSocket]);

  const handleInput = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const handleSubmit = useCallback(async () => {
    if (!value || !roomId) return;
    await socket.emit('message', {
      message: compressData(value.replace(/\n+$/, '')),
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

  const unauthorized = useCallback(() => {
    (error) => {
      if (
        error.data.type == 'UnauthorizedError' ||
        error.data.code == 'invalid_token'
      ) {
        // redirect user to login page perhaps?
        console.log('User token has expired');
      }
    };
  }, []);

  const connect = useCallback(() => {
    socket.emit('join');
  }, [socket]);

  const join = useCallback(
    (data) => {
      setRoomInfo(data);
      setTimeout(() => {
        (indicateRef.current as HTMLElement).scrollIntoView();
      }, 0);
    },
    [indicateRef, setRoomInfo],
  );

  const addEvents = useCallback(() => {
    if (socket) {
      socket.on('unauthorized', unauthorized);
      socket.on('connect', connect);
      socket.on('join', join);
      socket.on('message', join);
    }
  }, [socket, unauthorized, connect, join]);

  const removeEvents = useCallback(() => {
    if (socket) {
      socket.off('unauthorized', unauthorized);
      socket.off('connect', connect);
      socket.off('join', join);
      socket.off('message', join);
      socket.close();
    }
  }, [socket, unauthorized, connect, join]);

  return {
    open,
    value,
    roomInfo,
    indicateRef,
    handleChat,
    handleClose,
    addEvents,
    removeEvents,
    handleKeyDown,
    handleInput,
  };
}

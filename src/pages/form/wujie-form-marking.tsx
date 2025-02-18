import { useEffect, useMemo, useRef } from 'react';
import WujieReact from 'wujie-react';
import lifecycles from '@/lifecycles';
import { useLocation } from 'umi';
const { setupApp, destroyApp } = WujieReact;

export default function Form(
  props: { versionId?: string; path?: string } = {},
) {
  const { pathname } = useLocation();
  const ref = useRef();
  const baseUrl = useMemo(() => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:8081/form-marking';
    }

    return 'http://111.231.28.253/form-marking';
  }, []);

  useEffect(() => {
    setupApp({
      name: 'dynamic-form',
      url: baseUrl,
      sync: false,
      exec: false,
      ...lifecycles,
    });

    return () => {
      destroyApp('dynamic-form');
    };
  }, [ref]);

  const url = useMemo(() => {
    let url = `${props.path ? props.path : pathname.replace('/form/', '')}${
      location.search
    }`;
    return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  }, [pathname, props]);
  console.log('url', url);

  return (
    <WujieReact
      width="100%"
      height="100%"
      name="dynamic-form"
      url={url}
      alive={false}
      sync={false}
    />
  );
}

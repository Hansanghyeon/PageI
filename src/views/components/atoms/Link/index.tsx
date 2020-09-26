import Link from 'next/link';
import styled from 'styled-components';

export default (props: any) => (
  <Link {...props}>
    <a>{props.children}</a>
  </Link>
);

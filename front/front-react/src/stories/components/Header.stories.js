import { Header } from "../../components";

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: '홍길동',
    },
  },
};

export const LoggedOut = {};

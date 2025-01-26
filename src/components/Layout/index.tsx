type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Layout;

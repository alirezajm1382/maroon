import { BottomBar, TopBar } from "./NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <BottomBar />
    </>
  );
}

import All from "../components/notifications/All";
import Header from "../components/notifications/Header";
import Mention from "../components/notifications/Mention";
import Verified from "../components/notifications/Verified";

const Notifications = () => {
  return (
    <section className="header-layout">
      <Header />
      <Verified />
      <Mention />
      <All />
    </section>
  );
};

export default Notifications;

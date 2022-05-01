import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountSetting from "../../components/user/settings/AccountSetting";
import EditProfile from "../../components/user/settings/EditProfile";
import MessageSetting from "../../components/user/settings/MessageSetting";
import NotificationSetting from "../../components/user/settings/NotificationSetting";
import UserSettingsLayout from "../../components/user/UserSettingsLayout";
import withAuth from "../../config/withAuth";
import { userActions } from "../../services/user/action";

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch(null);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  // get the profile data
  useEffect(() => {
    dispatch(userActions.getProfile());
  }, [dispatch]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (router.query) {
      if (!!router.query.active) {
        setActive(parseInt(router.query.active));
      } else {
        setActive(0);
      }
    }
  }, [router.query]);

  return (
    <UserSettingsLayout active={active} setActive={setActive}>
      <div className="tab-content" id="v-pills-tabContent">
        {active === 0 && <AccountSetting dispatch={dispatch} user={user} />}
        {active === 1 && (
          <EditProfile user={user} dispatch={dispatch} auth={auth} />
        )}
        {active === 2 && <MessageSetting />}
        {active === 3 && <NotificationSetting />}
      </div>
    </UserSettingsLayout>
  );
};

export default withAuth(Settings);

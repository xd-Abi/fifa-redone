import {
  Link,
  Navbar as NextNavbar,
  Text,
  Avatar,
  Dropdown,
} from "@nextui-org/react";
import { useIsMounted, useUser } from "@/hooks";
import { Key } from "react";
import { useRouter } from "next/router";

const UserDropdown = () => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const user = useUser();

  const handleDropdownAction = (action: Key) => {
    switch (action) {
      case "sign-up":
        router.push("/auth/sign-up");
    }
  };

  if (!isMounted) {
    return <></>;
  }

  return (
    <Dropdown placement="bottom-right">
      <NextNavbar.Item>
        <Dropdown.Trigger>
          <Avatar
            bordered
            as="button"
            color="primary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </Dropdown.Trigger>
      </NextNavbar.Item>
      {user !== undefined && (
        <Dropdown.Menu
          aria-label="User menu actions"
          onAction={handleDropdownAction}
        >
          <Dropdown.Item
            key="profile"
            css={{ height: "$18" }}
            textValue="Profile"
          >
            <Text b color="inherit" css={{ d: "flex" }}>
              Signed in as
            </Text>
            <Text b color="inherit" css={{ d: "flex" }}>
              {user.email}
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="settings" withDivider>
            My Settings
          </Dropdown.Item>
          <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
          <Dropdown.Item key="analytics" withDivider>
            Analytics
          </Dropdown.Item>
          <Dropdown.Item key="system">System</Dropdown.Item>
          <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
          <Dropdown.Item key="help-and-feedback" withDivider>
            Help & Feedback
          </Dropdown.Item>
          <Dropdown.Item key="logout" withDivider color="error">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
      {user === undefined && (
        <Dropdown.Menu
          aria-label="User menu actions"
          onAction={handleDropdownAction}
        >
          <Dropdown.Item
            key="sign-up"
            css={{ height: "$18" }}
            textValue="Sign Up"
          >
            <Text b color="inherit" css={{ d: "flex" }}>
              Join the football community
            </Text>

            <Link>
              <Text b color="inherit" css={{ d: "flex" }}>
                Sign Up
              </Text>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="sign-in" withDivider>
            Login
          </Dropdown.Item>
          <Dropdown.Item key="help-and-feedback" withDivider>
            Help & Feedback
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default UserDropdown;

import React, { Key } from "react";
import { useRouter } from "next/router";
import { Link, Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { useUser } from "@/hooks";
import Mounted from "../mounted";

const UserDropdown = () => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useUser();

  const handleDropdownAction = (action: Key) => {
    switch (action) {
      case "sign-up":
        router.push("/auth/sign-up");
        break;
      case "sign-in":
        router.push("/auth/sign-in");
        break;
      case "profile":
        router.push("/profile");
        break;
      case "logout":
        logout();
        break;
    }
  };
  return (
    <Mounted>
      <Dropdown placement="bottom-right">
        <Navbar.Item>
          <Dropdown.Trigger>
            <Avatar
              bordered
              as="button"
              color="primary"
              size="md"
              src="/images/def-avatar.png"
            />
          </Dropdown.Trigger>
        </Navbar.Item>
        {isAuthenticated && user !== undefined && (
          <Dropdown.Menu
            aria-label="User menu actions"
            onAction={handleDropdownAction}
          >
            <Dropdown.Item
              key="signed-in-as"
              css={{ height: "$18" }}
              textValue="Sign Up"
            >
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>

              <Text b color="inherit" css={{ d: "flex" }}>
                {user.email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="profile" withDivider>
              My Profile
            </Dropdown.Item>
            <Dropdown.Item key="help-and-feedback">
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
        {!isAuthenticated && (
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
    </Mounted>
  );
};

export default UserDropdown;

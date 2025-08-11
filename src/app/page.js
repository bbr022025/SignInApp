"use client";
import * as React from "react";
import "@fontsource/inter";
import SignIn from "./components/SignIn";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Container } from "@mui/joy";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Select
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: "max-content" }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function Home() {
  return (
    <>
      <CssVarsProvider>
        <ModeToggle />
        <Container>
          <SignIn />
        </Container>
      </CssVarsProvider>
    </>
  );
}

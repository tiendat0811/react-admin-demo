import { useState } from "react";
import { ChangePasswordModal } from "./ChangePasswordModal";
import { Button } from "@mui/material";
import { useRecordContext } from "react-admin";

export const ChangePasswordButton = () => {
  const [open, setOpen] = useState(false);
  const record = useRecordContext();
  if (!record) return null;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change Password
      </Button>
      <ChangePasswordModal open={open} onClose={handleClose} record={record} />
    </>
  );
};

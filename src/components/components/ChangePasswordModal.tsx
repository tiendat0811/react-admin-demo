import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useUpdate, useGetList } from "react-admin";

export const ChangePasswordModal = ({ open, onClose, record }: any) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [update] = useUpdate();

  const { data }: any = useGetList("user-credentials", {
    filter: { userId: record.id },
  });
  const handleSubmit = () => {
    //change password in user-credentials
    if (!data) return;
    if (newPassword !== confirmPassword) return alert("Password not match!");
    if (confirmPassword.length < 8)
      return alert("Password too short! Must be at least 8 characters");
    update("user-credentials", {
      id: data[0].id,
      data: { password: confirmPassword },
    });
    alert("Change password success!");
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

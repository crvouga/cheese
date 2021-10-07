import EditIcon from "@mui/icons-material/Edit";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";

export const ProfileDisplayNameForm = ({
  displayName,
  onUpdate,
}: {
  displayName?: string;
  onUpdate: ({ displayName }: { displayName?: string }) => Promise<void>;
}) => {
  const [runningDisplayName, setRunningDisplayName] = useState(
    displayName ?? ""
  );

  const mutation = useMutation(() => {
    return onUpdate({ displayName: runningDisplayName });
  });

  useEffect(() => {
    setRunningDisplayName(displayName ?? "");
  }, [displayName]);

  return (
    <>
      <Box
        sx={{
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Display Name"
          sx={{ marginBottom: 1 }}
          value={runningDisplayName}
          onChange={(event) => {
            setRunningDisplayName(event.target.value);
          }}
        />

        <LoadingButton
          startIcon={<EditIcon />}
          loading={mutation.isLoading}
          variant="outlined"
          fullWidth={false}
          onClick={() => {
            mutation.mutateAsync();
          }}
        >
          Update
        </LoadingButton>
      </Box>
    </>
  );
};

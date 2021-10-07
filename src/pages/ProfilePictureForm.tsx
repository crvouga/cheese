import UploadIcon from "@mui/icons-material/Upload";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const ProfilePictureForm = ({
  profilePictureUrl,
  onUpdate,
}: {
  profilePictureUrl?: string;
  onUpdate: ({ profilePictureFile }: { profilePictureFile: File }) => void;
}) => {
  const [state, setState] = useState<"idle" | "loading">("idle");

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const [profilePictureFile] = acceptedFiles;
      if (profilePictureFile) {
        setState("loading");
        await onUpdate({ profilePictureFile });
        setState("idle");
      }
    },
    [onUpdate]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

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
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Avatar
            sx={{
              width: "132px",
              height: "132px",
              marginBottom: 1,
            }}
            variant="rounded"
            src={profilePictureUrl}
          />
          <LoadingButton
            fullWidth={false}
            startIcon={<UploadIcon />}
            variant="outlined"
            loading={state === "loading"}
          >
            Upload
          </LoadingButton>
        </div>
      </Box>
    </>
  );
};

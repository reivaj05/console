// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@material-ui/core";
import api from "../../../common/api";
import { UsersList } from "../Users/types";
import ErrorBlock from "../../shared/ErrorBlock";

interface IDeleteGroup {
  selectedGroup: string;
  deleteOpen: boolean;
  closeDeleteModalAndRefresh: any;
}

const DeleteGroup = ({
  selectedGroup,
  deleteOpen,
  closeDeleteModalAndRefresh,
}: IDeleteGroup) => {
  const [isDeleting, setDeleteLoading] = useState<boolean>(false);
  const [deleteError, setError] = useState<string>("");

  useEffect(() => {
    if (isDeleting) {
      const removeRecord = () => {
        if (!selectedGroup) {
          return;
        }

        api
          .invoke("DELETE", `/api/v1/groups/${selectedGroup}`)
          .then((res: UsersList) => {
            setDeleteLoading(false);
            setError("");

            closeDeleteModalAndRefresh(true);
          })
          .catch((err) => {
            setDeleteLoading(false);
            setError(err);
          });
      };
      removeRecord();
    }
  }, [isDeleting, selectedGroup, closeDeleteModalAndRefresh]);

  const closeNoAction = () => {
    setError("");
    closeDeleteModalAndRefresh(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={deleteOpen}
        onClose={closeNoAction}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete User</DialogTitle>
        <DialogContent>
          {isDeleting && <LinearProgress />}
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete group <b>{selectedGroup}</b>?
            {deleteError !== "" && <ErrorBlock errorMessage={deleteError} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeNoAction} color="primary" disabled={isDeleting}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDeleteLoading(true);
            }}
            color="secondary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteGroup;

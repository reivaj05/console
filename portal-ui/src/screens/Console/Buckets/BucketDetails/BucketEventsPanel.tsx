// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
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

import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { Button } from "@mui/material";
import get from "lodash/get";
import Grid from "@mui/material/Grid";
import { AddIcon, LambdaIcon } from "../../../../icons";
import { BucketEvent, BucketEventList, BucketInfo } from "../types";
import { setErrorSnackMessage } from "../../../../actions";
import { AppState } from "../../../../store";
import {
  actionsTray,
  searchField,
} from "../../Common/FormComponents/common/styleLibrary";
import { ErrorResponseHandler } from "../../../../common/types";
import TableWrapper from "../../Common/TableWrapper/TableWrapper";
import api from "../../../../common/api";
import DeleteEvent from "./DeleteEvent";
import AddEvent from "./AddEvent";
import HelpBox from "../../../../common/HelpBox";
import { displayComponent } from "../../../../utils/permissions";
import {
  ADMIN_SERVER_INFO,
  S3_GET_BUCKET_NOTIFICATIONS,
  S3_PUT_BUCKET_NOTIFICATIONS,
} from "../../../../types";
import PanelTitle from "../../Common/PanelTitle";

const styles = (theme: Theme) =>
  createStyles({
    ...searchField,
    ...actionsTray,
    actionsTray: {
      ...actionsTray.actionsTray,
    },
    twHeight: {
      minHeight: 400,
    },
  });

interface IBucketEventsProps {
  classes: any;
  match: any;
  setErrorSnackMessage: typeof setErrorSnackMessage;
  loadingBucket: boolean;
  bucketInfo: BucketInfo | null;
}

const BucketEventsPanel = ({
  classes,
  match,
  setErrorSnackMessage,
  loadingBucket,
  bucketInfo,
}: IBucketEventsProps) => {
  const [addEventScreenOpen, setAddEventScreenOpen] = useState<boolean>(false);
  const [loadingEvents, setLoadingEvents] = useState<boolean>(true);
  const [records, setRecords] = useState<BucketEvent[]>([]);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<BucketEvent | null>(null);

  const bucketName = match.params["bucketName"];

  const displayEvents = displayComponent(bucketInfo?.allowedActions, [
    S3_GET_BUCKET_NOTIFICATIONS,
  ]);

  const displaySubscribeToEvents = displayComponent(
    bucketInfo?.allowedActions,
    [S3_PUT_BUCKET_NOTIFICATIONS, ADMIN_SERVER_INFO],
    true
  );

  useEffect(() => {
    if (loadingBucket) {
      setLoadingEvents(true);
    }
  }, [loadingBucket, setLoadingEvents]);

  useEffect(() => {
    if (loadingEvents) {
      if (displayEvents) {
        api
          .invoke("GET", `/api/v1/buckets/${bucketName}/events`)
          .then((res: BucketEventList) => {
            const events = get(res, "events", []);
            setLoadingEvents(false);
            setRecords(events || []);
          })
          .catch((err: ErrorResponseHandler) => {
            setLoadingEvents(false);
            setErrorSnackMessage(err);
          });
      } else {
        setLoadingEvents(false);
      }
    }
  }, [loadingEvents, setErrorSnackMessage, bucketName, displayEvents]);

  const eventsDisplay = (events: string[]) => {
    return <Fragment>{events.join(", ")}</Fragment>;
  };

  const confirmDeleteEvent = (evnt: BucketEvent) => {
    setDeleteOpen(true);
    setSelectedEvent(evnt);
  };

  const closeAddEventAndRefresh = () => {
    setAddEventScreenOpen(false);
    setLoadingEvents(true);
  };

  const closeDeleteModalAndRefresh = (refresh: boolean) => {
    setDeleteOpen(false);
    if (refresh) {
      setLoadingEvents(true);
    }
  };

  const tableActions = [{ type: "delete", onClick: confirmDeleteEvent }];

  return (
    <Fragment>
      {deleteOpen && (
        <DeleteEvent
          deleteOpen={deleteOpen}
          selectedBucket={bucketName}
          bucketEvent={selectedEvent}
          closeDeleteModalAndRefresh={closeDeleteModalAndRefresh}
        />
      )}
      {addEventScreenOpen && (
        <AddEvent
          open={addEventScreenOpen}
          selectedBucket={bucketName}
          closeModalAndRefresh={closeAddEventAndRefresh}
        />
      )}

      <Grid container>
        <Grid item xs={12} className={classes.actionsTray}>
          <PanelTitle>Events</PanelTitle>
          {displaySubscribeToEvents && (
            <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              size="medium"
              onClick={() => {
                setAddEventScreenOpen(true);
              }}
            >
              Subscribe to Event
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <TableWrapper
            disabled={!displayEvents}
            itemActions={tableActions}
            columns={[
              { label: "SQS", elementKey: "arn" },
              {
                label: "Events",
                elementKey: "events",
                renderFunction: eventsDisplay,
              },
              { label: "Prefix", elementKey: "prefix" },
              { label: "Suffix", elementKey: "suffix" },
            ]}
            isLoading={loadingEvents}
            records={records}
            entityName="Events"
            idField="id"
            customPaperHeight={classes.twHeight}
          />
        </Grid>
        {!loadingEvents && (
          <Grid item xs={12}>
            <HelpBox
              title={"Lambda Notifications"}
              iconComponent={<LambdaIcon />}
              help={
                <Fragment>
                  MinIO bucket notifications allow administrators to send
                  notifications to supported external services on certain object
                  or bucket events. MinIO supports bucket and object-level S3
                  events similar to the Amazon S3 Event Notifications.
                  <br />
                  <br />
                  You can learn more at our{" "}
                  <a
                    href="https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con"
                    target="_blank"
                    rel="noreferrer"
                  >
                    documentation
                  </a>
                  .
                </Fragment>
              }
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

const mapState = (state: AppState) => ({
  session: state.console.session,
  loadingBucket: state.buckets.bucketDetails.loadingBucket,
  bucketInfo: state.buckets.bucketDetails.bucketInfo,
});

const connector = connect(mapState, {
  setErrorSnackMessage,
});

export default withStyles(styles)(connector(BucketEventsPanel));

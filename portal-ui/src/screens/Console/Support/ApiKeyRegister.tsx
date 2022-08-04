// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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
import { Box, Button } from "@mui/material";
import { OnlineRegistrationIcon } from "../../../icons";
import { FormTitle } from "./utils";
import InputBoxWrapper from "../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import GetApiKeyModal from "./GetApiKeyModal";
import RegisterHelpBox from "./RegisterHelpBox";
import { SubnetLoginRequest, SubnetLoginResponse } from "../License/types";
import api from "../../../common/api";
import { useAppDispatch } from "../../../store";
import { setErrorSnackMessage } from "../../../systemSlice";
import { ErrorResponseHandler } from "../../../common/types";
import { useCallback } from "react";
import { spacingUtils } from "../Common/FormComponents/common/styleLibrary";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";

interface IApiKeyRegister {
  classes: any;
  afterRegister: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    sizedLabel: {
      minWidth: "75px",
    },
    ...spacingUtils,
  });

const ApiKeyRegister = ({ classes, afterRegister }: IApiKeyRegister) => {
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [fromModal, setFromModal] = useState(false);
  const dispatch = useAppDispatch();

  const onRegister = useCallback(() => {
    if (loading) {
      return;
    }
    setLoading(true);
    let request: SubnetLoginRequest = { apiKey };
    api
      .invoke("POST", "/api/v1/subnet/login", request)
      .then((resp: SubnetLoginResponse) => {
        setLoading(false);
        if (resp && resp.registered) {
          reset();
          afterRegister();
        }
      })
      .catch((err: ErrorResponseHandler) => {
        dispatch(setErrorSnackMessage(err));
        setLoading(false);
        reset();
      });
  }, [afterRegister, apiKey, dispatch, loading]);

  useEffect(() => {
    if (fromModal) {
      onRegister();
    }
  }, [fromModal, onRegister]);

  const reset = () => {
    setApiKey("");
    setFromModal(false);
  };

  return (
    <Fragment>
      <Box
        sx={{
          "& .title-text": {
            marginLeft: "27px",
            fontWeight: 600,
          },
        }}
      >
        <FormTitle
          icon={<OnlineRegistrationIcon />}
          title={`API key activation of MinIO Subscription Network License`}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            flex: "2",
          }}
        >
          <Box
            sx={{
              fontSize: "16px",
              display: "flex",
              flexFlow: "column",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Use your MinIO Subscription Network API Key to register this
            cluster.
          </Box>
          <Box
            sx={{
              flex: "1",
            }}
          >
            <InputBoxWrapper
              className={classes.spacerBottom}
              classes={{
                inputLabel: classes.sizedLabel,
              }}
              id="api-key"
              name="api-key"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setApiKey(event.target.value)
              }
              label="API Key"
              value={apiKey}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                className={classes.spacerRight}
                disabled={loading}
                onClick={() => setShowApiKeyModal(true)}
              >
                Get from SUBNET
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading || apiKey.trim().length === 0}
                onClick={() => onRegister()}
              >
                Register
              </Button>
              <GetApiKeyModal
                open={showApiKeyModal}
                closeModal={() => setShowApiKeyModal(false)}
                onSet={(value) => {
                  setApiKey(value);
                  setFromModal(true);
                }}
              />
            </Box>
          </Box>
        </Box>
        <RegisterHelpBox />
      </Box>
    </Fragment>
  );
};

export default withStyles(styles)(ApiKeyRegister);

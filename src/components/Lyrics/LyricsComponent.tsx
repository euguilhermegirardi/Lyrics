import React, { FunctionComponent } from "react";

interface Props {
  lyrics: string;
  isLoading: boolean;
  error: Error | string;
}

const LyricsComponent: FunctionComponent<Props> = props => {
  const { lyrics, isLoading, error } = props;
  if (error) {
    console.log("error: ", error);
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>{"Loading.."}</div>;
  }

  return <div>{lyrics}</div>;
};

export default LyricsComponent;

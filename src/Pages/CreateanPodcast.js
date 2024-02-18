import React from "react";
import Header from "../Components/Common/Header/index";
import CreatePodcastForm from "../Components/StartAPodcast/createpodcast";

function CreateAPodcastPage() {
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>Create A Podcast</h1>
        <CreatePodcastForm />
      </div>
    </div>
  );
}

export default CreateAPodcastPage;

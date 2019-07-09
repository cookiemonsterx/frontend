export default function Launch({ launchId }) {
  return (
    <Query query={query2} variables={{ artistId }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <p>ERROR: {error.message}</p>;

        return (
          <Fragment>
            <Header image={data.launch.mission.missionPatch}>
              {data.album.title}
              {data.album.genre}
            </Header>
            <LaunchDetail {...data.launch} />
            <ActionButton {...data.launch} />
          </Fragment>
        );
      }}
    </Query>
  );
}
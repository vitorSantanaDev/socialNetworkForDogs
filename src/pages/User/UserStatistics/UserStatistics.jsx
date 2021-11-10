import React, { useEffect } from "react";
import Head from "../../../Components/Helper/Head/Head";
import useFetch from "../../../hooks/useFetch";
import { GET_STATICS } from "../../../api/api";
import Loading from "../../../Components/Helper/Loading/Loading";
import Error from "../../../Components/Helper/Error/Error";
import UserStatsGraphs from "../UserStatsGraphs/UserStatsGraphs";

const UserStatistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATICS();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data}/>
      </>
    );
  else return null;
};

export default UserStatistics;

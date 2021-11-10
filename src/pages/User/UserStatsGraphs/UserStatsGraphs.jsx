import React, { useEffect, useState } from "react";
import { SectionGraphs } from "./styled";
import { VictoryPie, VictoryBar, VictoryChart } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, number) => (acc += number), 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <>
      <SectionGraphs className="leftAnimation">
        <div className="graphItem total">
          <p>Acessos: {total}</p>
        </div>
        <div className="graphItem">
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: "#FFF",
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
          />
        </div>
        <div className="graphItem">
          <VictoryChart>
            <VictoryBar data={graph} alignment="start"/>
          </VictoryChart>
        </div>
      </SectionGraphs>
    </>
  );
};

export default UserStatsGraphs;

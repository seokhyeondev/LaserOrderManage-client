import { useState } from "react";
import * as S from "./Analyze.style";
import StockAnalyzeFilter from "@/src/components/commons/filters/stock/StockAnalyze.index";
import dynamic from "next/dynamic";

const MyResponsivePie = dynamic(
  () => import("@nivo/line").then((module) => module.ResponsiveLine),
  {
    ssr: false,
  },
);

export default function StockAnalyze() {
  const [currentOrderId, setCurrentOrderId] = useState<
    string | null | undefined
  >(undefined);

  const data = [
    {
      id: "japan",
      color: "hsl(209, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 272,
        },
        {
          x: "helicopter",
          y: 281,
        },
        {
          x: "boat",
          y: 235,
        },
        {
          x: "train",
          y: 132,
        },
        {
          x: "subway",
          y: 42,
        },
        {
          x: "bus",
          y: 270,
        },
        {
          x: "car",
          y: 56,
        },
        {
          x: "moto",
          y: 148,
        },
        {
          x: "bicycle",
          y: 195,
        },
        {
          x: "horse",
          y: 61,
        },
        {
          x: "skateboard",
          y: 248,
        },
        {
          x: "others",
          y: 49,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(343, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 281,
        },
        {
          x: "helicopter",
          y: 120,
        },
        {
          x: "boat",
          y: 169,
        },
        {
          x: "train",
          y: 261,
        },
        {
          x: "subway",
          y: 285,
        },
        {
          x: "bus",
          y: 257,
        },
        {
          x: "car",
          y: 293,
        },
        {
          x: "moto",
          y: 11,
        },
        {
          x: "bicycle",
          y: 195,
        },
        {
          x: "horse",
          y: 26,
        },
        {
          x: "skateboard",
          y: 17,
        },
        {
          x: "others",
          y: 274,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(215, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 203,
        },
        {
          x: "helicopter",
          y: 83,
        },
        {
          x: "boat",
          y: 13,
        },
        {
          x: "train",
          y: 146,
        },
        {
          x: "subway",
          y: 21,
        },
        {
          x: "bus",
          y: 22,
        },
        {
          x: "car",
          y: 284,
        },
        {
          x: "moto",
          y: 258,
        },
        {
          x: "bicycle",
          y: 266,
        },
        {
          x: "horse",
          y: 90,
        },
        {
          x: "skateboard",
          y: 7,
        },
        {
          x: "others",
          y: 233,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(294, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 149,
        },
        {
          x: "helicopter",
          y: 276,
        },
        {
          x: "boat",
          y: 101,
        },
        {
          x: "train",
          y: 290,
        },
        {
          x: "subway",
          y: 56,
        },
        {
          x: "bus",
          y: 83,
        },
        {
          x: "car",
          y: 43,
        },
        {
          x: "moto",
          y: 89,
        },
        {
          x: "bicycle",
          y: 288,
        },
        {
          x: "horse",
          y: 208,
        },
        {
          x: "skateboard",
          y: 104,
        },
        {
          x: "others",
          y: 260,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(282, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 22,
        },
        {
          x: "helicopter",
          y: 299,
        },
        {
          x: "boat",
          y: 274,
        },
        {
          x: "train",
          y: 27,
        },
        {
          x: "subway",
          y: 89,
        },
        {
          x: "bus",
          y: 4,
        },
        {
          x: "car",
          y: 278,
        },
        {
          x: "moto",
          y: 244,
        },
        {
          x: "bicycle",
          y: 43,
        },
        {
          x: "horse",
          y: 142,
        },
        {
          x: "skateboard",
          y: 192,
        },
        {
          x: "others",
          y: 30,
        },
      ],
    },
  ];

  return (
    <>
      <S.BodyWrapper>
        <StockAnalyzeFilter />
        <S.BodyHeader>
          <MyResponsivePie
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </S.BodyHeader>
      </S.BodyWrapper>
    </>
  );
}

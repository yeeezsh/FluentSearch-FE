import React from 'react';
import { Stage, Layer, Rect, Group, Text } from 'react-konva';
import { CanvasPropsType } from './types';
import { v4 as uuid } from 'uuid';

const Canvas: React.FC<CanvasPropsType> = (props) => {
  const { width: canvasWidth, height: canvasHeight, played, data } = props;
  const layerItems: JSX.Element[] = [];

  const aspectRatio = canvasHeight / 1880;

  data
    .slice()
    .sort((a, b) => a.nFps - b.nFps)
    .forEach((annotation) => {
      const { classes, nFps } = annotation;
      let x = 0;
      let y = 0;
      let width = 0;
      let height = 0;

      for (const element of classes) {
        console.log(element);
        const { bbox, cat } = element;
        const { xmin, ymin, xmax, ymax } = bbox;
        if (played * 100 >= nFps && played * 100 <= nFps + 1) {
          x = xmin;
          y = ymin;
          width = xmax - xmin;
          height = ymax - ymin;

          const rect = (
            <Rect
              x={0}
              y={0}
              width={width * 0.5}
              height={height * 0.5}
              stroke={'red'}
              strokeWidth={1}
            />
          );

          layerItems.push(
            <Group x={x * 0.5} y={y * 0.5} key={uuid()} name={cat}>
              {rect}
            </Group>,
          );
        }
      }
    });

  return (
    <Stage
      style={{ position: 'absolute', top: 0, left: 0 }}
      width={canvasWidth}
      height={canvasHeight}>
      <Layer>{layerItems}</Layer>
    </Stage>
  );
};

export default Canvas;

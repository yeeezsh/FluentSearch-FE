import React from 'react';
import { Stage, Layer, Rect, Group, Text, Tag, Label } from 'react-konva';
import { CanvasPropsType } from './types';
import { v4 as uuid } from 'uuid';

const Canvas: React.FC<CanvasPropsType> = (props) => {
  const {
    width: canvasWidth,
    height: canvasHeight,
    played,
    data,
    videoHeight,
    videoWidth,
  } = props;
  const layerItems: JSX.Element[] = [];

  const aspectRatioWidth = canvasWidth / videoWidth;
  const aspectRatioHeight = canvasHeight / videoHeight;

  data
    .slice()
    .sort((a, b) => a.nFps - b.nFps)
    .forEach((annotation) => {
      const { classes, nFps } = annotation;

      let width = 0;
      let height = 0;

      for (const element of classes) {
        const { bbox, cat } = element;
        let { xmin, ymin, xmax, ymax } = bbox;
        if (played * 100 >= nFps + 7 && played * 100 <= nFps + 14) {
          xmin = xmin * aspectRatioWidth;
          ymin = ymin * aspectRatioHeight;
          xmax = xmax * aspectRatioWidth;
          ymax = ymax * aspectRatioHeight;

          width = xmax - xmin;
          height = ymax - ymin;

          const rect = (
            <Rect
              x={xmin}
              y={ymin}
              width={width}
              height={height}
              stroke={'#0BB5C2'}
              strokeWidth={5}
            />
          );

          const labelText = (
            <Label x={xmin} y={ymin} offsetX={-2}>
              <Tag fill="#0BB5C2" />
              <Text
                fontFamily="Arial"
                text={cat}
                fontSize={16}
                lineHeight={2}
                fill="#000"
              />
            </Label>
          );

          layerItems.push(
            <Group x={xmin} y={ymin} key={uuid()} name={cat}>
              {labelText}
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
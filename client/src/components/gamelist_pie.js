import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export default () => {
    return (
        <div>
            <ResponsivePie
                data={[
                    {
                    "id": "lisp",
                    "label": "lisp",
                    "value": 398,
                    "color": "hsl(63, 70%, 50%)"
                    },
                    {
                    "id": "ruby",
                    "label": "ruby",
                    "value": 206,
                    "color": "hsl(358, 70%, 50%)"
                    },
                    {
                    "id": "java",
                    "label": "java",
                    "value": 372,
                    "color": "hsl(260, 70%, 50%)"
                    },
                    {
                    "id": "python",
                    "label": "python",
                    "value": 162,
                    "color": "hsl(172, 70%, 50%)"
                    },
                    {
                    "id": "go",
                    "label": "go",
                    "value": 250,
                    "color": "hsl(289, 70%, 50%)"
                    },
                    {
                    "id": "php",
                    "label": "php",
                    "value": 557,
                    "color": "hsl(14, 70%, 50%)"
                    },
                    {
                    "id": "css",
                    "label": "css",
                    "value": 337,
                    "color": "hsl(1, 70%, 50%)"
                    }
                ]}
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 80,
                    "left": 80
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="d320c"
                colorBy="id"
                borderColor="inherit:darker(0.6)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "anchor": "bottom",
                        "direction": "row",
                        "translateY": 56,
                        "itemWidth": 100,
                        "itemHeight": 14,
                        "symbolSize": 14,
                        "symbolShape": "circle"
                    }
                ]}
            />
        </div>
    );
};
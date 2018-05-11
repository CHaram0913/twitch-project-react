import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ResponsivePie } from '@nivo/pie';

class GameStat extends Component {
    render() {
        const { gamelist } = this.props;

        if (!gamelist) {
            return <div>Fetching gamelist...</div>;
        }
        return (
            <div>
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
                
                Game Stat

                Lorem ipsum dolor sit amet, per dapibus curabitur ut mauris, est libero aliquam mollis in, dolor tristique, sodales consectetuer anim donec rutrum. Taciti dictum duis proin sollicitudin, non aenean aliquam dolor. Nec vestibulum pede metus tincidunt nulla, pellentesque vivamus sed sed pellentesque placerat. Nec duis mattis magnis pellentesque, aliquet velit viverra donec, fermentum ligula amet, ut vulputate libero. Suspendisse porttitor.

Dis mi risus aliquam aliquam wisi, mi tristique urna, erat id amet donec ac velit et, egestas vitae odio lacus aenean. Ut integer vel consectetuer qui donec vivamus, magnis consequat non molestie blandit nullam quisque, nunc auctor sit volutpat, per odio. Tincidunt massa, urna justo nisl cras mauris ac eget. Luctus purus lacus nulla duis, cursus leo velit natus integer, et pellentesque augue interdum scelerisque quis. Vivamus cras sit blandit sit non id, enim quisque vestibulum a, libero nec non amet, turpis ultricies leo ducimus malesuada gravida, quisque purus metus ligula arcu. Turpis mauris. Pretium eros nec, porttitor et et gravida adipiscing, sed dui ac. Facilisi lacus, ut rutrum. Id ante quis sollicitudin in mauris, ut mauris tellus ligula leo, libero augue velit, sit sodales. Eget lacinia erat, praesent pellentesque vel tellus. Tortor sapien fusce suscipit, in suscipit per integer magna distinctio mauris, aliquam tincidunt, luctus necessitatibus vel lorem. Justo velit consectetur, vestibulum sed cursus condimentum, integer ullamcorper accumsan velit at.

Id torquent ut, sed aliquam est pede quis rutrum lacinia, dui elit, ridiculus leo id massa ullamcorper vel, nulla non luctus. Etiam erat praesent faucibus dui cum. Venenatis eleifend nunc est in tellus diam, donec dignissim tincidunt eget et. Nunc nec vel sunt. Cursus eget sit enim curabitur blandit euismod. Accumsan vel taciti arcu pede, lobortis molestie ante, cubilia nulla voluptate pellentesque elit mollis, ligula arcu cras quam montes. Dictum luctus est mattis sed rutrum hendrerit, justo nunc ultrices aptent, sed quisque pariatur mattis pede enim, ut et congue praesent. Suspendisse fermentum, purus aliquam elit condimentum egestas, nunc nulla nam integer duis, tristique orci id ut duis, magna nibh nunc mi. Ac commodo sit nisl tellus, platea at, et iaculis tortor libero mollis vestibulum. Fusce molestie commodo iaculis id, mollis imperdiet morbi nonummy, facilisi lorem, a porttitor tincidunt sed mi a vitae, parturient duis neque et mauris vel aliquam. Hac orci venenatis turpis purus, bibendum suscipit leo luctus, nullam pulvinar dui eu blandit pellentesque, adipiscing cursus.

A dis turpis praesent purus dolor a, pede a justo vel molestie a, leo vel vel urna ante. Dolores sem tempus eu curabitur wisi suspendisse, wisi hendrerit justo. Aliquam ipsum libero qui hendrerit, arcu sollicitudin feugiat lectus tellus, sed vel urna. Dis vulputate posuere ac maecenas, nibh turpis. Lectus morbi, vitae scelerisque, penatibus wisi maecenas nec, vitae nonummy elit donec ut, sed amet ligula placerat fusce. Proin elit. A fermentum, morbi integer odio nam mauris, quis eget wisi qui non massa interdum, etiam ultrices, facilisis ut justo. Eget augue duis sed in sed consectetuer, suspendisse urna pretium vulputate sem, sit quam lacus torquent risus a. Et consectetuer sapien lectus, cubilia arcu vestibulum ut nisl. Gravida enim proin nibh pretium, nunc turpis purus suspendisse. Mollis libero rutrum tristique, vestibulum leo turpis cum nulla non, tempor maecenas nec quis, nullam in scelerisque, dictum quis sodales vel mauris sit praesentium.

+                 Lorem ipsum dolor sit amet, per dapibus curabitur ut mauris, est libero aliquam mollis in, dolor tristique, sodales consectetuer anim donec rutrum. Taciti dictum duis proin sollicitudin, non aenean aliquam dolor. Nec vestibulum pede metus tincidunt nulla, pellentesque vivamus sed sed pellentesque placerat. Nec duis mattis magnis pellentesque, aliquet velit viverra donec, fermentum ligula amet, ut vulputate libero. Suspendisse porttitor.

Dis mi risus aliquam aliquam wisi, mi tristique urna, erat id amet donec ac velit et, egestas vitae odio lacus aenean. Ut integer vel consectetuer qui donec vivamus, magnis consequat non molestie blandit nullam quisque, nunc auctor sit volutpat, per odio. Tincidunt massa, urna justo nisl cras mauris ac eget. Luctus purus lacus nulla duis, cursus leo velit natus integer, et pellentesque augue interdum scelerisque quis. Vivamus cras sit blandit sit non id, enim quisque vestibulum a, libero nec non amet, turpis ultricies leo ducimus malesuada gravida, quisque purus metus ligula arcu. Turpis mauris. Pretium eros nec, porttitor et et gravida adipiscing, sed dui ac. Facilisi lacus, ut rutrum. Id ante quis sollicitudin in mauris, ut mauris tellus ligula leo, libero augue velit, sit sodales. Eget lacinia erat, praesent pellentesque vel tellus. Tortor sapien fusce suscipit, in suscipit per integer magna distinctio mauris, aliquam tincidunt, luctus necessitatibus vel lorem. Justo velit consectetur, vestibulum sed cursus condimentum, integer ullamcorper accumsan velit at.

Id torquent ut, sed aliquam est pede quis rutrum lacinia, dui elit, ridiculus leo id massa ullamcorper vel, nulla non luctus. Etiam erat praesent faucibus dui cum. Venenatis eleifend nunc est in tellus diam, donec dignissim tincidunt eget et. Nunc nec vel sunt. Cursus eget sit enim curabitur blandit euismod. Accumsan vel taciti arcu pede, lobortis molestie ante, cubilia nulla voluptate pellentesque elit mollis, ligula arcu cras quam montes. Dictum luctus est mattis sed rutrum hendrerit, justo nunc ultrices aptent, sed quisque pariatur mattis pede enim, ut et congue praesent. Suspendisse fermentum, purus aliquam elit condimentum egestas, nunc nulla nam integer duis, tristique orci id ut duis, magna nibh nunc mi. Ac commodo sit nisl tellus, platea at, et iaculis tortor libero mollis vestibulum. Fusce molestie commodo iaculis id, mollis imperdiet morbi nonummy, facilisi lorem, a porttitor tincidunt sed mi a vitae, parturient duis neque et mauris vel aliquam. Hac orci venenatis turpis purus, bibendum suscipit leo luctus, nullam pulvinar dui eu blandit pellentesque, adipiscing cursus.

A dis turpis praesent purus dolor a, pede a justo vel molestie a, leo vel vel urna ante. Dolores sem tempus eu curabitur wisi suspendisse, wisi hendrerit justo. Aliquam ipsum libero qui hendrerit, arcu sollicitudin feugiat lectus tellus, sed vel urna. Dis vulputate posuere ac maecenas, nibh turpis. Lectus morbi, vitae scelerisque, penatibus wisi maecenas nec, vitae nonummy elit donec ut, sed amet ligula placerat fusce. Proin elit. A fermentum, morbi integer odio nam mauris, quis eget wisi qui non massa interdum, etiam ultrices, facilisis ut justo. Eget augue duis sed in sed consectetuer, suspendisse urna pretium vulputate sem, sit quam lacus torquent risus a. Et consectetuer sapien lectus, cubilia arcu vestibulum ut nisl. Gravida enim proin nibh pretium, nunc turpis purus suspendisse. Mollis libero rutrum tristique, vestibulum leo turpis cum nulla non, tempor maecenas nec quis, nullam in scelerisque, dictum quis sodales vel mauris sit praesentium.

+
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { 
        gamelist : state.gamelist
    }
}

export default connect (mapStateToProps) (GameStat);
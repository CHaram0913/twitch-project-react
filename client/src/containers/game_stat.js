import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameStat } from './../actions/index';

class GameStat extends Component {
    componentDidMount() {
        this.props.fetchGameStat(this.props.streamerName, this.props.mode);
    }

    // componentDidUpdate() {
    //     this.props.fetchGameStat(this.props.streamerName, 'week');
    // }

    render() {
        console.log(`${this.props.streamerName}, ${this.props.mode}`);
        return (
            <div>
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

        streamerName : state.streamerName,
        mode : state.mode,
        gamelist : state.gamelist
    }
}

export default connect (mapStateToProps, { fetchGameStat }) (GameStat);
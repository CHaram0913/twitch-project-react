const each_stream_aggregate = (start_time) => {
    return [
        {
            $match : { 'start_time' : { $in : start_time } }
        },
        {
            $group : {
                _id : { game_name : '$game_name', stream_title : '$stream_title'},
                count : { $sum : 1 },
                game_art : { $first : '$game_art'},
                at_time : { $push : { log_time : '$log_time', viewer_count : '$viewer_count', follower_count : '$follower_count' } },
                start_game_time : { $first : '$log_time' }
            }
        },
        {
            $sort : { start_game_time : 1 }
        },
        // {
        //     $group : {
        //         _id : '$_id.game_name',
        //         title: { $first : '$_id.stream_title' },
        //         count : { $sum : 1 },
        //         game_art : { $first : '$game_art'},
        //     }
        // }
        // {
        //     $group : {
        //         _id : '$game_name',
        //         count : { $sum : 1 },
        //         at_time : { $push : { log_time : '$log_time', viewer_count : '$viewer_count', follower_count : '$follower_count' } },
        //         game_art : { $first : '$game_art'},
        //         start_game_time : { $first : '$log_time' }
        //     }
        // }
        // {
        //     $sort : { start_game_time : 1 }
        // },
        {
            $project : {
                count : '$count',
                at_time : '$at_time',
                game_art : '$game_art'
            }
        }
    ];
}

module.exports = { each_stream_aggregate };
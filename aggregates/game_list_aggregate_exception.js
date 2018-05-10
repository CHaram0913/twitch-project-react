const game_list_aggregate_exception = (start_time) => {
    return [
        {
            $match : { 'start_time' : { $in : start_time } }
        },
        {
            $group : {
                _id : '$game_name',
                count : { $sum : 1 },
                average_view : { $avg : '$viewer_count' },
                max_view : { $max : '$viewer_count'},
                game_art : { $first : '$game_art'}
            }
        }, 
        {
            $project : {
                game_name : '$game_name',
                count : '$count',
                average_view : { $trunc : '$average_view' },
                max_view : '$max_view',
                game_art : '$game_art'
            }
        },
        {
            $sort : { average_view : -1 }
        }
    ];
};

module.exports = { game_list_aggregate_exception };
const start_end_time_aggregate =
[
    {
        $group : {
            _id : '$start_time',
            end_time: { $last : '$log_time' }
        }
    },
    {
        $project : {
            start_time : '$start_time',
            end_time : '$end_time'
        }
    },
    {
        $sort : { _id : 1 }
    }
];

module.exports = { start_end_time_aggregate }
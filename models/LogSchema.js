let mongoose = require('mongoose');

let LogSchema = mongoose.Schema({
    log_time: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    viewer_count: {
        type: Number,
        required: true
    },
    follower_count: {
        type: Number,
        required: true
    },
    stream_title: {
        type: String,
        required: true
    },
    start_time: {
        type: Number,
        required: true
    },
    game_id: {
        type: String,
        required: true
    },
    game_name: {
        type: String,
        required: true
    },
    game_art: {
        type: String,
        required: true
    }
});

module.exports = { LogSchema };
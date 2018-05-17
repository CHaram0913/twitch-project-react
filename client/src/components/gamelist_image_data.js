export default function (game_data) {

    function total_time (count) {
        let hours = Math.floor(count * 10 / 60);
        let minutes = count * 10 % 60;

        if (hours === 0) {
            return `${minutes}minutes`;
        } else if (minutes === 0) {
            return `${hours}hours`;
        } else {
            return `${hours}hours ${minutes}minutes`;
        }
    }

    let game_img_data = [];

    for (let i = 0; i < game_data.length; i++) {
        let game_art_src = game_data[i].game_art.replace(/{width}|{height}/g, function(match){
            return (match==='{width}') ? 830 : 1080;
        });

        let game_img = {
            img: game_art_src,
            title: game_data[i]._id,
            duration: total_time(game_data[i].count),
            viewer: game_data[i].average_view,
            author: 'Twitch',
            cols: 1
        }
        game_img_data.push(game_img);
    }
    return game_img_data;
};
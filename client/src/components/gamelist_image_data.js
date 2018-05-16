export default function (game_data) {
    let game_img_data = [];
    for (let i = 0; i < game_data.length; i++) {
        let game_art_src = game_data[i].game_art.replace(/{width}|{height}/g, function(match){
            return (match==='{width}') ? 130 : 170;
        })
        let game_img = {
            img: game_art_src,
            title: game_data[i]._id,
            author: 'Twitch',
            cols: 1
        }
        game_img_data.push(game_img);
    }
    return game_img_data;
};
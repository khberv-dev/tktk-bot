const axios = require('axios')

function getVideoUrl(id, response) {
    const url = "https://masgimenz.my.id/tiktok?url=" + id

    axios.get(url)
        .then(res => {
            let isOk = res.data.status_code.toString() === "0"

            if (isOk) {
                const details = res.data.aweme_details[0]
                const video = details.video
                const urls = video.play_addr.url_list

                response(urls[0])
            } else {
                response("e")
            }
        })
}


module.exports = {getVideoUrl}
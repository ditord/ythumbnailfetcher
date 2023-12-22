document.getElementById('youtubeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var youtubeLink = document.getElementById('youtubeLink').value;
    var videoId = extractYoutubeVideoId(youtubeLink);

    document.getElementById('videoIdOutput').innerText = 'Video ID: ' + videoId;
});

function extractYoutubeVideoId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'Invalid URL';
    }
}

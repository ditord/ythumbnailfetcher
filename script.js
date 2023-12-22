document.getElementById('youtubeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var youtubeLink = document.getElementById('youtubeLink').value;
    var videoId = extractYoutubeVideoId(youtubeLink);
    var imageUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'; // Updated to use maxresdefault.jpg

    document.getElementById('videoIdOutput').innerText = 'Video ID: ' + videoId;
    document.getElementById('imageUrlOutput').innerText = 'Image URL: ' + imageUrl;
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

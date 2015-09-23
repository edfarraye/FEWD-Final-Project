(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    var sampleVideo = {
      items: [
         {
          kind: "https://2vyk4sqq0.igsonar.com/hphotos-ak-xaf1/t51.2885-15/s306x306/e15/11093074_423356687833105_1178379884_n.jpg",
          videoId: "GuVMJmC0V98",
          height: 306
        },
         {
          kind: "https://2vyk4sqq0.igsonar.com/hphotos-ak-xaf1/t51.2885-15/s306x306/e15/11093074_423356687833105_1178379884_n.jpg",
          videoId: "V-eIGWXpmX0",
          height: 306
        }
      ]
      
    };

    function formatResults(dataArray) {
      var resultsHTML = "";
      for (var i=0; i<dataArray.length; i++) {

        resultsHTML+= imageTemplate(dataArray[i]);
      };
      return resultsHTML;

      function imageTemplate(sampleImage) {
        var result = '<div class="col-sm-6 col-md-4">';
        result += '<div class="thumbnail">';
        result += '<img src="';
        result += sampleImage.images.standard_resolution.url;
        result += '">"';
        result += "</div>";
        result += "</div>";
        return result;
      };

    };

    function formatVideoResults(dataArray) {
      var resultsHTML = "";
      for (var i=0; i<dataArray.items.length; i++) {
        resultsHTML+= videoTemplate(dataArray.items[i]);
        console.log(resultsHTML);
      };
      return resultsHTML;

      function videoTemplate(sampleVideo) {
        var result = '<div class="col-sm-6 col-md-4">';
          result += '<div class="thumbnail">';
          result += '<iframe src="https://www.youtube.com/embed/';
          result += sampleVideo.videoId;
          result += '">"';
          result += "</div>";
          result += "</div>";
          return result;
      };

    };

    var results = formatResults(resultsArray);
    $("#searchResults").html(results);
    
    var videoResults = formatVideoResults(sampleVideo);
    $("#searchResultsVideo").html(videoResults);
    
  };

})();

(function instaSearchModel() {
  instasearch.model = function(tag) {

    function handleResultsInstagram(dataArray) {
      // hook it up to our view function
      instasearch.view(dataArray);
    }

    function fetchDataInstagram(tag) {
      // create a url variable, and assign it to the result of instagramEndpoint()
      var url = instagramEndpoint();
      // add the AJAX get method here - $.get()
      $.get(url, function(jsonp) {
          handleResultsInstagram(jsonp.data);
      },"jsonp");
      // a function to get our API endpoint
      function instagramEndpoint() {
        var endpoint = "https://api.instagram.com/v1/tags/";
        endpoint += tag;
        endpoint += "/media/recent?client_id=b6273526183447349d1579975819bea5";
        return endpoint;
      }
    }

    // add your test search here
    fetchDataInstagram(tag);
  };

})();
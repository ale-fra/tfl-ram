$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=51RM9ePVGE1YSEF7epqRYJlBM4AraFGf",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});

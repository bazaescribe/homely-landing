function initialize() {
    var input = document.getElementById('searchTextField');
    var options = {
        types: ['(regions)'],
        componentRestrictions: {country: 'mx'}
    };

    autocomplete = new google.maps.places.Autocomplete(input, options);
}
google.maps.event.addDomListener(window, 'load', initialize);
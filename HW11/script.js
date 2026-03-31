$(document).ready(function () {

    // Custom jQuery plugin
    $.fn.highlightCard = function () {
        return this.each(function () {
            $(this)
                .css({
                    border: "3px solid #8d99ae",
                    cursor: "pointer"
                })
                .hover(
                    function () {
                        $(this).animate({
                            opacity: 0.85
                        }, 200);
                    },
                    function () {
                        $(this).animate({
                            opacity: 1
                        }, 200);
                    }
                );
        });
    };

    // AJAX request for local JSON file
    $.getJSON("data/movies.json", function (movies) {

        $.each(movies, function (index, movie) {

            let card = `
                <div class="movieCard">
                    <h2>${movie.title}</h2>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                </div>
            `;

            $("#movieContainer").append(card);
        });

        // Apply the custom plugin to every card
        $(".movieCard").highlightCard();
    });
});
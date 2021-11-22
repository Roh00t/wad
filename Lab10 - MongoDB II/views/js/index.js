$(function() {
    $.ajax({
        url: "/events",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function(event) {
                    $(".events").append(`
                        <article>
                        <h2>${event.name}</h2>
                        <div>
                            ${event.description}<br>
                            Start: ${event.start.date} ${event.start.time}<br>
                            End: ${event.end.date} ${event.end.time}<br>
                        </div>
                        </article>
                    `);
                })
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )

    $(".addEvent").click(function () {
        $(".addNewEvent").show();
    })
})
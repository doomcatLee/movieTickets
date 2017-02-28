// Back-End

function Ticket(name, time, age) {
    this.name = name;
    this.time = time;
    this.age = age;
}

Ticket.prototype.calculateCost = function(cost) {
    debugger;
    if (this.time === ("Afternoon" || "Morning")) {
        cost -= 10;
        return cost;
    } else if (this.age > 50) {
        cost -= 10;
        return cost;
    } else if (this.name === "Shawshank Redemption") {
        cost -= 10;
        return cost;
    } else {
        return cost;
    }
}
//jQuery BS
$(function() {
    $("#newMovie").submit(function() {
        event.preventDefault();
        var movie = $("#movie").val();
        var time = $("#time").val();
        var age = $("#age").val();
        // console.log(movie, time, age);

        var customer = new Ticket(movie, time, age);
        var cost = customer.calculateCost(30);

        $(".movieName").text(movie);
        $(".movieTime").text(time);
        $(".cost").text("$" + cost);
        $("#show-ticket").show();

    }); //submit
}); //jQuery

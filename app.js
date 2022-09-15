$(() => {
    $('body').append($('<h1>').text("Lab"));

    const changeColor = (event) => {
        $(event.target).addClass("pink");
    };
  
    $('#inputButton').on("click", () => {
        const input = $("#inputBox").val()
        console.log(input)
    })

    for (let i = 0; i < 1000; i++) {
      let $square = $("<div>").addClass("square");
      $("body").append($square);
    }

    $("div").on("mouseover", changeColor);
});
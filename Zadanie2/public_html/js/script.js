
$(document).ready(function() {

    var i = 0;

    function Display(i) {
        $.ajax({
            url: 'questions.json',
            cache: false,
            data: {cmd: 'getarticlescount'},
            dataType: 'json',
            success: $.getJSON("questions.json", function(data) {

                var n = data.Questions.length;



                $('#question').html(data.Questions[i].Question);
                var l = data.Questions[i].Answers.length;
                $('#checkboxes').html(
                        '<div id="check" class="col-lg-10"></div>');
                for (var j = 0; j < l; j++) {
                    $('#check').append(
                            '<div class="checkbox">' +
                            '<label>' +
                            '<input class="radio' + j + '" type="checkbox" name="checkbox" id="optionsRadios" value="' + j + '" />' +
                            '</label>' +
                            '</div>');
                    $(".radio").val(data.Questions[i].Answers[j].id);
                    $(".radio" + j).after(data.Questions[i].Answers[j].text);


                }

                $('#number').html(data.Questions[i].id + '/' + n);

                $('#prev').removeClass('hide');
                $('#next').removeClass('hide');

                if (i == 0) {
                    $('#prev').addClass('hide');
                }
                if (i == n - 1) {
                    $('#next').addClass('hide');
                }



            })

        });
    }

    Display(i);

    $('#next').click(function() {
        i++;
        event.preventDefault();
        Display(i);
    })

    $('#prev').click(function() {
        i--;
        event.preventDefault();
        Display(i);
    })


});


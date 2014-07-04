
$(document).ready(function() {



    $.ajax({
        url: 'questions.json',
        cache: false,
        data: {cmd: 'getarticlescount'},
        dataType: 'json',
        success: $.getJSON("questions.json", function(data) {
            var Questions = data.Questions[0].Answers[0].id;

            var answers = new Array();

            var n = data.Questions.length;

            answers['name'] = 'Dupa';


            for (var i = 0; i < 1; i++) {
                $('#question').html(data.Questions[i].Question);
                var l = data.Questions[i].Answers.length
                for (var j = 0; j < l; j++) {
                    $('#radios').append(
                            '<div class="radio">' +
                            '<label>' +
                            '<input class="radio' + j + '" type="radio" name="radios" id="optionsRadios" />' +
                            '</label>' +
                            '</div>');
                    $(".radio").val(data.Questions[i].Answers[j].id);
                    $(".radio" + j).after(data.Questions[i].Answers[j].text);
                }
            }


        })

    });

});


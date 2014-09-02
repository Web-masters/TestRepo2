
$(document).ready(function() {

    var i = 0;
    var n;
    var l;
    var Table = new Array(n);
    Table[i] = new Array(l);
    function insertAnswers(i) {
        for (var x = 0; x < l; x++) {
            if ($('input[name=checkbox' + x + ']').filter(':checked').val()) {
                //alert($('input[name=checkbox' + x + ']').filter(':checked').val());
                Table[i][x] = ($('input[name=checkbox' + x + ']').filter(':checked').val());
            } else {
                Table[i][x] = 0;
            }

        }
    }
    function Display(i, data) {

        n = data.Questions.length;
        $('#question').html(data.Questions[i].Question);
        l = data.Questions[i].Answers.length;
        $('#checkboxes').html(
                '<div id="checked" class="col-lg-10"></div>');
        for (var j = 0; j < l; j++) {
            $('#checked').append(
                    '<div class="checkbox">' +
                    '<label>' +
                    '<input class="radio' + j + '" type="checkbox" name="checkbox' + j + '" id="optionsCheck" value="' + data.Questions[i].Answers[j].id + '" />' +
                    data.Questions[i].Answers[j].text +
                    '</label>' +
                    '</div>');
            if (Table[i][j]) {
                $('input[name=checkbox' + j + ']').attr('checked', 'checked');
            }
        }

        $('#number').html((i + 1) + '/' + n);

        $('#prev').removeClass('hide');
        $('#next').removeClass('hide');
        $('#number').removeClass('prev_active');
        $('#check').addClass('hide');

        if (i == 0) {
            $('#prev').addClass('hide');
            $('#number').addClass('prev_active');
        }
        if (i == n - 1) {
            $('#next').addClass('hide');
            $('#check').removeClass('hide');
        }

    }
    $.ajax({
        success: $.getJSON("questions.json", function(data) {

            Display(i, data);



            $('#next').click(function() {
                $('#answers').html('');
                insertAnswers(i);
                i++;
                if (!Table[i]) {
                    Table[i] = new Array(l);
                }
                Display(i, data);
                event.preventDefault();
            })

            $('#prev').click(function() {
                $('#answers').html('');
                insertAnswers(i);
                i--;
                Display(i, data);
                event.preventDefault();
            })
            $('#check').click(function() {
                $('#answers').html('');
                insertAnswers(i);
                for (x = 0; x < data.Questions.length; x++) {
                    $('#answers').append('<p id=' + data.Questions[x].id + '>' + data.Questions[x].id + ' : </p>');
                    for (y = 0; y < data.Questions[x].Answers.length; y++) {
                        if (Table[x][y] != 0) {
                            $('#' + data.Questions[x].id).append(Table[x][y] + ', ');
                        }
                    }
                }
                event.preventDefault();
            })
        })
    });

});


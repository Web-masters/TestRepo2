
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
                //alert(Table[i][x]);
            }

        }
    }


    function Display(i) {
        $.ajax({
            url: 'questions.json',
            cache: false,
            data: {cmd: 'getarticlescount'},
            dataType: 'json',
            success: $.getJSON("questions.json", function(data) {

                n = data.Questions.length;



                $('#question').html(data.Questions[i].Question);
                l = data.Questions[i].Answers.length;

                $('#checkboxes').html(
                        '<div id="check" class="col-lg-10"></div>');
                for (var j = 0; j < l; j++) {
                    $('#check').append(
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
        insertAnswers(i);
        i++;
        if (!Table[i]) {
            Table[i] = new Array(l);
        }
        Display(i);
        event.preventDefault();
    })

    $('#prev').click(function() {
        insertAnswers(i);
        i--;
        Display(i);
        event.preventDefault();
    })


});


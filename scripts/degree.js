
    function fill(number, width) {
        var numberOutput = Math.abs(number);
        var length = number.toString().length;
        var zero = "0";
        if (width <= length) {
            if (number < 0) {
                return ("-" + numberOutput.toString());
            } else {
                return numberOutput.toString();
            }
        } else {
            if (number < 0) {
                return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
            } else {
                return ((zero.repeat(width - length)) + numberOutput.toString());
            }
        }
    }

    $(document).ready(function () {
        $.getJSON("https://anonbelle.github.io/CUE-DB/json/DegreeMaster.json", function (data) {
            var chardata = '';
            var x = 0;
            $.each(data, function (key, value) {
                chardata += '<tr>';
                chardata += '<td name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/degree/Achievement_' + fill(value.id, 3) + '.png' + '>' + '</td>';
                chardata += '<td>' + value.name + '</td>';
                chardata += '<td>' + value.description + '</td>';
                chardata += '</tr>';
                x = x + 1;
            });
            $('#ChTable').append(chardata);
            $('tbody').paginathing({
                perPage: 15,
                limitPagination: 5,
            });
        });
    });

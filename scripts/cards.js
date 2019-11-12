
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
        $.getJSON("https://anonbelle.github.io/CUE-DB/json/CardMaster.json", function (data) {
            var chardata = '';
            var x = 0;
            $.each(data, function (key, value) {
                chardata += '<tr>';
                chardata += '<td width="5%" name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/charicons/Card_' + value.id + '_1_c.png' + '>' + '</td>';
                chardata += '<td width="25%">Info</td>';
                chardata += '<td>Parameters</td>';
                chardata += '<td>Voice</td>';
                chardata += '<td>Technic</td>';
                chardata += '<td>Mental</td>';
                chardata += '<td>Charisma</td>';
                chardata += '</tr>';
                chardata += '<tr>';
                chardata += '<td name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/rarity/' + value.rarity + '.png' + '>' + '</td>';
                chardata += '<td>' + value.alias + '</td>';
                chardata += '<th width="20%">InitialParameter</th>';
                chardata += '<td>' + value.initialParameter.voice + '</td>';
                chardata += '<td>' + value.initialParameter.technic + '</td>';
                chardata += '<td>' + value.initialParameter.mental + '</td>';
                chardata += '<td>' + value.initialParameter.charisma + '</td>';
                chardata += '</tr>';
                chardata += '<tr>';
                chardata += '<td width="5%" name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/' + value.attribute + '.png' + '>' + '</td>';
                chardata += '<td>' + 'ID:' + ' ' + value.id + '</td>';
                chardata += '<th width="20%">FinalParameter</th>';
                chardata += '<td>' + value.finalParameter.voice + '</td>';
                chardata += '<td>' + value.finalParameter.technic + '</td>';
                chardata += '<td>' + value.finalParameter.mental + '</td>';
                chardata += '<td>' + value.finalParameter.charisma + '</td>';
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

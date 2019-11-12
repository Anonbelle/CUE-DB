
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
        $.getJSON("https://anonbelle.github.io/CUE-DB/json/RecordingMissionMaster.json", function (data) {
            var chardata = '';
            var x = 0;
            $.each(data, function (key, value) {
                chardata += '<tr>';
                chardata += '<td>' + value.name + '</td>';
                chardata += '<td>' + value.description + '</td>';
                chardata += '<td>' + value.showingId + '</td>';
                chardata += '<td>' + value.chapterId + '</td>';
                chardata += '<td>' + value.defficultyLevel + '</td>';
                chardata += '<td width="5%" name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/itemicon/item_' + fill(value.rewardItemType, 2) + '_' + fill(value.rewardItemId, 5) + '.png' + '>' + '</td>';
                chardata += '<td>' + value.rewardItemQuantity + '</td>';
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

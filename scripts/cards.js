
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
    $.getJSON("https://anonbelle.github.io/CUE-DB/json/LessonSkillMaster.json", function (data1) {
        $("body").data("LessonSkillMaster", data1);

    });
    $.getJSON("https://anonbelle.github.io/CUE-DB/json/RecordingSkillMaster.json", function (data2) {
        $("body").data("RecordingSkillMaster", data2);

    });
    $.getJSON("https://anonbelle.github.io/CUE-DB/json/CardMaster.json", function (data) {
        var chardata = '';
        var x = 0;
        $.each(data, function (key, value) {

            LessonSkillMaster = $("body").data("LessonSkillMaster");
            RecordingSkillMaster = $("body").data("RecordingSkillMaster");

            chardata += '<tr>'
            chardata += '<th name="image">' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/' + value.attribute + '.png' + ' class="attr">' + '</th>';
            if (value.alias == 0) {
                chardata += '<th class="ft">' + 'N/A' + '</th>';
            } else {
                chardata += '<th class="ft">' + value.alias + '</th>';
            };
            chardata += '<th colspan="4"></th>';
            chardata += '</tr>';
            chardata += '<tr>';
            chardata += '<td colspan="2" rowspan="4">' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/cards/Card_' + value.id + '_1_b.png' + ' class="w3-round">' + '</td>';
            chardata += '<td width="5%" name="image"><img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/1.png' + ' class="attr">' + '</td>';
            chardata += '<td width="5%" name="image"><img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/2.png' + ' class="attr">' + '</td>';
            chardata += '<td width="5%" name="image"><img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/3.png' + ' class="attr">' + '</td>';
            chardata += '<td width="5%" name="image"><img src=' + 'https://anonbelle.github.io/CUE-DB/images/attributes/4.png' + ' class="attr">' + '</td>';
            chardata += '</tr>';
            chardata += '<tr>';
            chardata += '<td>' + value.initialParameter.voice + '</td>';
            chardata += '<td>' + value.initialParameter.technic + '</td>';
            chardata += '<td>' + value.initialParameter.mental + '</td>';
            chardata += '<td>' + value.initialParameter.charisma + '</td>';
            chardata += '</tr>';
            chardata += '<tr>';
            chardata += '<td>' + value.finalParameter.voice + '</td>';
            chardata += '<td>' + value.finalParameter.technic + '</td>';
            chardata += '<td>' + value.finalParameter.mental + '</td>';
            chardata += '<td>' + value.finalParameter.charisma + '</td>';
            chardata += '</tr>';
            chardata += '<tr>';

            for (i = 0; i < LessonSkillMaster.length; i++) {
                if (LessonSkillMaster[i].id == value.lessonSkillId) {
                    chardata += '<td width="5%" name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/lessonskills/LessonSkill_' + fill(LessonSkillMaster[i].iconId, 5) + '.png' + ' class="attr">' + '</td>';
                    chardata += '<td colspan="3">' + LessonSkillMaster[i].description + '</td>';

                    break;
                }
            }
            chardata += '</tr>';
            chardata += '<tr>';
            chardata += '<td colspan="2">' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/rarity/' + value.rarity + '.png' + '>' + '</td>';
            for (i = 1; i < value.recordingSkillIdList.length; i++) {
                for (k = 0; k < RecordingSkillMaster.length; k++) {
                    if (RecordingSkillMaster[k].id == value.recordingSkillIdList[i]) {

                        chardata += '<td width="5%" name=' + 'image' + x + '>' + '<img src=' + 'https://anonbelle.github.io/CUE-DB/images/recordingskills/RecordingSkill_' + fill(RecordingSkillMaster[k].iconId, 5) + '.png' + ' title=' + RecordingSkillMaster[k].description + ' class="attr">' + '</td>';
                        break;
                    };
                };

            };
            chardata += '</tr>';
            x = x + 1;
        });
        $('#ChTable').append(chardata);
        $('tbody').paginathing({
            perPage: 12,
            limitPagination: 5,
        });
    });
});
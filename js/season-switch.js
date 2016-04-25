/**
 * Created by DaniyarTalipov on 23/06/15.
 */

function addSeasonCSS() {
    var d = new Date();
    var month = d.getMonth() + 1;
    getSeason(month);
}

function getSeason(month) {
    season = '';

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = 'winter';
            addCSS(season);
            break;
        case 3:
        case 4:
        case 5:
            season = 'spring';
            addCSS(season);
            break;
        case 6:
        case 7:
        case 8:
            season = 'summer';
            addCSS(season);
            break;
        case 9:
        case 10:
        case 11:
            season = 'fall';
            addCSS(season);
            break;
    }

}
function addCSS(season){
    $('head').append('<link href=css/' + season+".css" + ' rel="stylesheet" />');
}
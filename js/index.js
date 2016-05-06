$(function() {
    var currInx = 1;
    var itemLen = $('.item').length;

    $('a.iconfont-left').on('click', function() {
        aClickEvent('left');

        $('.item').first().css('margin-left', '-50%');
        $('.box').append($('.item').first().css('margin-left', 0));
    });
    $('a.iconfont-right').on('click', function() {
        aClickEvent('right');

        $('.item').first().before($('.item').last().css('margin-left', '-50%'));
        $('.item').first().css('margin-left', 0);
    });

    function aClickEvent(lor) {
        if (lor == 'left') {
            currInx++;
            if (currInx > itemLen) {
                currInx = 1;
            }
        } else {
            currInx--;
            if (currInx <= 0) {
                currInx = itemLen;
            }
        }

        $('.list li').removeClass('curr');
        $('.list li').eq(currInx - 1).addClass('curr');
    }
});

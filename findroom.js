$(function(){
    $('#bmmapimg').mapster({
        fillColor: 'ff0000',
        fillOpacity: 0.3,
        mapKey: 'data-key'
    });
    $('#houseNum').change(function(){
        hnum = $('#houseNum').val()
        getMap($('#houseNum').val())
    });

    $('area').each(function(){
        var area = $(this),
            alt = area.attr('alt');
        area.mouseenter(function(e){
            hover = $('#overlay');
            hover.html(alt);
            hover.css({'left': '' + e.pageX + 'px', 'top': '' + e.pageY + 'px'});
        }).mouseleave(function(){
            $('#overlay').html('');
        });
    });
    
});

function getMap(key){
    $('#bmmapimg')
        .mapster('set', false, 'H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11, H12, H13, H14, H15, H16, H17, H18, H19, H20, H21, H22, H23, H24, H25, H26, H27, H28, H29, H30, H31, H32, H33, H34, H35, H36') 
        .mapster('set', true, key) 
}
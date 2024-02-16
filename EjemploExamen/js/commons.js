$(document).ready(function(){
    $('button.aceptarFixed').on('click',function(){
        $('.legal').slideUp("slow",function(){
            $('.modalLegal').fadeIn();
            $('.contenedor').css('background', 'rgba(0,0,0,0.75)');
            $('body').css({
                'overflow': 'hidden',
                'height': '100%'
            });
        }); //slideUp() ocultar y slideDown() mostrar
    });
    $('.aceptarModal').on('click',function(){
        $('.modalLegal').fadeOut(function(){
            $('.contenedor').css('background', 'transparent');
            $('body').css({
                'overflow': 'unset',
                'height': 'auto'
            });    
        });
    });
    var tam = 3;
    $('img.derecha').on('click',function(){
        var id = $('.slider img.activa').data('id');
        $('.slider img[data-id='+id+']').removeClass('activa');
        $('.slider img[data-id='+id+']').hide();
        if ( id < tam ){
            id++;
        }
        else {
            id = 1;
        }
        $('.slider img[data-id='+id+']').addClass('activa');
        $('.slider img[data-id='+id+']').show();

    });
    $('img.izquierda').on('click',function(){
        var id = $('.slider img.activa').data('id');
        $('.slider img[data-id='+id+']').removeClass('activa');
        $('.slider img[data-id='+id+']').hide();
        if ( id > 1 ){
            id--;
        }
        else {
            id = 3;
        }
        $('.slider img[data-id='+id+']').addClass('activa');
        $('.slider img[data-id='+id+']').show();

    });
});
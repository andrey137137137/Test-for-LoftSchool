;$(document).ready(function(){'use strict';

  var count = 0;
  var classBlock = 'course';

  $('.' + classBlock + '__label').click(function(){

    var $course = $(this).parent().parent();
    count++;

    $course
      .delay(500)
      .queue(function(){

        $course.addClass(classBlock + '-active');
        $(this).dequeue();

      })
      .delay(500)
      .queue(function(){

        $course.addClass(classBlock + '-learned');
        $(this).dequeue();

      })
      .delay(700)
      .slideUp('slow')
      .queue(function(){

        if (count === 6)
        {
          $('#courses').slideUp('slow');
          $('#learned').slideDown('slow');
        }
        else
        {
          $('.course').filter(function(){

            if ($(this).css('display') == 'none')
            {
              return false;
            }

            return true;

          }).each(function (index) {

            var $wrap = $(this).parent();
            var divider;

            console.log($(window).width());
            console.log(index);

            if ($(window).width() > 768)
            {
              divider = 3
            }
            else if ($(window).width() > 600)
            {
              divider = 2
            }
            else
            {
              return;
            }

            if (index % divider === 0)
            {
              $wrap.css('clear', 'both');
            }
            else
            {
              $wrap.css('clear', 'none');
            }

          });
        }

        $(this).dequeue();
      });
  });

});

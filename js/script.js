;$(document).ready(function(){'use strict';

  var count = 0;
  var classBlock = 'course';

  $('label').click(function(){

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

            console.log(index);

            if (index % 3 === 0)
            {
              $(this).css('clear', 'left');
            }
            else
            {
              $(this).css('clear', 'none');
            }

          });
        }

        $(this).dequeue();
      });
  });

});
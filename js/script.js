;$(document).ready(function(){'use strict';

  var restructDelay = 0,
      count = 0,
      classBlock = 'course',
      wrapClassBlock = classBlock + '_wrap';

  function restructBlocks()
  {
    if ($(window).width() < 550)
    {
      return;
    }

    console.log($(window).width());

    $('.' + wrapClassBlock + ':not(.' + wrapClassBlock + '-hidden)').each(function (index) {

      var divider = 2,
          clearValue = 'none';

      console.log(index);

      if ($(window).width() > 815)
      {
        divider = 3
      }

      if (index % divider === 0)
      {
        clearValue = 'both';
      }
      
      $(this).css('clear', clearValue);

    });
  }

  $(window).resize(function(){

    if ($(window).width() < 550)
    {
      return;
    }

    if (restructDelay)
    {
      clearTimeout(restructDelay);
    }

    restructDelay = setTimeout(restructBlocks, 500);

  });

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

        $course.parent().addClass(wrapClassBlock + '-hidden');
        $(this).dequeue();

      })
      .queue(function(){

        if (count === 6)
        {
          $('#courses').slideUp('slow');
          $('#learned').slideDown('slow');
        }
        else
        {
          restructBlocks();
        }

        // console.log($('.' + wrapClassBlock + ':not(.' + wrapClassBlock + '-hidden)'));
        $(this).dequeue();
      });
  });

});

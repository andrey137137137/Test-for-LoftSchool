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

    // $('.course').filter(function(){

    //   if ($(this).css('display') == 'none')
    //   {
    //     return false;
    //   }

    //   return true;

    // })
    $('.' + wrapClassBlock + ':not(.' + wrapClassBlock + '-hidden)').each(function (index) {

      // var $wrap = $(this).parent();
      var divider = 2;

      console.log(index);

      if ($(window).width() > 815)
      {
        divider = 3
      }

      if (index % divider === 0)
      {
        $(this).css('clear', 'both');
      }
      else
      {
        $(this).css('clear', 'none');
        // $(this).removeAttr('style');
      }

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

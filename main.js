   function somar() {
         var result = $("input:checked");
         var total = 0;

         for (var i=0; i<result.length; i++)
         {
             total = total + parseFloat(result[i].value);
         }
         $("#result").val(total.toFixed(2));
    }

    somar();
    $(":checkbox").click(somar);

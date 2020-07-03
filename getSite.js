$(document).ready(function(){
   // console.log($.get('https://starvalleyhealth.org/providers/'));
   function callAjax(url){
      $.ajax({
         url,
         method: 'GET',
         success: function (res){
            return res;
         }
      })
   }

   async function asyncFunction(){
      return await callAjax('https://jsonplaceholder.typicode.com/posts');
   }

   console.log(asyncFunction().then(res => console.log(res)))
});

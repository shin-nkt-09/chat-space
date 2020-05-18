$(function(){ 
  function buildHTML(message){
    console.log(message)
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="message__box">
           <div message__box__user">
             ${message.user_name}
           </div>
           <div class="message__box__time">
             ${message.created_at}
           </div>
         </div>
         <div class="message__box__text">
           <p class="lower-message__body">
             ${message.body}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
        <div class="message__box">
          <div class="message__box__user">
             ${message.user_name}
           </div>
           <div class="message__box__time">
             ${message.created_at}
           </div>
         </div>
         <div class="message__box__text">
          <p class="lower-message__body">
             ${message.body}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')

 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('form')[0].reset();  	
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  })
  .always(function(){
    $('.submit-btn').attr('disabled', false);
  })
 })
});
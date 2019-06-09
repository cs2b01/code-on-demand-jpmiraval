function Enviar(){
        var content = $('#content').val();
        var user_to_id = $('#user_to_id').val();
        var message = JSON.stringify({
                "content": content,
                "user_to_id": user_to_id
            });
       $.ajax({
                 url:'/sendmessage',
                 type:'POST',
                 contentType: 'application/json',
                 data : message,
                  dataType:'json'
               });
    }
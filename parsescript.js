  var data0;
        var alt = {};
        function makealt(url){
            $.ajax({url:url,success:function(request){
                var data = CSVToArray(request);
                for (var i = 0; i < data.length; i++){
                    
                    var l;
                    l = 'c'+data[i][0];
                    var alt[l].value = data[i][1];
                }
            }});
        }
        function tcgprint(url){
            console.log('ok');
            $.ajax({url:url,success:function(request){
                data0 = CSVToArray(request);
                console.log(data0);
                for (var i = 0; i < data0.length; i++){
                     l = 'c'+data0[i][0];
                     var adate =  (data0[i][1] !== '') ? (new Date(data0[i][1]).getTime()) 
                     : (new Date(alt[l].date));
                    
                    var expression = ""+data0[i][0]+','+adate+'\n';
                    
                    $('pre').append(expression);
                }
            }
        });
        }